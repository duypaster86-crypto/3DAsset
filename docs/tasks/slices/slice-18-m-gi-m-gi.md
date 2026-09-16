# Slice/Task slice-18 — Mã giảm giá

- Cơ chế: Dọc
- Mốc: MVP
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md` (nguồn trạng thái duy nhất, không ghi trùng ở đây để tránh lệch)
- Phụ thuộc: slice-3, slice-8
- Sửa mục gốc: —

## Mục tiêu bấm được / nghiệm thu được

Mã giảm giá hoạt động xuyên suốt UI → API → Service → Database/đối tác liên quan, tạo ra một luồng người dùng có thể tự bấm và kiểm chứng.

## Task

| # | Task | Tầng (nếu dùng Lát cắt ngang) | Ghi chú |
| --- | --- | --- | --- |
| 1 | Tạo coupon phần trăm/số tiền cố định, thời hạn, số lượt, đơn tối thiểu và trạng thái. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 2 | Tạo phạm vi toàn shop/danh mục/sản phẩm và kiểm tra điều kiện phía backend. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 3 | Áp dụng coupon trong cart/checkout, hiển thị lý do khi không hợp lệ. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 4 | Lưu discount snapshot vào đơn và chống vượt giới hạn khi thanh toán đồng thời. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |

## Stub cho phép

- Nội dung demo, ảnh mẫu và dữ liệu seed không nhạy cảm có thể dùng tạm nếu được đánh dấu `TODO(slice-18)`.
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

Khách áp mã hợp lệ và nhận đúng giá; mã hết hạn/quá lượt bị từ chối.

Ngoài tiêu chí trên, phải đạt Definition of Done trong `../../methodology/vertical-slice.md`, `../../../AGENTS.md` và profile web app.

## Bàn giao phiên gần nhất

Điền theo mẫu `../../ai-workflow/templates/session-handoff.md` khi dừng giữa chừng.
