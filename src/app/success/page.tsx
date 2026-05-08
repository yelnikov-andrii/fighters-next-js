"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="py-20">
      <div className="container max-w-[600px] mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Order successful 🎉</h1>

        <p className="text-lg mb-8">
          Thank you for your purchase. We will contact you soon.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/" className="button">
            Home
          </Link>

          <Link href="/products" className="button button-dark">
            Continue shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
