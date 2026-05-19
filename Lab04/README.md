```sh
# Lab 04 - Movie Reviews Frontend

## Sinh viên
- MSSV: 23520101
- Họ tên: Huỳnh Khánh Bảo
- Môn: IE213.Q21

## Mô tả
Ứng dụng frontend React cho phép người dùng xem danh sách phim, chi tiết phim, thêm review và đăng nhập. Ứng dụng sử dụng React Router để định tuyến và React Bootstrap cho giao diện người dùng.

## Các component chính

| Component | Đường dẫn | Mô tả |
|-----------|----------|-------|
| MoviesList | `/` | Hiển thị danh sách phim |
| Movie | `/movies/:id` | Chi tiết phim và các review |
| AddReview | `/movies/:id/review` | Form thêm review |
| Login | `/login` | Trang đăng nhập |

## Kết quả thực hiện
- Navigation Bar hoàn tành với logo "Movie Reviews"
- 4 component chính được tạo: MoviesList, Movie, AddReview, Login
- Định tuyến đầy đủ cho tất cả trang
- Quản lý trạng thái đăng nhập với useState
- Hiển thị Login/Logout trong Navigation Bar

## Cách chạy
1. Cài dependencies: `cd frontend && npm install`
2. Chạy ứng dụng: `npm start`
3. Mở trình duyệt tại `http://localhost:3000`

```