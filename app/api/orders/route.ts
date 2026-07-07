import { NextResponse } from "next/server";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const record = await base(
      process.env.AIRTABLE_TABLE_NAME!
    ).create([
      {
        fields: {
          CustomerName: body.name,
          Email: body.email,
          Phone: body.phone,
          Address: body.address,
          City: body.city,
          PostalCode: body.postalCode,
          Notes: body.notes,

          Products: body.items
            .map(
              (item: any) =>
                `${item.product.name} (${item.product.size}) x${item.quantity}`
            )
            .join(", "),

          Total: body.total,

          Status: "New Order",

          PaymentMethod: body.paymentMethod || "Cash on Delivery",

          PaymentStatus: body.paymentStatus || "Pending",

          TransactionId: body.transactionId || "",
        },
      },
    ]);

    return NextResponse.json({
      success: true,
      orderId: record[0].fields.OrderId,
      recordId: record[0].id,
    });
  } catch (error: any) {
    console.error("AIRTABLE FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: error,
      },
      {
        status: 500,
      }
    );
  }
}