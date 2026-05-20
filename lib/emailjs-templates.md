# EmailJS Template Setup Guide

## Step 1 — Create Account
Go to [emailjs.com](https://emailjs.com) → Sign Up (free, 200 emails/month)

## Step 2 — Add Email Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** → Connect your Gmail account (e.g. `tayb.orders@gmail.com`)
3. Copy the **Service ID** → paste into `.env.local` as `NEXT_PUBLIC_EMAILJS_SERVICE_ID`

## Step 3 — Get Public Key
Dashboard → **Account** → **General** → Copy **Public Key**
→ paste into `.env.local` as `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

---

## Template 1 — Owner Order Notification
*(You receive this every time someone places an order)*

**Template Name:** `TAYB - New Order Alert`

**Subject:**
```
🛍️ New Order #{{order_id}} — {{customer_name}} — {{total_amount}}
```

**Body (HTML):**
```html
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #f5f0e8; padding: 40px; border: 1px solid #C9A96E;">

  <h1 style="font-size: 28px; color: #C9A96E; margin-bottom: 4px;">✦ New Order Received</h1>
  <p style="color: #999; font-size: 13px; margin-bottom: 30px;">Order ID: <strong style="color: #C9A96E;">#{{order_id}}</strong></p>

  <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 10px 0; color: #999; font-size: 13px;">Customer</td>
      <td style="padding: 10px 0; font-size: 14px;">{{customer_name}}</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 10px 0; color: #999; font-size: 13px;">Email</td>
      <td style="padding: 10px 0; font-size: 14px;">{{customer_email}}</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 10px 0; color: #999; font-size: 13px;">Phone / WhatsApp</td>
      <td style="padding: 10px 0; font-size: 14px;">{{customer_phone}}</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 10px 0; color: #999; font-size: 13px;">Address</td>
      <td style="padding: 10px 0; font-size: 14px;">{{delivery_address}}</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 10px 0; color: #999; font-size: 13px;">City</td>
      <td style="padding: 10px 0; font-size: 14px;">{{city}}</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 10px 0; color: #999; font-size: 13px;">Payment Method</td>
      <td style="padding: 10px 0; font-size: 14px; color: #C9A96E;"><strong>{{payment_method}}</strong></td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 10px 0; color: #999; font-size: 13px;">Payment Status</td>
      <td style="padding: 10px 0; font-size: 14px; color: #4ade80;"><strong>{{payment_status}}</strong></td>
    </tr>
  </table>

  <h3 style="color: #C9A96E; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">Order Items</h3>
  <div style="background: #111; padding: 16px; margin-bottom: 24px; white-space: pre-line; font-size: 14px; line-height: 1.8;">{{order_items}}</div>

  <table style="width:100%;">
    <tr>
      <td style="color: #999; font-size: 13px;">Subtotal</td>
      <td style="text-align:right; font-size: 13px;">{{subtotal}}</td>
    </tr>
    <tr>
      <td style="color: #999; font-size: 13px;">Shipping</td>
      <td style="text-align:right; font-size: 13px;">{{shipping}}</td>
    </tr>
    <tr style="border-top: 1px solid #C9A96E; margin-top: 8px;">
      <td style="padding-top: 10px; color: #C9A96E; font-size: 18px; font-weight: bold;">Total</td>
      <td style="padding-top: 10px; text-align:right; color: #C9A96E; font-size: 18px; font-weight: bold;">{{total_amount}}</td>
    </tr>
  </table>

  <p style="margin-top: 30px; color: #666; font-size: 12px; text-align: center;">TAYB Perfumes · Pakistan</p>
</div>
```

**To:** `{{store_email}}` ← This sends to YOUR email

---

## Template 2 — Customer Confirmation
*(Customer receives this after placing order)*

**Template Name:** `TAYB - Order Confirmation`

**Subject:**
```
✦ Your TAYB Order is Confirmed — #{{order_id}}
```

**Body (HTML):**
```html
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #f5f0e8; padding: 40px; border: 1px solid #C9A96E;">

  <h1 style="font-size: 28px; color: #C9A96E; text-align: center;">✦ TAYB</h1>
  <h2 style="text-align: center; font-size: 22px; margin-bottom: 8px;">Order Confirmed!</h2>
  <p style="text-align: center; color: #999; font-size: 14px; margin-bottom: 30px;">Thank you, {{customer_name}}. Order <strong style="color: #C9A96E;">#{{order_id}}</strong></p>

  <div style="background: #111; padding: 20px; margin-bottom: 24px;">
    <p style="margin: 0; font-size: 14px; line-height: 1.9; white-space: pre-line;">{{order_items}}</p>
  </div>

  <table style="width:100%; margin-bottom: 24px;">
    <tr>
      <td style="color: #999; font-size: 13px; padding: 6px 0;">Payment Method</td>
      <td style="text-align:right; font-size: 13px; color: #C9A96E;">{{payment_method}}</td>
    </tr>
    <tr>
      <td style="color: #999; font-size: 13px; padding: 6px 0;">Shipping To</td>
      <td style="text-align:right; font-size: 13px;">{{delivery_address}}, {{city}}</td>
    </tr>
    <tr style="border-top: 1px solid #333;">
      <td style="padding-top: 12px; color: #C9A96E; font-size: 17px; font-weight: bold;">Total</td>
      <td style="padding-top: 12px; text-align:right; color: #C9A96E; font-size: 17px; font-weight: bold;">{{total_amount}}</td>
    </tr>
  </table>

  <div style="border: 1px solid #C9A96E33; padding: 16px; text-align: center; margin-bottom: 24px;">
    <p style="font-size: 13px; color: #999; margin: 0;">📦 We'll dispatch your order within <strong style="color: #f5f0e8;">1–2 business days</strong>.<br>
    You'll receive a WhatsApp confirmation shortly at <strong style="color: #C9A96E;">{{customer_phone}}</strong>.</p>
  </div>

  <p style="text-align: center; color: #666; font-size: 12px;">Questions? WhatsApp us: {{store_whatsapp}}<br>TAYB Perfumes · Pakistan</p>
</div>
```

**To:** `{{customer_email}}` ← This sends to CUSTOMER's email

---

## Step 4 — Copy Template IDs
After saving each template, copy its **Template ID**:
- Template 1 ID → `NEXT_PUBLIC_EMAILJS_ORDER_TEMPLATE_ID`  
- Template 2 ID → `NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID`
