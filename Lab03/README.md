```sh
# Lab 03 - Movie Reviews REST API

## Sinh viên
- MSSV: 23520101
- Họ tên: Huỳnh Khánh Bảo
- Môn: IE213.Q21

## Mô tả
REST API sử dụng Node.js, Express và MongoDB cho phép thêm/sửa/xoá reviews phim.

## Các API endpoint

| Method | URL | Mô tả |
|--------|-----|-------|
| GET | /api/v1/movies | Lấy danh sách phim |
| POST | /api/v1/movies/review | Thêm review |
| PUT | /api/v1/movies/review | Sửa review |
| DELETE | /api/v1/movies/review | Xoá review |

## Kết quả thực hiện
- POST review: thành công, collection `reviews` được tạo trong MongoDB
- PUT review: cập nhật đúng document theo review_id và user_id
- DELETE review: xoá đúng document

## Cách chạy
1. Cài dependencies: `npm install`
2. Tạo file `.env` từ `.env.example`, điền URI MongoDB
3. Chạy server: `node index.js`
```