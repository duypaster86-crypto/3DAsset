# ADR-001 — Vertical slices và UI Profile B

- Ngày: 2026-09-16
- Trạng thái: Chấp nhận

## Quyết định

Dùng Lát cắt dọc. Mỗi slice tạo một luồng bấm được xuyên frontend, backend, database và tích hợp ngoài. Dùng UI Profile B: Tailwind CSS + shadcn/ui vì storefront cần giao diện tùy biến theo ảnh tham khảo; không trộn MUI.

## Lý do

Người dùng yêu cầu chia thành slice, sản phẩm cần demo sớm và nghiệp vụ thanh toán/file cần kiểm chứng xuyên tầng. Shop có một người bán nên ưu tiên cấu trúc đơn giản theo feature.
