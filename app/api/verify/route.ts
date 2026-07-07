import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Safepay Webhook:", body);

    /*
      Yahan baad me:
      ✅ Airtable Save
      ✅ EmailJS
      ✅ Update Payment Status
      ✅ Owner Notification
      sab hoga.
    */

    return NextResponse.json({
      success: true,
    });
  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}