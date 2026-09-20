# AGENTS.md — Feature Health & Readiness (API)

Nhật ký này thuộc riêng feature health của API.

## Bối cảnh feature

- Nhiệm vụ: Cung cấp endpoint kiểm tra tiến trình sống (liveness `/healthz`) và sẵn sàng phục vụ/kết nối DB (readiness `/readyz`).
- Slice/Task đang triển khai: slice-0, xem `docs/tasks/slices/slice-0-walking-skeleton.md`
- Phụ thuộc module nào, qua cửa công khai nào: `packages/shared`, `platform/db`, `platform/logger`
- Owner hiện tại: Duy Tran
- Nhánh: feature/slice-0-walking-skeleton

## Contract (cửa công khai — chốt trước, không đổi giữa chừng)

- `registerHealthFeature(app: FastifyInstance): Promise<void>`
- `healthService.getHealth(): HealthStatus`
- `healthService.getReadiness(): Promise<ReadinessStatus>`

## Nhật ký liên tục (thêm mục mới mỗi ngày, không ghi đè mục cũ)

### 2026-09-16

**Đã xong**
- Thiết lập Fastify 5 plugin routes với Zod schema validation.
- Hiện thực HealthService tính uptime và ping PostgreSQL qua Kysely pool.
- Viết test Vitest cho `/healthz` và `/readyz`.

**Đang làm dở**
- Không có.

**Bước tiếp theo**
- Nối với frontend dashboard trong `apps/web`.
