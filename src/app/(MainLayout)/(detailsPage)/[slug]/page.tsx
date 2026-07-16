// app/(MainLayout)/(detailsPage)/[slug]/page.tsx
// No "use client" — server component

import { notFound } from "next/navigation";
import { shortProductDetailsList } from "@/database/data/product.constants";
import ProductDetailClient from "@/components/pages/productDetails/ProductDetailClient";
// import ProductDetailClient from "@/components/ProductDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params; // ✅ Next.js 15: params is a Promise

  const product = shortProductDetailsList.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ProductDetailClient product={product} />;
}