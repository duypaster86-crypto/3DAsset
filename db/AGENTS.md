# AGENTS.md — Database Migrations

Nhật ký quản lý migration database.

## Bối cảnh feature

- Nhiệm vụ: Quản lý schema PostgreSQL và migration append-only cho 3D Asset Store.
- Slice/Task đang triển khai: slice-0, xem `docs/tasks/slices/slice-0-walking-skeleton.md`
- Owner hiện tại: Duy Tran
- Nhánh: feature/slice-0-walking-skeleton

## Nhật ký liên tục

### 2026-09-16

**Đã xong**
- Tạo migration `001_initial_system_check.sql` với bảng `system_metadata` và rollback `migrate:down`.
