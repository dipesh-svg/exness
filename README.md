# Exness — Synthetic Trading Engine

A scalable, high-performance monorepo architecture for synthetic exchange trading.

## Services Overview
- `apps/engine-service`: In-memory order execution and margin risk evaluation
- `apps/price-poller-service`: Synthetic & market websocket price feed ingestion
- `apps/api-service`: Client facing REST & WebSocket gateway
- `packages/db`: Prisma & PostgreSQL persistence layer
- `packages/redis`: Pub/Sub and stream processing
