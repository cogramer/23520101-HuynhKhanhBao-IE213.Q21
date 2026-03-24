```sh
# Lab 02 - THIẾT LẬP BACKEND VỚI NODE|EXPRESSJS

## Sinh viên
- MSSV: 23520101
- Họ tên: Huỳnh Khánh Bảo

## Mô tả
Xây dựng backend REST API cho ứng dụng Movie Reviews sử dụng Node.js, Express, MongoDB.

## Cấu trúc project
Lab02/
└── movie-reviews/
    └── backend/
        ├── api/
        │   ├── movies.controller.js
        │   └── movies.route.js
        ├── dao/
        │   └── moviesDAO.js
        ├── index.js
        ├── server.js
        └── package.json

## Kết quả
- Server chạy tại: http://localhost:8000
- API endpoint: GET /api/v1/movies
- Hỗ trợ filter theo rated, title
- Hỗ trợ phân trang qua moviesPerPage, page
```