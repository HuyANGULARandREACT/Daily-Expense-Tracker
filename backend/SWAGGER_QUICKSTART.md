# 🚀 Hướng dẫn nhanh sử dụng Swagger

## Đã cài đặt và cấu hình xong! ✅

### Các file đã được tạo/chỉnh sửa:

1. **`src/configs/swagger.ts`** - File cấu hình Swagger
2. **`src/server.ts`** - Đã tích hợp Swagger UI
3. **`src/modules/users/routes/user.route.ts`** - Đã thêm documentation
4. **`src/modules/category/routes/category.route.ts`** - Đã thêm documentation
5. **`src/modules/expense/routes/expense.route.ts`** - Đã thêm documentation

### Dependencies đã cài đặt:

```json
{
  "swagger-jsdoc": "^6.x.x",
  "swagger-ui-express": "^5.x.x",
  "@types/swagger-jsdoc": "^3.x.x",
  "@types/swagger-ui-express": "^4.x.x"
}
```

---

## 📖 Cách sử dụng

### Bước 1: Chạy server

```bash
cd backend
npm run dev
```

### Bước 2: Mở Swagger UI

Truy cập: **http://localhost:4000/api-docs**

### Bước 3: Test API

#### Không cần authentication:

- `POST /auth/register` - Đăng ký
- `POST /auth/login` - Đăng nhập

#### Cần authentication:

1. Đăng nhập để lấy token
2. Click nút **"Authorize"** 🔓
3. Nhập: `Bearer <token-của-bạn>`
4. Click "Authorize" rồi "Close"
5. Giờ có thể test các API khác!

---

## 📋 Danh sách API

### 🔐 Authentication

- `POST /api/v1/auth/register` - Đăng ký tài khoản
- `POST /api/v1/auth/login` - Đăng nhập
- `PATCH /api/v1/auth/changePassword` - Đổi mật khẩu
- `GET /api/v1/auth/:id` - Lấy thông tin user

### 📁 Category

- `GET /api/v1/category` - Lấy tất cả categories
- `GET /api/v1/category/:id` - Lấy category theo ID
- `POST /api/v1/category` - Tạo category mới
- `PUT /api/v1/category/:id` - Cập nhật category
- `DELETE /api/v1/category/:id` - Xóa category

### 💰 Expense

- `GET /api/v1/expense/:userId` - Lấy tất cả expenses
- `GET /api/v1/expense/detail/:id` - Lấy expense theo ID
- `POST /api/v1/expense` - Tạo expense mới
- `PUT /api/v1/expense/:id` - Cập nhật expense
- `DELETE /api/v1/expense/:id` - Xóa expense

---

## 💡 Tips

✨ **Try it out**: Click vào bất kỳ endpoint nào, nhấn "Try it out", điền thông tin và nhấn "Execute"

✨ **Xem Response**: Sau khi Execute, kéo xuống để xem Response body, Headers và Status code

✨ **Copy cURL**: Swagger tự động generate cURL command, có thể copy để dùng trong terminal

✨ **Schema**: Click vào "Schema" để xem cấu trúc dữ liệu chi tiết

---

## 🎯 Ví dụ nhanh

### 1. Đăng ký user mới

```json
POST /api/v1/auth/register
{
  "email": "test@example.com",
  "username": "testuser",
  "password": "Password123!"
}
```

### 2. Tạo category

```json
POST /api/v1/category
{
  "name": "Food & Drink",
  "icon": "🍔"
}
```

### 3. Tạo expense

```json
POST /api/v1/expense
{
  "amount": 50.00,
  "description": "Lunch at restaurant",
  "category": "60f7b3b3b3b3b3b3b3b3b3b3",
  "userId": "60f7b3b3b3b3b3b3b3b3b3b3",
  "date": "2024-10-12T10:30:00Z"
}
```

---

## ✅ Hoàn tất!

Swagger đã được cấu hình đầy đủ và sẵn sàng sử dụng. Giờ bạn có thể:

- ✅ Test tất cả API endpoints
- ✅ Xem chi tiết request/response schemas
- ✅ Generate API documentation tự động
- ✅ Share API docs với team members

Chúc bạn code vui! 🎉
