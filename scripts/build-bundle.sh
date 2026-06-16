#!/usr/bin/env bash
set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION=$(node -p "require('$ROOT/package.json').version")
BUNDLE_NAME="claude-manual-bundle-v$VERSION"
BUNDLE_DIR="$ROOT/$BUNDLE_NAME"
ZIP_OUT="$ROOT/$BUNDLE_NAME.zip"

if [ ! -f "$ROOT/cli/dist/index.js" ]; then
  echo "Building CLI..."
  npm run cli:build --prefix "$ROOT"
else
  echo "CLI dist exists, skipping rebuild. Run 'npm run cli:build' manually to force."
fi

echo "Building docs..."
npm run docs:build --prefix "$ROOT"

echo "Assembling bundle..."
rm -rf "$BUNDLE_DIR"
mkdir -p "$BUNDLE_DIR/docs"
mkdir -p "$BUNDLE_DIR/cli"

# Static site
cp -r "$ROOT/docs/content/.vitepress/dist/." "$BUNDLE_DIR/docs/"

# CLI — just the built artifact + package.json (tsup bundles all deps)
cp -r "$ROOT/cli/dist/." "$BUNDLE_DIR/cli/dist/"
cp "$ROOT/cli/package.json" "$BUNDLE_DIR/cli/package.json"

# Templates
cp -r "$ROOT/templates/." "$BUNDLE_DIR/templates/"

# README
cat > "$BUNDLE_DIR/README.md" <<'EOF'
# Claude Manual Bundle

## 1. Docs — host the static site

Copy the `docs/` folder contents to your web server root (Nginx, Apache, Caddy, etc.).
No Node.js required on the server.

## 2. CLI — scaffold a new Claude project

```bash
cd cli
npm install -g .
# then from any directory:
npm create claude-project
```

Requires Node.js >=18.

## 3. Templates — copy to an existing project

Copy the `templates/` folder into your project root, then:
- Fill in `ABOUT_ME/role.md` with your details
- Paste `global-instructions/developer.md` or `business-user.md` into
  Claude → Settings → Edit Global Instructions
- Skills land in `.claude/skills/` — type `/skill-name` in Claude Code to use them
EOF

echo "Zipping..."
cd "$ROOT"
if command -v zip &>/dev/null; then
  zip -r "$ZIP_OUT" "$BUNDLE_NAME"
elif command -v 7z &>/dev/null; then
  7z a "$ZIP_OUT" "$BUNDLE_NAME"
else
  to_win() { cygpath -w "$1" 2>/dev/null || echo "$1" | sed 's|^/\([a-zA-Z]\)/|\1:\\|' | sed 's|/|\\|g'; }
  powershell.exe -NoProfile -Command "Compress-Archive -Path '$(to_win "$BUNDLE_DIR")' -DestinationPath '$(to_win "$ZIP_OUT")' -Force"
fi
rm -rf "$BUNDLE_DIR"

echo ""
echo "Bundle ready: $ZIP_OUT"
