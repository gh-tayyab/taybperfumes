import { createClient } from "@sanity/client";
import { unstable_cache } from "next/cache";

console.log("PROJECT:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("API:", process.env.NEXT_PUBLIC_SANITY_API_VERSION);

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false,
  // perspective: "published",
});

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});