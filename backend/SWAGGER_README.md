# Swagger API Documentation

## Cài đặt

Các packages Swagger đã được cài đặt:

- `swagger-jsdoc`: Tạo specification từ JSDoc comments
- `swagger-ui-express`: Hiển thị Swagger UI trong Express
- `@types/swagger-jsdoc`: TypeScript types cho swagger-jsdoc
- `@types/swagger-ui-express`: TypeScript types cho swagger-ui-express

## Cách sử dụng

### Truy cập Swagger UI

Sau khi chạy server, truy cập:

```
http://localhost:4000/api-docs
```

### Xác thực với JWT Token

1. Đăng ký/Đăng nhập để nhận JWT token
2. Click vào nút "Authorize" ở góc trên bên phải
3. Nhập token vào ô "Value" với format: `Bearer <your-token>`
4. Click "Authorize" và "Close"
5. Bây giờ bạn có thể test các API cần authentication

## Cấu trúc

### File cấu hình: `src/configs/swagger.ts`

- Định nghĩa OpenAPI specification
- Cấu hình server URLs
- Định nghĩa schemas cho User, Category, Expense
- Cấu hình JWT authentication

### Annotations trong Route files

Mỗi route có JSDoc comments với format:

```typescript
/**
 * @swagger
 * /path:
 *   method:
 *     tags:
 *       - Tag Name
 *     summary: Short description
 *     description: Detailed description
 *     parameters:
 *       - in: path/query/body
 *         name: paramName
 *         required: true/false
 *         schema:
 *           type: string/number/object
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success response
 *       400:
 *         description: Error response
 */
```

## Các endpoints được document

### Authentication (`/auth`)

- `POST /auth/register` - Đăng ký tài khoản mới
- `POST /auth/login` - Đăng nhập
- `PATCH /auth/changePassword` - Đổi mật khẩu
- `GET /auth/:id` - Lấy thông tin user

### Category (`/category`)

- `GET /category` - Lấy tất cả categories
- `GET /category/:id` - Lấy category theo ID
- `POST /category` - Tạo category mới
- `PUT /category/:id` - Cập nhật category
- `DELETE /category/:id` - Xóa category

### Expense (`/expense`)

- `GET /expense/:userId` - Lấy tất cả expenses của user
- `GET /expense/detail/:id` - Lấy expense theo ID
- `POST /expense` - Tạo expense mới
- `PUT /expense/:id` - Cập nhật expense
- `DELETE /expense/:id` - Xóa expense

## Thêm API mới

Để thêm API mới vào documentation:

1. Thêm JSDoc comment phía trên route definition
2. Sử dụng `@swagger` tag
3. Định nghĩa đầy đủ: tags, summary, parameters, requestBody, responses
4. Tham khảo các route hiện có để biết format chính xác

## Lưu ý

- Swagger UI sẽ tự động reload khi bạn thay đổi annotations
- Base URL được cấu hình là: `http://localhost:4000/api/v1`
- Tất cả các endpoints (trừ register/login) đều yêu cầu Bearer token
- Schemas được định nghĩa trong `swagger.ts` có thể được tái sử dụng với `$ref`

## Troubleshooting

### Swagger UI không hiển thị APIs

- Kiểm tra đường dẫn trong `swagger.ts` options.apis
- Đảm bảo JSDoc comments có format đúng
- Restart server sau khi thay đổi

### Authentication không hoạt động

- Đảm bảo token có prefix "Bearer "
- Kiểm tra token còn valid
- Verify middleware authentication đang hoạt động đúng
