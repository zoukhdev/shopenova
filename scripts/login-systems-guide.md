# E-commerce Login Systems Guide

This e-commerce application has **TWO separate login systems**:

## 1. 🛒 **Customer Login** (`/login`)
**For regular customers to shop and manage their accounts**

### Demo Customer Credentials:
- **Demo Customer**: `customer@eshop.com` / `customer123`
- **John Doe**: `john@example.com` / `john123`  
- **Jane Smith**: `jane@example.com` / `jane123`

### Features:
- Browse products
- Add to cart
- Place orders
- Manage account
- View order history

### How to Use:
1. Go to `/login` (or click "Login" in the header)
2. Use any of the demo customer credentials above
3. You'll be redirected to `/account` after login

## 2. 🔧 **Admin Login** (`/admin/login`)
**For store administrators to manage the e-commerce platform**

### Demo Admin Credentials:
- **Admin**: `admin@eshop.com` / `admin123`
- **Manager**: `manager@eshop.com` / `manager123`

### Features:
- Manage products
- View orders
- Manage customers
- Analytics dashboard
- Inventory management
- Marketing tools

### How to Use:
1. Go to `/admin/login`
2. Use any of the demo admin credentials above
3. You'll be redirected to `/admin` dashboard

## 🔍 **Troubleshooting**

### "Invalid email or password" Error:
1. **Make sure you're using the right login page**:
   - Customer login: `/login`
   - Admin login: `/admin/login`

2. **Use the correct credentials**:
   - Customer credentials for customer login
   - Admin credentials for admin login

3. **Check the role**:
   - Customer accounts have role: `customer`
   - Admin accounts have roles: `owner`, `developer`, etc.

### Testing Credentials:
Run this script to test all credentials:
```bash
node scripts/test-your-login.js
```

## 📝 **Creating Real Accounts**

### For Customers:
1. Go to `/signup`
2. Fill out the registration form
3. Check your email for confirmation
4. Login at `/login`

### For Admins:
1. Contact the system administrator
2. Admin accounts must be created manually
3. Use `/admin/login` to access

## 🎯 **Quick Start**

**Want to shop as a customer?**
- Go to `/login`
- Use: `customer@eshop.com` / `customer123`

**Want to manage the store as admin?**
- Go to `/admin/login`  
- Use: `admin@eshop.com` / `admin123`
