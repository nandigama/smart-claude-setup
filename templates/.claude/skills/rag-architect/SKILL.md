---
name: rag-architect
description: Design a retrieval-augmented generation (RAG) pipeline — chunking strategy, embedding model, vector store, retrieval pattern, and evaluation approach. Produces an implementable RAG spec. Trigger: /rag-architect
---

# /rag-architect

Designs a complete RAG pipeline for your specific use case — from document ingestion through
chunking, embedding, retrieval, and generation. Avoids the common trap of naive chunking
and cosine-similarity-only retrieval that produces confident but wrong answers.

## Step 1 — Gather Context

Use AskUserQuestion to collect:

1. What documents will be in the knowledge base? (type, volume, update frequency)
   - e.g., "500 PDF product manuals, updated quarterly"
2. What questions will users ask? (factual lookups / reasoning across docs / summarization / comparison)
3. What does a wrong answer cost? (high — medical/legal / medium — customer support / low — internal search)
4. What is your deployment environment? (cloud / on-premise / serverless / edge)
5. Do you have a preferred stack? (Python / TypeScript, any specific vector DB or embedding model)
6. What's your expected query volume? (prototyping / < 1k/day / > 1k/day)

Do not produce any output until the user answers all questions.

## Step 2 — Produce the RAG Architecture

### Chunking Strategy

Recommend one of:

| Strategy | Best for |
|---|---|
| **Fixed-size with overlap** | Uniform documents, fast ingestion |
| **Sentence/paragraph** | Natural language docs where sentence boundaries matter |
| **Semantic chunking** | Heterogeneous docs; splits on topic boundaries |
| **Hierarchical (parent + child)** | Long docs where context above the chunk matters |
| **Document-aware** | PDFs with sections, tables, headers — preserve structure |

Specify: chunk size (tokens), overlap, and whether to store parent context separately.

### Embedding Model

| Option | Trade-off |
|---|---|
| `text-embedding-3-small` | Fast, cheap, good general quality |
| `text-embedding-3-large` | Best quality, 3× cost |
| `nomic-embed-text` (open source) | Self-hosted, no API cost |
| `voyage-3` (Voyage AI) | State-of-art retrieval benchmarks |

Recommend based on the user's accuracy needs and deployment constraints.

### Vector Store

| Option | Best for |
|---|---|
| **Pinecone** | Managed, scalable, production default |
| **pgvector** | Already using PostgreSQL; less infra overhead |
| **Chroma** | Local development, prototyping |
| **Weaviate** | Hybrid search (vector + BM25) out of the box |
| **Qdrant** | High-performance, self-hosted |

### Retrieval Pattern

Select based on query type:

- **Dense retrieval only**: cosine similarity — good for semantic matching
- **Hybrid (BM25 + dense)**: better recall for keyword-heavy queries
- **HyDE (hypothetical document)**: LLM generates a hypothetical answer → embed → retrieve — better for complex questions
- **Multi-query**: LLM generates N query variants → retrieve for each → deduplicate — reduces single-query blind spots
- **Re-ranking**: initial broad retrieval (top-50) → cross-encoder re-rank (top-5) — higher precision at query time

Recommend the retrieval pattern and top-k values (initial retrieval and final context window).

### Generation Prompt Pattern

```
You are [role]. Answer the question using only the provided context.
If the answer is not in the context, say "I don't have that information."

Context:
{retrieved_chunks}

Question: {user_query}

Answer:
```

Note any guardrails specific to the user's accuracy requirements.

### Evaluation Plan

| What to measure | How |
|---|---|
| Retrieval precision@k | Does the right chunk come back? |
| Answer faithfulness | Is the answer grounded in the retrieved context? |
| Answer relevance | Does the answer address the question? |

Recommend a tool: Ragas (open source), LangSmith eval, or a simple manual rubric.

## Step 3 — Implementation Scaffold

Ask: "Do you want a starter implementation? I can produce: (a) ingestion pipeline in Python, (b) retrieval function with the recommended strategy, or (c) an evaluation script to measure retrieval quality on sample queries."
