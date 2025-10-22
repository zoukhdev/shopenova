# 🚀 E-commerce Platform Deployment Guide

This guide will help you deploy your e-commerce website and admin dashboard to Vercel with Supabase as the database.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com) (free tier available)
- [Supabase Account](https://supabase.com) (free tier available)
- [GitHub Account](https://github.com) (for code hosting)

## 🗄️ Step 1: Set Up Supabase Database

### 1.1 Create Supabase Project
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `ecommerce-platform`
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"

### 1.2 Set Up Database Schema
1. In your Supabase project, go to **SQL Editor**
2. Copy the contents of `supabase/schema.sql` from this project
3. Paste and run the SQL script to create all tables and sample data

### 1.3 Get Supabase Credentials
1. Go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **anon public** key
   - **service_role** key (keep this secret!)

## 🌐 Step 2: Deploy to Vercel

### 2.1 Prepare Your Code
1. Make sure all your code is committed to a Git repository
2. Push your code to GitHub

### 2.2 Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or your project root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)

### 2.3 Set Environment Variables
In Vercel project settings, add these environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 2.4 Deploy
1. Click "Deploy"
2. Wait for the deployment to complete
3. Your site will be available at `https://your-project.vercel.app`

## 🔧 Step 3: Configure Domain (Optional)

### 3.1 Custom Domain
1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Configure DNS settings as instructed
4. Enable SSL certificate

## 🧪 Step 4: Test Your Deployment

### 4.1 Test E-commerce Website
1. Visit your deployed URL
2. Browse products
3. Add items to cart
4. Test checkout process

### 4.2 Test Admin Dashboard
1. Go to `/admin/login`
2. Login with default credentials:
   - **Email**: `admin@example.com`
   - **Password**: `admin123`
3. Test all admin features:
   - Product management
   - Order management
   - Analytics dashboard
   - User management

## 🔐 Step 5: Security Configuration

### 5.1 Update Default Admin Password
1. Go to your Supabase dashboard
2. Navigate to **Authentication** → **Users**
3. Find the admin user and update the password
4. Or create a new admin user through the admin panel

### 5.2 Configure Row Level Security (RLS)
The database schema includes RLS policies, but you may want to review them:
1. Go to **Authentication** → **Policies**
2. Review and adjust policies as needed
3. Test that public access works for products
4. Ensure admin access is properly restricted

## 📊 Step 6: Monitor and Maintain

### 6.1 Set Up Monitoring
1. **Vercel Analytics**: Enable in project settings
2. **Supabase Monitoring**: Check the dashboard regularly
3. **Error Tracking**: Consider adding Sentry or similar

### 6.2 Regular Maintenance
1. **Database Backups**: Supabase handles this automatically
2. **Security Updates**: Keep dependencies updated
3. **Performance Monitoring**: Monitor API response times

## 🚨 Troubleshooting

### Common Issues

#### Database Connection Errors
- Verify environment variables are set correctly
- Check Supabase project is active
- Ensure RLS policies allow necessary access

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review build logs in Vercel dashboard

#### Authentication Issues
- Verify Supabase auth configuration
- Check JWT token expiration settings
- Ensure proper CORS configuration

### Getting Help
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## 🎉 Success!

Your e-commerce platform is now live with:
- ✅ **E-commerce Website** - Full shopping experience
- ✅ **Admin Dashboard** - Complete management system
- ✅ **Real-time Database** - Supabase PostgreSQL
- ✅ **Global CDN** - Vercel edge network
- ✅ **Automatic Scaling** - Handles traffic spikes
- ✅ **SSL Security** - HTTPS enabled
- ✅ **Analytics** - Built-in performance monitoring

## 🔄 Future Enhancements

Consider adding:
- **Payment Integration** (Stripe, PayPal)
- **Email Notifications** (SendGrid, Resend)
- **File Storage** (Supabase Storage)
- **Search** (Algolia, Elasticsearch)
- **Caching** (Redis, Vercel KV)
- **Monitoring** (Sentry, LogRocket)

---

**Need help?** Check the documentation or reach out to the community!
