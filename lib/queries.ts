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
  author->{
  name,

  "image": image.asset->url
}
}
`;

export const blogQuery = groq`
*[_type=="blog" && slug.current==$slug][0]{

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

  "productCategory": productCategory,

  author->{
  name,
  slug,
  bio,
  "image": image.asset->url
}
}
`;


export const reviewsQuery = groq`
*[_type=="review" && approved==true]{

_id,

name,
city,

productSlug,

rating,
review,

verifiedPurchase,
longevity,

"image":photo.asset->url

}
`;


export const productReviewsQuery = groq`
*[
  _type=="review" &&
  approved==true &&
  productSlug==$slug
] | order(submittedAt desc){

  _id,

  name,
  city,

  rating,
  review,

  verifiedPurchase,
  longevity,

  "image": photo.asset->url
}
`;


export const relatedBlogsQuery = groq`
*[
  _type == "blog" &&
  productCategory == $category
]
| order(publishedAt desc)[0...3]{

  _id,
  title,
  slug,
  excerpt,
  "image": mainImage.asset->url
}
`;

export const featuredBlogsQuery = groq`
*[
  _type == "blog" &&
  featured == true
]
| order(publishedAt desc)[0...3]{

  _id,

  title,

  slug,

  excerpt,

  publishedAt,

  "image": mainImage.asset->url
}
`;


export const featuredProductsQuery = `
*[_type=="blog"][0]{
  "products": *[
    _type=="product"
  ]
}
`;

export const readNextBlogsQuery = groq`
*[
  _type=="blog" &&
  productCategory == $productCategory &&
  slug.current != $slug
]
| order(publishedAt desc)[0...3]{

  _id,
  title,
  slug,
  excerpt,

  "image": mainImage.asset->url
}
`;


export const categoryBlogsQuery = groq`
*[
  _type=="blog" &&
  productCategory == $category
]
| order(publishedAt desc)[0...3]{

  _id,
  title,
  slug,
  excerpt,

  "image": mainImage.asset->url
}
`;