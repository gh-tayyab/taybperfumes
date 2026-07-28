import { groq } from "next-sanity";

export const blogsQuery = groq`
*[_type=="blog"]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  "image": mainImage.asset->url,
  "category": category->title,
  "author": author->name
}
`;

export const blogQuery = groq`
*[_type=="blog" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  metaTitle,
  metaDescription,
  "image": mainImage.asset->url,
  "category": category->title,
  "author": author->name
}
`;