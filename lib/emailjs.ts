// lib/emailjs.ts
// EmailJS integration for TAYB Perfumes

import emailjs from "@emailjs/browser";

export interface OrderEmailData {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  city: string;
  paymentMethod: string;
  paymentStatus: string;
  orderItems: string;
  subtotal: string;
  shipping: string;
  totalAmount: string;
}

// Initialize EmailJS
export function initEmailJS() {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}

// ============================================================
// SEND OWNER ORDER NOTIFICATION
// ============================================================
export async function sendOwnerOrderEmail(data: OrderEmailData) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_ORDER_TEMPLATE_ID!,
    {
      store_email: process.env.NEXT_PUBLIC_STORE_EMAIL!,

      order_id: data.orderId,
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      customer_phone: data.customerPhone,
      delivery_address: data.deliveryAddress,
      city: data.city,

      payment_method: data.paymentMethod,
      payment_status: data.paymentStatus,

      order_items: data.orderItems,

      subtotal: data.subtotal,
      shipping: data.shipping,
      total_amount: data.totalAmount,

      store_whatsapp: process.env.NEXT_PUBLIC_STORE_WHATSAPP!,
    }
  );
}

// ============================================================
// SEND CUSTOMER CONFIRMATION
// ============================================================
export async function sendCustomerConfirmationEmail(
  data: OrderEmailData
) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID!,
    {
      customer_email: data.customerEmail,

      order_id: data.orderId,
      customer_name: data.customerName,
      customer_phone: data.customerPhone,
      delivery_address: data.deliveryAddress,
      city: data.city,

      payment_method: data.paymentMethod,
      payment_status: data.paymentStatus,

      order_items: data.orderItems,

      subtotal: data.subtotal,
      shipping: data.shipping,
      total_amount: data.totalAmount,

      store_whatsapp: process.env.NEXT_PUBLIC_STORE_WHATSAPP!,
    }
  );
}

// ============================================================
// GENERATE ORDER ID
// ============================================================
export function generateOrderId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random()
    .toString(36)
    .substring(2, 5)
    .toUpperCase();

  return `TAYB-${timestamp}-${random}`;
}

// ============================================================
// FORMAT ORDER ITEMS FOR EMAIL
// ============================================================
export function formatOrderItemsForEmail(
  items: Array<{
    product: {
      name: string;
      size: string;
      price: number;
    };
    quantity: number;
  }>
): string {
  return items
    .map(
      (item) =>
        `• ${item.product.name} (${item.product.size}) × ${
          item.quantity
        } → Rs.${(
          item.product.price * item.quantity
        ).toLocaleString()}`
    )
    .join("\n");
}