```sh
LAB 01 - MONGODB - CRUD Operation

Thông tin:
MSSV: 23520101
Họ tên: Huỳnh Khánh Bảo
Môn: IE213.Q21

Những câu lệnh sử dụng (Kết quả thực hiện trong các ảnh đi kèm)

2.1 Tạo database
use 23520101-IE213

2.2 Thêm documents vào collection employees
db.employees.insertMany([
  {"id":1,"name":{"first":"John","last":"Doe"},"age":48},
  {"id":2,"name":{"first":"Jane","last":"Doe"},"age":16},
  {"id":3,"name":{"first":"Alice","last":"A"},"age":32},
  {"id":4,"name":{"first":"Bob","last":"B"},"age":64}
])

2.3 Tạo unique index cho trường id
db.employees.createIndex({ id: 1 }, { unique: true })

2.4 Tìm John Doe
db.employees.find({ "name.first": "John", "name.last": "Doe" })

2.5 Tìm người có tuổi trên 30 và dưới 60
db.employees.find({
  $and: [
    { age: { $gt: 30 } },
    { age: { $lt: 60 } }
  ]
})

2.6 Thêm document mới và tìm người có middle name
Thêm 2 document
db.employees.insertMany([
  {"id":5,"name":{"first":"Rooney","middle":"K","last":"A"},"age":30},
  {"id":6,"name":{"first":"Ronaldo","middle":"T","last":"B"},"age":60}
])

Tìm document có middle name
db.employees.find({ "name.middle": { $exists: true } })

2.7 Xoá trường middle name khỏi các document có nó
db.employees.updateMany(
  { "name.middle": { $exists: true } },
  { $unset: { "name.middle": null } }
)

2.8 Thêm trường organization: "UIT" vào tất cả document
db.employees.updateMany(
  {},
  { $set: { organization: "UIT" } }
)

2.9 Đổi organization của id 5 và 6 thành "USSH"
db.employees.updateMany(
  { id: { $in: [5, 6] } },
  { $set: { organization: "USSH" } }
)

2.10 Tính tổng tuổi và tuổi trung bình theo organization
db.employees.aggregate([
  {
    $group: {
      _id: "$organization",
      totalAge: { $sum: "$age" },
      avgAge: { $avg: "$age" }
    }
  }
])
```