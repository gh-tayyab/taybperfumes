import { NextResponse } from "next/server";
import { writeClient } from "@/lib/sanity-write";
import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = data.get("name") as string;
    const city = data.get("city") as string;

    const productSlug = data.get("productSlug") as string;

    const rating = Number(data.get("rating"));
    const longevity = data.get("longevity") as string;
    const review = data.get("review") as string;

    const photo = data.get("photo") as File | null;

    let photoAsset;

    if (photo && photo.size > 0) {
      const buffer = Buffer.from(await photo.arrayBuffer());

      photoAsset = await writeClient.assets.upload("image", buffer, {
        filename: photo.name,
      });
    }

    await writeClient.create({
      _type: "review",

      name,
      city,

      productSlug,

      rating,
      longevity,
      review,

      photo: photoAsset
        ? {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: photoAsset._id,
            },
          }
        : undefined,

      approved: false,
      verifiedPurchase: false,

      submittedAt: new Date().toISOString(),
    });
    revalidateTag("reviews");
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit review.",
      },
      {
        status: 500,
      }
    );
  }
}