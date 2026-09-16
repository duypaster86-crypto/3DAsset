# Slice/Task slice-16 — Quản trị đơn hàng, hoàn tiền và cấp quyền

- Cơ chế: Dọc
- Mốc: MVP
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md` (nguồn trạng thái duy nhất, không ghi trùng ở đây để tránh lệch)
- Phụ thuộc: slice-13, slice-14
- Sửa mục gốc: —

## Mục tiêu bấm được / nghiệm thu được

Quản trị đơn hàng, hoàn tiền và cấp quyền hoạt động xuyên suốt UI → API → Service → Database/đối tác liên quan, tạo ra một luồng người dùng có thể tự bấm và kiểm chứng.

## Task

| # | Task | Tầng (nếu dùng Lát cắt ngang) | Ghi chú |
| --- | --- | --- | --- |
| 1 | Tạo bảng đơn có lọc trạng thái/thời gian/payment method và tìm mã/email. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 2 | Tạo chi tiết đơn, ghi chú nội bộ, gửi lại email và cấp lại quyền tải có audit. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 3 | Tạo hoàn tiền PayPal qua backend và ghi nhận hoàn tiền VietQR thủ công. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 4 | Thu hồi entitlement theo chính sách hoàn tiền và kiểm tra chuyển trạng thái hợp lệ. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |

## Stub cho phép

- Nội dung demo, ảnh mẫu và dữ liệu seed không nhạy cảm có thể dùng tạm nếu được đánh dấu `TODO(slice-16)`.
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

Owner tìm đơn, hỗ trợ tải lại và hoàn tiền mà trạng thái/quyền tải luôn nhất quán.

Ngoài tiêu chí trên, phải đạt Definition of Done trong `../../methodology/vertical-slice.md`, `../../../AGENTS.md` và profile web app.

## Bàn giao phiên gần nhất

Điền theo mẫu `../../ai-workflow/templates/session-handoff.md` khi dừng giữa chừng.
