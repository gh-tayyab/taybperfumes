import { NextResponse } from "next/server";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const record = await base(
      process.env.AIRTABLE_CONTACT_TABLE!
    ).create([
      {
        fields: {
          Name: body.name,
          Email: body.email,
          Message: body.message,
          Status: "New",
        },
      },
    ]);

    return NextResponse.json({
      success: true,
      contactId: record[0].fields.ContactId,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}