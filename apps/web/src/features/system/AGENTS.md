# AGENTS.md — Feature System Status (Web)

Nhật ký quản lý feature system status trên frontend.

## Bối cảnh feature

- Nhiệm vụ: Hiển thị giao diện kiểm tra sức khỏe hệ thống và trạng thái kết nối backend/database cho Slice 0.
- Slice/Task đang triển khai: slice-0, xem `docs/tasks/slices/slice-0-walking-skeleton.md`
- Phụ thuộc: `@3dasset/api-client`, `@3dasset/shared`
- Owner hiện tại: Duy Tran
- Nhánh: feature/slice-0-walking-skeleton

## Contract (cửa công khai)

- `SystemStatusPage`: Page component chính
- `SystemStatusCard`: Card hiển thị trạng thái 3 tầng
- `useSystemHealth`, `useSystemReadiness`: TanStack Query hooks

## Nhật ký liên tục

### 2026-09-16

**Đã xong**
- Thiết lập React 19 component với Tailwind CSS và dark mode tokens.
- Tích hợp TanStack Query v5 tự động polling trạng thái kết nối từ Fastify API.
- Tạo nút refresh trạng thái có animation tương tác.
