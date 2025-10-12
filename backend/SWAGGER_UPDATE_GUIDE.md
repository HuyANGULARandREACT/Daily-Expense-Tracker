# 🔄 Cách Cập Nhật Swagger Khi Thay Đổi Code

## ❓ Vấn đề: "Tôi đã cập nhật code, push lên GitHub nhưng Swagger không cập nhật?"

### 💡 **Giải thích:**

**Swagger UI chạy trên LOCAL SERVER của bạn, KHÔNG phải trên GitHub!**

```
Code trên GitHub ─────────────────────X──────> Swagger UI (KHÔNG liên kết trực tiếp)
                                                      ↑
Code trên máy bạn → Server Local (port 4000) ────────┘
```

Khi bạn:

1. ✅ Thay đổi code
2. ✅ Push lên GitHub
3. ❌ Swagger KHÔNG tự động cập nhật

**Lý do:** Swagger đọc code từ **server đang chạy trên máy bạn**, không phải từ GitHub.

---

## ✅ Giải pháp: Quy trình cập nhật đúng

### **Cách 1: Với Nodemon (Tự động - KHUYÊN DÙNG)**

Nodemon đã được cấu hình trong `package.json`:

```json
"scripts": {
  "dev": "nodemon src/server.ts"
}
```

**Nodemon sẽ TỰ ĐỘNG restart server khi bạn save file!**

#### Quy trình:

1. **Thay đổi code** (ví dụ: thêm endpoint mới với @swagger annotation)
2. **Save file** (Ctrl + S)
3. **Nodemon tự động restart** - check terminal sẽ thấy:
   ```
   [nodemon] restarting due to changes...
   [nodemon] starting `ts-node src/server.ts`
   🚀 Server running on port 4000
   📚 Swagger documentation available at http://localhost:4000/api-docs
   ```
4. **Refresh browser** tại `http://localhost:4000/api-docs`
   - Thông thường: **F5**
   - Hard refresh: **Ctrl + Shift + R** (xóa cache)

✅ **Done!** Swagger đã cập nhật!

---

### **Cách 2: Restart Thủ Công**

Nếu nodemon không tự động restart:

```bash
# 1. Stop server
Ctrl + C

# 2. Start lại
npm run dev

# 3. Refresh browser
# Mở http://localhost:4000/api-docs và nhấn Ctrl + Shift + R
```

---

## 🎯 Checklist Khi Thêm/Sửa API

### ✅ Bước 1: Thêm/Sửa Code

Ví dụ: Thêm endpoint mới trong `user.route.ts`:

```typescript
/**
 * @swagger
 * /auth/profile:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: Get user profile
 *     responses:
 *       200:
 *         description: User profile
 */
router.get("/profile", getUserProfile);
```

### ✅ Bước 2: Save File

- **Ctrl + S** hoặc **File > Save**
- Check terminal: Nodemon sẽ restart

### ✅ Bước 3: Verify Terminal

Đảm bảo thấy message:

```
🚀 Server running on port 4000
📚 Swagger documentation available at http://localhost:4000/api-docs
```

### ✅ Bước 4: Refresh Browser

- Mở: `http://localhost:4000/api-docs`
- Hard refresh: **Ctrl + Shift + R**
- Kiểm tra endpoint mới đã xuất hiện

---

## 🚫 Các lỗi thường gặp

### Lỗi 1: Swagger không hiển thị endpoint mới

**Nguyên nhân:**

- JSDoc comment sai format
- Thiếu `@swagger` tag
- File không match với pattern trong `swagger.ts`

**Giải pháp:**

```typescript
// ❌ SAI
/*
 * @swagger  // Thiếu dấu * ở mỗi dòng
 * /auth/test:
 */

// ✅ ĐÚNG
/**
 * @swagger
 * /auth/test:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: Test endpoint
 */
```

### Lỗi 2: Server không restart

**Nguyên nhân:**

- Nodemon không theo dõi file type
- Server bị crash

**Giải pháp:**

```bash
# Check terminal có error không
# Nếu có lỗi, fix lỗi rồi restart:
npm run dev
```

### Lỗi 3: Browser cache cũ

**Nguyên nhân:**

- Browser cache Swagger UI cũ

**Giải pháp:**

```
1. Ctrl + Shift + R (Hard refresh)
2. Hoặc: Ctrl + Shift + Delete (Clear cache)
3. Hoặc: Mở Incognito/Private mode
```

### Lỗi 4: Port bị chiếm

**Nguyên nhân:**

- Port 4000 đang được dùng bởi process khác

**Giải pháp:**

```bash
# Windows - Kill process trên port 4000
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:4000 | xargs kill -9

# Hoặc đổi port trong .env
PORT=4001
```

---

## 📋 Quy trình làm việc chuẩn

### **Workflow thêm API mới:**

```
1. Viết code backend
   ├── Controller
   ├── Service
   ├── Route
   └── Swagger annotation (@swagger)

2. Save file (Ctrl + S)
   └── Nodemon tự động restart

3. Check terminal
   └── Thấy "Server running" message

4. Refresh Swagger UI (Ctrl + Shift + R)
   └── Kiểm tra endpoint mới

5. Test endpoint trong Swagger UI
   └── Try it out → Execute

6. Nếu OK → Commit & Push lên GitHub
   ├── git add .
   ├── git commit -m "Add new endpoint"
   └── git push
```

---

## 💡 Tips

### Tip 1: Mở 2 cửa sổ

- **Cửa sổ 1:** VS Code để code
- **Cửa sổ 2:** Browser với Swagger UI
- Mỗi khi save → F5 trong browser

### Tip 2: Sử dụng nodemon `rs` command

```bash
# Trong terminal đang chạy nodemon, gõ:
rs
# Sẽ restart server ngay lập tức
```

### Tip 3: Watch terminal logs

```bash
# Terminal sẽ show:
[nodemon] restarting due to changes...
[nodemon] starting `ts-node src/server.ts`

# Nếu thấy error → Fix ngay
# Nếu thấy success → Refresh browser
```

### Tip 4: Disable browser cache (Dev mode)

1. Mở DevTools (F12)
2. Network tab
3. Check "Disable cache"
4. Giữ DevTools mở khi develop

---

## 🎯 Tóm tắt

| Hành động            | Kết quả                                           |
| -------------------- | ------------------------------------------------- |
| Thay đổi code + Save | Nodemon restart server                            |
| Server restart       | Swagger re-generate documentation                 |
| Refresh browser      | Swagger UI hiển thị thay đổi                      |
| Push lên GitHub      | Code được lưu trữ (KHÔNG ảnh hưởng local Swagger) |

### ⚠️ **Ghi nhớ:**

- **GitHub** = Nơi lưu trữ code
- **Local Server** = Nơi chạy Swagger
- **Swagger cập nhật khi** = Server restart + Browser refresh

---

## ✅ Checklist nhanh

Khi thêm/sửa API, đảm bảo:

- [ ] Thêm JSDoc comment với `@swagger` tag
- [ ] Save file (Ctrl + S)
- [ ] Check terminal: Server restart thành công
- [ ] Refresh Swagger UI (Ctrl + Shift + R)
- [ ] Test endpoint mới
- [ ] Commit & push lên GitHub

---

**🎉 Giờ bạn đã hiểu cách Swagger hoạt động và cách cập nhật nó!**

_Nếu vẫn gặp vấn đề, check terminal logs và browser console để debug._
