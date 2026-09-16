# Product scope — 3D Asset Store

## Mục tiêu

Web thương mại điện tử một người bán để bán 3D Asset và Character. Trải nghiệm khám phá lấy cảm hứng từ bố cục ảnh CGTrader do người dùng cung cấp, nhưng giản lược: header, tìm kiếm lớn, chip từ khóa và card sản phẩm. Không phải marketplace.

## Vai trò

- Guest: duyệt, tìm kiếm, xem chi tiết.
- Customer: mua, thanh toán, tải lại, xem thư viện/đơn.
- Owner: quản trị toàn bộ catalog, file, thanh toán, khách hàng và nội dung.

## Phương thức thanh toán

- Trong nước: VietQR động theo đơn, VND, nội dung chứa mã đơn; MVP đối soát thủ công.
- Quốc tế: PayPal Orders/Checkout, USD, capture và webhook xác minh ở backend.
- Chỉ đơn `Đã thanh toán` mới sinh quyền tải; link file là signed URL thời hạn ngắn.

## Ngoài phạm vi MVP

Nhiều seller, chia hoa hồng, AI generation, freelancer, chat, affiliate, subscription, forum, auction, mobile app, review và viewer 3D nâng cao. Wishlist và viewer 3D được giữ thành slice Sau MVP.

## Nguồn sự thật triển khai

- Chỉ mục: `tasks/MVP-BACKLOG.md`.
- Chi tiết: `tasks/slices/`.
- Gate còn mở: `decision-backlog.md`.
