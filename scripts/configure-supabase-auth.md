# Supabase Auth Configuration for Development

To fix the login issues, you need to configure Supabase Auth settings in your Supabase dashboard:

## Steps to Configure:

1. **Go to your Supabase Dashboard**
   - Navigate to: https://supabase.com/dashboard
   - Select your project: `bbtypnulrkkdvvfupxws`

2. **Configure Authentication Settings**
   - Go to **Authentication** → **Settings**
   - Under **User Signups**, set:
     - **Enable email confirmations**: `OFF` (for development)
     - **Enable email change confirmations**: `OFF` (for development)

3. **Alternative: Configure via SQL**
   Run this SQL in your Supabase SQL Editor:

```sql
-- Update auth configuration to disable email confirmation
UPDATE auth.config 
SET raw_app_meta_data = raw_app_meta_data || '{"email_confirm": false}'::jsonb
WHERE id = 1;

-- Or update the auth settings directly
UPDATE auth.config 
SET raw_app_meta_data = '{"email_confirm": false, "email_change_confirm": false}'::jsonb;
```

4. **Test the Configuration**
   - Try creating a new account
   - Try logging in with the created account
   - The login should work without email verification

## Demo Credentials

For testing purposes, you can also use these demo credentials:
- **Admin**: `admin@eshop.com` / `admin123`
- **Manager**: `manager@eshop.com` / `manager123`

These are hardcoded in the login API and don't require Supabase Auth.

## Troubleshooting

If login still fails:

1. Check the browser console for detailed error messages
2. Verify the Supabase URL and key are correct in `.env.local`
3. Ensure the user was created successfully in Supabase Auth
4. Check if email confirmation is still enabled in Supabase settings

## Production Considerations

For production deployment:
- Enable email confirmations
- Set up proper email templates
- Configure secure redirect URLs
- Implement proper password policies
