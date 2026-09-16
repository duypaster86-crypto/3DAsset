# Slice/Task slice-4 — Media, file nguồn và thông số 3D

- Cơ chế: Dọc
- Mốc: MVP
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md` (nguồn trạng thái duy nhất, không ghi trùng ở đây để tránh lệch)
- Phụ thuộc: slice-3
- Sửa mục gốc: —

## Mục tiêu bấm được / nghiệm thu được

Media, file nguồn và thông số 3D hoạt động xuyên suốt UI → API → Service → Database/đối tác liên quan, tạo ra một luồng người dùng có thể tự bấm và kiểm chứng.

## Task

| # | Task | Tầng (nếu dùng Lát cắt ngang) | Ghi chú |
| --- | --- | --- | --- |
| 1 | Tạo upload ảnh preview/thumbnail/video link, sắp xếp gallery và sinh thumbnail tối ưu. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 2 | Tạo upload file ZIP/RAR/7Z/3D vào object storage, lưu dung lượng/checksum và giới hạn định dạng. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 3 | Tạo form thông số polygon, vertex, texture, format, software, rigged, animated và game-ready. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |
| 4 | Bảo vệ file nguồn bằng private storage; chỉ Owner hoặc người đã mua được yêu cầu link tải. | — | Bao gồm code, migration/contract liên quan và test nhỏ nhất phù hợp. |

## Stub cho phép

- Nội dung demo, ảnh mẫu và dữ liệu seed không nhạy cảm có thể dùng tạm nếu được đánh dấu `TODO(slice-4)`.
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

Owner đăng đủ ảnh, video, file và thông số; URL file nguồn không bị công khai.

Ngoài tiêu chí trên, phải đạt Definition of Done trong `../../methodology/vertical-slice.md`, `../../../AGENTS.md` và profile web app.

## Bàn giao phiên gần nhất

Điền theo mẫu `../../ai-workflow/templates/session-handoff.md` khi dừng giữa chừng.
