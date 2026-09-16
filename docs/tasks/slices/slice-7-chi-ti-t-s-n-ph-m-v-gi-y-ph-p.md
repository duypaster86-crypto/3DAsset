# Slice/Task slice-7 — Chi tiết sản phẩm và giấy phép

- Cơ chế: Dọc
- Mốc: MVP
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md` (nguồn trạng thái duy nhất, không ghi trùng ở đây để tránh lệch)
- Phụ thuộc: slice-4, slice-6
- Sửa mục gốc: —

## Mục tiêu bấm được / nghiệm thu được

Chi tiết sản phẩm và giấy phép hoạt động xuyên suốt UI → API → Service → Database/đối tác liên quan, tạo ra một luồng người dùng có thể tự bấm và kiểm chứng.

## Task

| # | Task | Tầng (nếu dùng Lát cắt ngang) | Ghi chú |
| --- | --- | --- | --- |
| 1 | Tạo trang chi tiết gồm gallery, video, giá, mô tả, thông số, danh sách file và ngày cập nhật. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 2 | Tạo Personal/Commercial License, nội dung điều khoản, giá theo license và lựa chọn mua. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 3 | Tạo sản phẩm liên quan theo collection/danh mục/tag và xử lý Free/Hidden/Discontinued. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 4 | Tạo metadata chia sẻ cơ bản và test không lộ file nguồn. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |

## Stub cho phép

- Nội dung demo, ảnh mẫu và dữ liệu seed không nhạy cảm có thể dùng tạm nếu được đánh dấu `TODO(slice-7)`.
- Tích hợp ngoài phạm vi slice có thể dùng sandbox/fake adapter có contract rõ ràng; riêng điều kiện cấm dưới đây phải dùng triển khai thật khi nghiệm thu.

## Không được stub

Xác thực, phân quyền, kiểm tra giá/đơn/quyền tải, xác minh thanh toán, secret, chuỗi hiển thị đa ngôn ngữ và ranh giới bảo vệ file — trừ khi có ADR được duyệt.

## Nợ kỹ thuật

| Marker | Vị trí | Nội dung | Dự kiến trả |
| --- | --- | --- | --- |

## Nhật ký thay đổi phạm vi của riêng Slice/Task này

| Ngày | Loại | Nội dung | Lý do | ADR |
| --- | --- | --- | --- | --- |

## Cách nghiệm thu

Khách xem đủ thông tin, chọn license và chuyển đúng sản phẩm sang bước mua.

Ngoài tiêu chí trên, phải đạt Definition of Done trong `../../methodology/vertical-slice.md`, `../../../AGENTS.md` và profile web app.

## Bàn giao phiên gần nhất

Điền theo mẫu `../../ai-workflow/templates/session-handoff.md` khi dừng giữa chừng.
