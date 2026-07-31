"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/lib/data";

export default function ReviewForm() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    city: "",
    productSlug: "",
    rating: 5,
    longevity: "",
    review: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;

    setPhoto(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("city", form.city);
      formData.append("productSlug", form.productSlug);
      formData.append("rating", String(form.rating));
      formData.append("longevity", form.longevity);
      formData.append("review", form.review);

      if (photo) {
        formData.append("photo", photo);
      }

      const res = await fetch("/api/reviews", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      alert("Thank you! Your review has been submitted for approval.");

      setForm({
        name: "",
        city: "",
        productSlug: "",
        rating: 5,
        longevity: "",
        review: "",
      });

      setPhoto(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6">
      <h1 className="mb-2 text-4xl font-display text-cream">Leave a Review</h1>

      <p className="mb-10 text-white/60">
        We'd love to hear about your experience with TAYB Perfumes.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Photo */}

        <div className="space-y-3">
          <label className="text-sm text-white/70">
            Upload Product Photo (Optional)
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full rounded-lg border border-gold/20 bg-transparent p-3 text-white file:mr-4 file:rounded-md file:border-0 file:bg-gold file:px-4 file:py-2 file:text-black"
          />

          {preview && (
            <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-gold/20">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Name */}

        <input
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gold/20 bg-transparent p-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
        />

        {/* City */}

        <input
          name="city"
          required
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full rounded-lg border border-gold/20 bg-transparent p-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
        />

        {/* Product */}

        <select
          required
          name="productSlug"
          value={form.productSlug}
          onChange={handleChange}
          className="w-full rounded-lg border border-gold/20 bg-charcoal p-3 text-white focus:border-gold focus:outline-none"
        >
          <option value="">Select Purchased Product</option>

          {products.map((product) => (
            <option key={product.id} value={product.slug}>
              {product.name}
            </option>
          ))}
        </select>

        {/* Rating */}

        <select
          name="rating"
          required
          value={form.rating}
          onChange={handleChange}
          className="w-full rounded-lg border border-gold/20 bg-charcoal p-3 text-white focus:border-gold focus:outline-none"
        >
          <option value={5}>★★★★★ Excellent</option>
          <option value={4}>★★★★☆ Very Good</option>
          <option value={3}>★★★☆☆ Good</option>
          <option value={2}>★★☆☆☆ Fair</option>
          <option value={1}>★☆☆☆☆ Poor</option>
        </select>

        {/* Longevity */}

        <select
          required
          name="longevity"
          value={form.longevity}
          onChange={handleChange}
          className="w-full rounded-lg border border-gold/20 bg-charcoal p-3 text-white focus:border-gold focus:outline-none"
        >
          <option value="">Select Longevity</option>

          <option value="2-4 Hours">2–4 Hours</option>

          <option value="4-6 Hours">4–6 Hours</option>

          <option value="6-8 Hours">6–8 Hours</option>

          <option value="8+ Hours">8+ Hours</option>
        </select>

        {/* Review */}

        <textarea
          required
          rows={6}
          name="review"
          value={form.review}
          onChange={handleChange}
          placeholder="Share your experience..."
          className="w-full rounded-lg border border-gold/20 bg-transparent p-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
        />

        {/* Submit */}

        <button
          disabled={loading}
          type="submit"
          className="w-full rounded-lg bg-gold py-3 font-semibold text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </section>
  );
}
