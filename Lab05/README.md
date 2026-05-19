```sh
# Lab 05 - Movie Reviews

## Sinh viên

* MSSV: 23520101
* Họ tên: Huỳnh Khánh Bảo
* Môn: IE213.Q21

---

## Mô tả

Tiếp tục từ Lab 04, hoàn thiện chức năng kết nối backend và hiển thị dữ liệu thực tế từ MongoDB.

---

## Nội dung thực hiện


* Sử dụng axios để gọi API
* Tạo `MovieDataService`
* Gọi các API:

  * Lấy danh sách phim
  * Lấy chi tiết phim
  * Lấy ratings
  * Thêm / sửa / xoá review

---


* Hiển thị danh sách phim từ backend
* Tìm kiếm theo:

  * Title
  * Rating

---


* Hiển thị chi tiết phim:

  * Poster, title, plot
* Hiển thị danh sách review
* Format ngày bằng moment.js

---


* Hiển thị review theo từng phim
* Có chức năng:

  * Edit
  * Delete (theo user)

---

## Kết quả

* Kết nối frontend backend thành công
* Dữ liệu được lấy từ MongoDB
* Hiển thị danh sách phim và review đúng
* Tìm kiếm hoạt động
* UI hoàn chỉnh theo yêu cầu

---

## Cách chạy

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm start
```

---