# Contact Form Email Setup Instructions

## Overview
Your contact form is now fully functional and will send emails to `ziaulhasanf@gmail.com` when someone submits the form. The email field is **optional** - visitors can contact you without providing their email.

## Quick Setup Steps

### 1. Generate Gmail App Password

Since you're using Gmail, you need to create an **App Password** (not your regular Gmail password):

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification** (you must enable this first if not already enabled)
4. Scroll down and click **App passwords**
5. Select app: **Mail**
6. Select device: **Other (Custom name)** - type "Portfolio Website"
7. Click **Generate**
8. Google will show you a 16-character password - **copy this**

### 2. Configure Your Environment Variables

1. Open the `.env` file in your project root
2. Replace `your-gmail-app-password-here` with the app password you just copied:

```env
EMAIL_USER=ziaulhasanf@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

**Note:** Remove any spaces from the app password.

### 3. Add .env to .gitignore

Create or update your `.gitignore` file to protect your credentials:

```
.env
node_modules/
.nuxt/
.output/
dist/
```

### 4. Test Your Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out the form (email is optional!)
4. Click "Send Message"
5. Check your inbox at `ziaulhasanf@gmail.com`

## Features Implemented

✅ **Email is Optional** - Users can submit the form without providing their email
✅ **Form Validation** - Validates required fields (name, subject, message)
✅ **Email Format Validation** - If email is provided, it checks if it's valid
✅ **Beautiful Email Template** - Emails arrive in a professionally formatted HTML template
✅ **Loading States** - Shows spinner while sending
✅ **Success/Error Messages** - Clear feedback to users
✅ **Reply-To Support** - If user provides email, you can reply directly from your inbox
✅ **Security** - Credentials stored in environment variables

## Email Template

When someone submits the form, you'll receive a beautifully formatted email with:
- Sender's Name
- Sender's Email (or "Not provided" if optional)
- Subject
- Message content
- Professional gradient header design

## Troubleshooting

### Email not sending?
1. Make sure you generated an **App Password** (not your regular Gmail password)
2. Verify the `.env` file has the correct credentials
3. Check the browser console for errors
4. Make sure 2-Step Verification is enabled on your Google Account

### "Less secure app access" message?
- Use **App Passwords** instead - it's the recommended secure method

### Want to use a different email service?
Edit `/server/api/contact.post.ts` and change the transporter configuration:

**For Outlook/Hotmail:**
```javascript
service: 'hotmail'
```

**For Yahoo:**
```javascript
service: 'yahoo'
```

**For custom SMTP:**
```javascript
host: 'smtp.yourdomain.com',
port: 587,
secure: false,
auth: {
  user: 'your-email@domain.com',
  pass: 'your-password'
}
```

## File Structure

```
MySite/
├── .env                          # Email credentials (DO NOT COMMIT!)
├── server/
│   └── api/
│       └── contact.post.ts       # Email sending API endpoint
└── components/
    └── Contact.vue               # Contact form component
```

## Support

If you have any issues, check:
1. Node.js console for server errors
2. Browser console for client errors
3. Gmail's sent folder to see if emails were sent
4. Spam folder in your inbox

---

**Important:** Never commit your `.env` file to Git! Keep your credentials secure.

