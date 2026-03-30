# Exness — High-Performance Synthetic Trading Platform

A modern, high-throughput synthetic trading engine and full-stack exchange platform built with TypeScript, Turborepo, Next.js, Express, Redis, and PostgreSQL.

## 🏗 System Architecture

The platform is designed around an event-driven microservices architecture optimized for low-latency order execution, real-time market data streaming, and automated risk management:

- **`apps/web`**: Next.js 15 frontend trading interface with real-time charting, orderbook visualization, position monitoring, and wallet management.
- **`apps/api-service`**: REST and WebSocket API gateway handling authentication (JWT + bcrypt), user balances, deposit flows, and order dispatching.
- **`apps/engine-service`**: High-performance in-memory matching and execution engine. Processes synthetic market orders, enforces leverage/margin requirements, executes take-profit and stop-loss rules, and runs automated liquidation checks.
- **`apps/price-poller-service`**: Real-time market feed ingestion service connecting to external exchange WebSocket feeds (e.g. Backpack Exchange) and streaming price updates to Redis.
- **`packages/db`**: PostgreSQL database with Prisma ORM for relational persistence of users, multi-currency assets with base-unit BigInt precision, and order history.
- **`packages/redis`**: High-throughput Redis Streams and Pub/Sub communication layer connecting ingestion, execution, and API services.
- **`packages/types`**: Shared domain models, contracts, and WebSocket message schemas.
- **`packages/ui`**: Reusable React design system components.
- **`packages/eslint-config` & `packages/typescript-config`**: Shared monorepo developer tooling.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- pnpm >= 9.x
- Docker & Docker Compose

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/dipesh-svg/exness.git
cd exness
pnpm install
```

### 2. Start Infrastructure Services

Spin up local PostgreSQL and Redis instances using Docker:

```bash
docker compose up -d
```

### 3. Setup Database Schema

Apply Prisma migrations to the database and generate the Prisma Client:

```bash
pnpm --filter @repo/db migrate
pnpm --filter @repo/db generate
```

### 4. Run Development Servers

Start all microservices and frontend concurrently:

```bash
pnpm dev
```

- **Web Frontend**: [http://localhost:3000](http://localhost:3000)
- **API Service Gateway**: [http://localhost:3001](http://localhost:3001)
- **Engine Service**: [http://localhost:3002](http://localhost:3002)
- **Price Poller Service**: [http://localhost:3003](http://localhost:3003)

## 📊 Key Features

- **Microsecond In-Memory Execution**: Orders are matched in-memory within the engine service and asynchronously persisted via snapshots.
- **Financial Grade Precision**: All balances and order quantities use integer base units (BigInt) to eliminate floating-point rounding errors.
- **Automated Risk Engine**: Continuous margin ratio calculation and automated liquidation when position equity drops below maintenance margin thresholds.
- **Distributed Redis Streams**: Decoupled message queues allow horizontal scaling of API instances without compromising matching engine consistency.

## 📜 License

MIT License.
