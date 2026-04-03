import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts } from "@/content/products";
import { categories } from "@/content/categories";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductBadges } from "@/components/ui/Badge";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { SITE_URL } from "@/config/brand";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  const ogImage = product.images[0]
    ? product.images[0].startsWith("http")
      ? product.images[0]
      : `${SITE_URL}${product.images[0]}`
    : undefined;
  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const catNames = product.categoryIds
    .map((id) => categories.find((c) => c.id === id)?.name)
    .filter(Boolean)
    .join(" · ");
  const primaryCategory = categories.find((c) => product.categoryIds.includes(c.id));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    sku: product.sku,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${SITE_URL}/shop/${product.slug}`,
    },
    image: product.images.map((img) => (img.startsWith("http") ? img : `${SITE_URL}${img}`)),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="border-b border-white/10 bg-surface-950 pb-24 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              ...(primaryCategory
                ? [{ label: primaryCategory.name, href: `/shop/category/${primaryCategory.slug}` }]
                : []),
              { label: product.title },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <ProductGallery images={product.images} title={product.title} />
            </Reveal>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <ProductBadges badges={product.badges} />
                {!product.inStock ? (
                  <span className="rounded-md bg-red-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-200 ring-1 ring-red-400/30">
                    Out of stock
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-zinc-500">{product.brand}</p>
              <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {product.title}
              </h1>
              <p className="mt-2 text-sm text-zinc-400">
                SKU {product.sku}
                {product.distributorSku ? (
                  <span className="text-zinc-600"> · Distributor {product.distributorSku}</span>
                ) : null}
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-semibold text-white">${product.price.toFixed(2)}</span>
                {product.compareAtPrice ? (
                  <span className="text-lg text-zinc-500 line-through">${product.compareAtPrice.toFixed(2)}</span>
                ) : null}
              </div>

              <p className="mt-6 text-zinc-300">{product.shortDescription}</p>

              {product.highlights?.length ? (
                <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/90" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Request info</Button>
                <Button variant="secondary" href="/request-product">
                  Request similar item
                </Button>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-surface-850/40 p-5 text-sm text-zinc-400">
                <p className="font-semibold text-zinc-200">Shipping & transfers</p>
                <p className="mt-2">
                  Fulfillment messaging is jurisdiction-specific. Replace this block with your policies and FFL workflow
                  copy. Distributor drop-ship orders may ship direct per partner rules.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">Description</h2>
              <p className="mt-4 whitespace-pre-line text-zinc-300">{product.description}</p>

              {product.videoUrl ? (
                <div className="mt-10">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">Product video</h3>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <div className="aspect-video w-full">
                      <iframe
                        title={`${product.title} video`}
                        src={product.videoUrl}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="mt-10">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">Specifications</h3>
                <dl className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
                      <dt className="text-zinc-500">{k}</dt>
                      <dd className="text-zinc-200">{v}</dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
                    <dt className="text-zinc-500">Categories</dt>
                    <dd className="text-zinc-200">{catNames || "—"}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-surface-900/50 p-5">
                <h3 className="text-sm font-semibold text-white">Trust & support</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Questions? Our team can confirm availability, transfer options, and compliance requirements before you
                  checkout.
                </p>
                <Link href="/faq" className="mt-3 inline-block text-sm font-semibold text-brand-200 hover:text-brand-100">
                  Read FAQ →
                </Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-950/40 p-5">
                <h3 className="text-sm font-semibold text-white">Frequently bought together</h3>
                <p className="mt-1 text-xs text-zinc-500">Bundle / upsell layer — manual now, rule-based later.</p>
                {product.bundleSuggestions?.length ? (
                  <ul className="mt-4 space-y-3">
                    {product.bundleSuggestions.map((b) => (
                      <li key={b.slug}>
                        <Link
                          href={`/shop/${b.slug}`}
                          className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm transition hover:border-brand-600/30 hover:bg-white/10"
                        >
                          <span className="font-medium text-zinc-200">{b.title}</span>
                          <span className="shrink-0 font-semibold text-white">${b.price.toFixed(2)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-zinc-400">
                    Add complementary SKUs in product data — ideal for lights, slings, and mounts.
                  </p>
                )}
              </div>
            </aside>
          </div>

          {related.length ? (
            <div className="mt-16">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Popular add-ons</h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-500">
                Related items from the same category — swap for algorithmic recommendations when analytics are connected.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-surface-950/95 p-4 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div>
            <p className="text-xs text-zinc-500">Price</p>
            <p className="text-lg font-semibold text-white">${product.price.toFixed(2)}</p>
          </div>
          <Button href="/contact" className="min-h-[48px] px-5">
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}
