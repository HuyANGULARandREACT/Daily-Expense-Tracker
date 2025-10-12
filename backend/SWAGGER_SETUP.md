# Cấu hình Swagger cho Backend - Daily Expense Tracker

## ✅ Các bước đã hoàn thành

### 1. Cài đặt Dependencies

```bash
npm install swagger-jsdoc swagger-ui-express
npm install --save-dev @types/swagger-jsdoc @types/swagger-ui-express
```

### 2. Tạo file cấu hình Swagger

📁 `src/configs/swagger.ts`

- Định nghĩa OpenAPI 3.0.0 specification
- Cấu hình server URL: `http://localhost:4000/api/v1`
- Định nghĩa JWT Bearer authentication
- Tạo schemas cho: User, Category, Expense, Error

### 3. Tích hợp Swagger vào Server

📁 `src/server.ts`

- Import `swagger-ui-express` và `swaggerSpec`
- Thêm route `/api-docs` để hiển thị Swagger UI

### 4. Thêm Swagger Annotations vào Routes

#### ✅ User Routes (`src/modules/users/routes/user.route.ts`)

- POST `/auth/register` - Đăng ký user mới
- POST `/auth/login` - Đăng nhập
- PATCH `/auth/changePassword` - Đổi mật khẩu
- GET `/auth/:id` - Lấy thông tin user

#### ✅ Category Routes (`src/modules/category/routes/category.route.ts`)

- GET `/category` - Lấy tất cả categories
- GET `/category/:id` - Lấy category theo ID
- POST `/category` - Tạo category mới
- PUT `/category/:id` - Cập nhật category
- DELETE `/category/:id` - Xóa category

#### ✅ Expense Routes (`src/modules/expense/routes/expense.route.ts`)

- GET `/expense/:userId` - Lấy tất cả expenses của user
- GET `/expense/detail/:id` - Lấy expense theo ID
- POST `/expense` - Tạo expense mới
- PUT `/expense/:id` - Cập nhật expense
- DELETE `/expense/:id` - Xóa expense

## 🚀 Cách sử dụng

### Chạy Server

```bash
cd backend
npm run dev
```

### Truy cập Swagger UI

Mở trình duyệt và truy cập:

```
http://localhost:4000/api-docs
```

### Test API với Authentication

1. **Đăng ký/Đăng nhập:**

   - Sử dụng endpoint `POST /auth/register` hoặc `POST /auth/login`
   - Copy JWT token từ response

2. **Xác thực:**

   - Click nút **"Authorize"** 🔓 ở góc trên bên phải
   - Nhập: `Bearer <your-token-here>`
   - Click **"Authorize"** và **"Close"**

3. **Test các endpoints:**
   - Chọn endpoint muốn test
   - Click **"Try it out"**
   - Điền parameters/body
   - Click **"Execute"**

## 📝 Cấu trúc Documentation

### Tags

- **Authentication** - Các API liên quan đến user authentication
- **Category** - Quản lý expense categories
- **Expense** - Quản lý expense records

### Schemas

Định nghĩa trong `swagger.ts`:

- **User** - Thông tin user
- **Category** - Category structure
- **Expense** - Expense record structure
- **Error** - Error response format

### Security

- Tất cả endpoints (trừ `/auth/register` và `/auth/login`) yêu cầu JWT token
- Format: `Bearer <token>`
- Token được gửi trong header `Authorization`

## 📂 File Structure

```
backend/
├── src/
│   ├── configs/
│   │   └── swagger.ts          # Swagger configuration
│   ├── server.ts                # Server setup with Swagger UI
│   └── modules/
│       ├── users/routes/        # User routes with @swagger annotations
│       ├── category/routes/     # Category routes with @swagger annotations
│       └── expense/routes/      # Expense routes with @swagger annotations
├── SWAGGER_README.md            # Chi tiết về Swagger
└── package.json                 # Dependencies đã được cập nhật
```

## 🎯 Tính năng

✅ Interactive API documentation  
✅ Try-it-out functionality  
✅ JWT authentication support  
✅ Request/Response schemas  
✅ Request examples  
✅ Error responses documentation  
✅ Dark/Light theme support (built-in)

## 📌 Lưu ý

- **Base URL**: `http://localhost:4000/api/v1`
- **Swagger UI**: `http://localhost:4000/api-docs`
- Swagger sẽ tự động scan các file routes để tạo documentation
- Có thể customize thêm schemas, examples trong `swagger.ts`
- Để thêm endpoint mới, chỉ cần thêm JSDoc comments theo format có sẵn

## 🔧 Troubleshooting

### Swagger UI không hiển thị

- Kiểm tra server đã chạy chưa
- Verify đường dẫn `apis` trong `swagger.ts`
- Restart server

### API không xuất hiện trong danh sách

- Kiểm tra format JSDoc comments
- Đảm bảo có `@swagger` tag
- Verify file path match với pattern trong `swagger.ts`

### Authentication không hoạt động

- Đảm bảo có "Bearer " prefix
- Check token expiration
- Verify middleware authentication

## 📚 Tài liệu tham khảo

- [Swagger OpenAPI Specification](https://swagger.io/specification/)
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)
- [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)

---

**Status**: ✅ Hoàn thành và sẵn sàng sử dụng
