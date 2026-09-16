# Slice/Task slice-10 — VietQR động cho chuyển khoản trong nước

- Cơ chế: Dọc
- Mốc: MVP
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md` (nguồn trạng thái duy nhất, không ghi trùng ở đây để tránh lệch)
- Phụ thuộc: slice-9
- Sửa mục gốc: —

## Mục tiêu bấm được / nghiệm thu được

VietQR động cho chuyển khoản trong nước hoạt động xuyên suốt UI → API → Service → Database/đối tác liên quan, tạo ra một luồng người dùng có thể tự bấm và kiểm chứng.

## Task

| # | Task | Tầng (nếu dùng Lát cắt ngang) | Ghi chú |
| --- | --- | --- | --- |
| 1 | Tạo cấu hình ngân hàng, số tài khoản, tên chủ tài khoản và bật/tắt VietQR; không ghi dữ liệu thật vào repo. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 2 | Sinh QR theo chuẩn VietQR chứa số tiền VND và nội dung 3D + mã đơn. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 3 | Tạo màn hình QR có số tiền/nội dung/nút sao chép, đếm hạn và hướng dẫn chuyển khoản. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 4 | Tạo hành động “Tôi đã chuyển khoản” đưa đơn sang Chờ xác nhận, chống gửi lặp. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |

## Stub cho phép

- Nội dung demo, ảnh mẫu và dữ liệu seed không nhạy cảm có thể dùng tạm nếu được đánh dấu `TODO(slice-10)`.
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

Mỗi đơn VND có QR đúng tài khoản, đúng số tiền, đúng mã và chuyển sang Chờ xác nhận.

Ngoài tiêu chí trên, phải đạt Definition of Done trong `../../methodology/vertical-slice.md`, `../../../AGENTS.md` và profile web app.

## Bàn giao phiên gần nhất

Điền theo mẫu `../../ai-workflow/templates/session-handoff.md` khi dừng giữa chừng.
