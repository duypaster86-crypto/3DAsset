# MVP Backlog — 3D Asset Store

Bảng chỉ mục cấp cao cho web thương mại điện tử tài sản số 3D của một người bán. Chi tiết và tiêu chí nghiệm thu nằm trong từng file slice.

## Quy tắc

- ID bất biến: chỉ thêm dòng mới, không xóa, không đánh số lại.
- Mỗi slice tối đa 2–4 task nhỏ và phải kết thúc bằng một luồng bấm được xuyên UI → API → Service → DB/đối tác.
- Một Owner khi chuyển sang `Đang làm`; phụ thuộc phải Done trước khi bắt đầu.
- MVP không bao gồm marketplace nhiều seller, AI tạo model, freelancer, affiliate, subscription, forum, auction hoặc mobile app.
- Cập nhật tài liệu trước, code sau; một slice tương ứng một PR.

## Bảng chỉ mục

| ID | Tên | Mốc | Cơ chế | Trạng thái | Owner | Nhánh | PR | Phụ thuộc | File chi tiết |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| slice-0 | Walking skeleton | MVP | Dọc | Chưa bắt đầu | — | — | — | — | `slices/slice-0-walking-skeleton.md` |
| slice-1 | Đăng nhập và phân quyền chủ shop/khách hàng | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-0 | `slices/slice-1-d-ng-nh-p-v-ph-n-quy-n-ch-shop-kh-ch-h-ng.md` |
| slice-2 | Danh mục, tag, collection và cấu hình cửa hàng | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-1 | `slices/slice-2-danh-m-c-tag-collection-v-c-u-h-nh-c-a-h-ng.md` |
| slice-3 | Quản lý vòng đời sản phẩm | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-2 | `slices/slice-3-qu-n-l-v-ng-d-i-s-n-ph-m.md` |
| slice-4 | Media, file nguồn và thông số 3D | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-3 | `slices/slice-4-media-file-ngu-n-v-th-ng-s-3d.md` |
| slice-5 | Trang chủ storefront tối giản | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-3, slice-4 | `slices/slice-5-trang-ch-storefront-t-i-gi-n.md` |
| slice-6 | Catalog, tìm kiếm, lọc và sắp xếp | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-5 | `slices/slice-6-catalog-t-m-ki-m-l-c-v-s-p-x-p.md` |
| slice-7 | Chi tiết sản phẩm và giấy phép | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-4, slice-6 | `slices/slice-7-chi-ti-t-s-n-ph-m-v-gi-y-ph-p.md` |
| slice-8 | Giỏ hàng | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-1, slice-7 | `slices/slice-8-gi-h-ng.md` |
| slice-9 | Checkout, đơn hàng và tỷ giá | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-8 | `slices/slice-9-checkout-d-n-h-ng-v-t-gi.md` |
| slice-10 | VietQR động cho chuyển khoản trong nước | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-9 | `slices/slice-10-vietqr-d-ng-cho-chuy-n-kho-n-trong-n-c.md` |
| slice-11 | Đối soát VietQR thủ công | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-10 | `slices/slice-11-d-i-so-t-vietqr-th-c-ng.md` |
| slice-12 | PayPal Checkout quốc tế | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-9 | `slices/slice-12-paypal-checkout-qu-c-t.md` |
| slice-13 | Giao file số an toàn | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-11, slice-12 | `slices/slice-13-giao-file-s-an-to-n.md` |
| slice-14 | Thư viện và lịch sử đơn hàng khách hàng | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-13 | `slices/slice-14-th-vi-n-v-l-ch-s-d-n-h-ng-kh-ch-h-ng.md` |
| slice-15 | Phiên bản sản phẩm và cập nhật cho người mua | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-4, slice-13 | `slices/slice-15-phi-n-b-n-s-n-ph-m-v-c-p-nh-t-cho-ng-i-mua.md` |
| slice-16 | Quản trị đơn hàng, hoàn tiền và cấp quyền | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-13, slice-14 | `slices/slice-16-qu-n-tr-d-n-h-ng-ho-n-ti-n-v-c-p-quy-n.md` |
| slice-17 | Quản trị khách hàng | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-14, slice-16 | `slices/slice-17-qu-n-tr-kh-ch-h-ng.md` |
| slice-18 | Mã giảm giá | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-3, slice-8 | `slices/slice-18-m-gi-m-gi.md` |
| slice-19 | Nội dung, liên hệ và chính sách cửa hàng | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-2, slice-5 | `slices/slice-19-n-i-dung-li-n-h-v-ch-nh-s-ch-c-a-h-ng.md` |
| slice-20 | Email giao dịch | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-1, slice-13, slice-15 | `slices/slice-20-email-giao-d-ch.md` |
| slice-21 | Dashboard doanh thu và báo cáo | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-16, slice-17 | `slices/slice-21-dashboard-doanh-thu-v-b-o-c-o.md` |
| slice-22 | Responsive, SEO, hiệu năng và accessibility | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-5, slice-6, slice-7, slice-14 | `slices/slice-22-responsive-seo-hi-u-n-ng-v-accessibility.md` |
| slice-23 | Bảo mật, audit và vận hành | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-12, slice-13, slice-16 | `slices/slice-23-b-o-m-t-audit-v-v-n-h-nh.md` |
| slice-24 | E2E, triển khai và nghiệm thu MVP | MVP | Dọc | Chưa bắt đầu | — | — | — | slice-18, slice-19, slice-20, slice-21, slice-22, slice-23 | `slices/slice-24-e2e-tri-n-khai-v-nghi-m-thu-mvp.md` |
| slice-25 | Wishlist khách hàng | Sau MVP | Dọc | Chưa bắt đầu | — | — | — | slice-14 | `slices/slice-25-wishlist-kh-ch-h-ng.md` |
| slice-26 | Trình xem mô hình 3D trên web | Sau MVP | Dọc | Chưa bắt đầu | — | — | — | slice-4, slice-7 | `slices/slice-26-tr-nh-xem-m-h-nh-3d-tr-n-web.md` |

## Trạng thái hợp lệ

Chưa bắt đầu, Đang làm, Review, Done, Done (còn nợ), Hoãn, Đã hủy, Đã thay thế.

## Thứ tự MVP khuyến nghị

- Nền tảng: slice-0 → slice-4.
- Trải nghiệm mua: slice-5 → slice-9.
- Thanh toán và giao file: slice-10 → slice-16.
- Vận hành cửa hàng: slice-17 → slice-23.
- Nghiệm thu: slice-24.
- Sau MVP: slice-25 và slice-26.
