# 🧪 Test Swagger Documentation

## ✅ Đã hoàn thành cấu hình! Giờ hãy test thử!

---

## 🚀 Bước 1: Khởi động Server

```bash
cd c:/Users/nguye/OneDrive/Documents/GitHub/Daily-Expense-Tracker/backend
npm run dev
```

**Kết quả mong đợi:**

```
🚀 Server running on port 4000
📚 Swagger documentation available at http://localhost:4000/api-docs
```

---

## 🌐 Bước 2: Mở Swagger UI

Mở trình duyệt và truy cập:

```
http://localhost:4000/api-docs
```

**Bạn sẽ thấy:**

- ✅ Giao diện Swagger UI
- ✅ 3 nhóm API: Authentication, Category, Expense
- ✅ Tổng cộng 14 endpoints
- ✅ Nút "Authorize" ở góc trên bên phải

---

## 🧪 Bước 3: Test các API

### Test 1: Đăng ký User (không cần token)

1. **Expand** section "Authentication"
2. **Click** vào `POST /auth/register`
3. **Click** nút "Try it out"
4. **Điền** Request body:
   ```json
   {
     "email": "demo@test.com",
     "username": "demouser",
     "password": "Demo123!"
   }
   ```
5. **Click** "Execute"
6. **Xem** Response:
   - Status code: 201 Created
   - Response body có thông tin user vừa tạo

### Test 2: Đăng nhập (không cần token)

1. **Click** vào `POST /auth/login`
2. **Click** "Try it out"
3. **Điền** Request body:
   ```json
   {
     "email": "demo@test.com",
     "password": "Demo123!"
   }
   ```
4. **Click** "Execute"
5. **Copy** JWT token từ response

### Test 3: Authorize với Token

1. **Click** nút "Authorize" 🔓 (góc trên bên phải)
2. **Nhập** vào ô "Value":
   ```
   Bearer <paste-token-ở-đây>
   ```
   (Chú ý: có khoảng trắng sau "Bearer")
3. **Click** "Authorize"
4. **Click** "Close"
5. ✅ Icon sẽ đổi thành 🔒 (đã authenticate)

### Test 4: Tạo Category (cần token)

1. **Click** vào `POST /category`
2. **Click** "Try it out"
3. **Điền** Request body:
   ```json
   {
     "name": "Food & Drink",
     "icon": "🍔"
   }
   ```
4. **Click** "Execute"
5. **Xem** Response:
   - Status code: 201 Created
   - Response body có category vừa tạo
   - Copy `_id` của category

### Test 5: Lấy tất cả Categories

1. **Click** vào `GET /category`
2. **Click** "Try it out"
3. **Click** "Execute"
4. **Xem** Response:
   - Status code: 200 OK
   - Array chứa categories đã tạo

### Test 6: Tạo Expense

1. **Click** vào `POST /expense`
2. **Click** "Try it out"
3. **Điền** Request body (thay userId và category bằng ID thực tế):
   ```json
   {
     "amount": 150.5,
     "description": "Ăn trưa tại nhà hàng",
     "category": "paste-category-id-ở-đây",
     "userId": "paste-user-id-ở-đây",
     "date": "2024-10-12T12:30:00Z"
   }
   ```
4. **Click** "Execute"
5. **Xem** Response

---

## ✨ Các tính năng cần test

### ✅ Checklist Test

- [ ] Swagger UI hiển thị đúng
- [ ] Tất cả 14 endpoints hiện lên
- [ ] Register user thành công
- [ ] Login thành công và nhận token
- [ ] Authorize với token thành công
- [ ] Tạo category thành công
- [ ] Lấy danh sách categories
- [ ] Tạo expense thành công
- [ ] Lấy danh sách expenses
- [ ] Update category/expense
- [ ] Delete category/expense
- [ ] Test các endpoint khác

---

## 🎯 Kiểm tra Response

### Response thành công

**Status Codes:**

- `200` - OK (GET, PUT, DELETE thành công)
- `201` - Created (POST thành công)

**Response Body:**

- JSON format
- Có đầy đủ fields theo schema
- Không có lỗi

### Response lỗi

**Status Codes:**

- `400` - Bad Request (dữ liệu không hợp lệ)
- `401` - Unauthorized (chưa đăng nhập hoặc token sai)
- `404` - Not Found (không tìm thấy resource)

---

## 📊 Xem Schema

**Để xem cấu trúc dữ liệu chi tiết:**

1. Trong mỗi endpoint, có phần "Schemas"
2. Click vào "Schema" tab (bên cạnh "Example Value")
3. Xem structure của Request/Response

---

## 🔍 Các tính năng khác

### Copy cURL Command

1. Sau khi Execute
2. Kéo xuống phần "Curl"
3. Copy command để dùng trong Terminal

### Export OpenAPI Spec

1. Truy cập: `http://localhost:4000/api-docs-json`
2. Sẽ nhận được JSON file
3. Có thể import vào Postman, Insomnia, etc.

### Dark/Light Mode

1. Click vào icon theme (góc trên)
2. Switch giữa dark và light mode

---

## ❌ Troubleshooting

### Không thấy endpoints

**Nguyên nhân:**

- JSDoc comments sai format
- File path không match với pattern trong `swagger.ts`

**Giải pháp:**

```bash
# Restart server
Ctrl + C
npm run dev
```

### Authorization không hoạt động

**Nguyên nhân:**

- Token sai hoặc hết hạn
- Thiếu "Bearer " prefix

**Giải pháp:**

1. Login lại để lấy token mới
2. Đảm bảo format: `Bearer <token>`
3. Check có khoảng trắng sau "Bearer"

### 401 Unauthorized

**Nguyên nhân:**

- Chưa authorize
- Token hết hạn
- Middleware auth chưa được implement

**Giải pháp:**

- Click "Authorize" và nhập token
- Login lại nếu token hết hạn
- Check middleware authentication trong code

---

## 📸 Screenshots để verify

### ✅ Swagger UI đúng sẽ có:

1. **Header**:

   - Title: "Daily Expense Tracker API"
   - Version: "1.0.0"
   - Servers: http://localhost:4000/api/v1

2. **Sections**:

   - Authentication (4 endpoints)
   - Category (5 endpoints)
   - Expense (5 endpoints)

3. **Components**:
   - Nút "Authorize" 🔓
   - Schemas: User, Category, Expense, Error

---

## ✅ Kết quả mong đợi

Sau khi test xong, bạn sẽ có:

✅ Swagger UI hoạt động hoàn hảo  
✅ Tất cả endpoints đều accessible  
✅ Authentication flow hoạt động  
✅ Request/Response đúng format  
✅ Schemas được validate  
✅ Error handling đúng

---

## 🎉 Hoàn tất!

Nếu tất cả test cases đều pass, chúc mừng!

**Swagger đã được cấu hình thành công! 🚀**

---

## 📝 Ghi chú

- Mỗi lần thay đổi code, server sẽ tự động restart (nhờ nodemon)
- Swagger UI sẽ reload khi có thay đổi annotations
- Token có thể expire, cần login lại nếu gặp 401

---

**Happy Testing! 🧪✨**
