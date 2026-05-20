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
            OrderId: body.orderId,
            CustomerName: body.name,
            Email: body.email,
            Phone: body.phone,
            Address: body.address,
            City: body.city,
            PostalCode: body.postalCode,
            Notes: body.notes,
            Products: body.items
            .map((item: any) => `${item.product.name} x${item.quantity}`)
            .join(", "),
            Total: body.total,
            Status: "New Order",
            PaymentStatus: "Pending",
          }
      },
    ]);

    return NextResponse.json({
      success: true,
      record,
    });
  } catch (error: any) {
    console.error("AIRTABLE FULL ERROR:", error);
  
    return NextResponse.json(
      {
        error: error.message,
        details: error,
      },
      { status: 500 }
    );
  }
}