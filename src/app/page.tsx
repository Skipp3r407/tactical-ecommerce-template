import { Hero } from "@/components/sections/Hero";
import { WeeklySpecials } from "@/components/sections/WeeklySpecials";
import { HomeFeaturedProducts } from "@/components/sections/HomeFeaturedProducts";
import { PromoStrip } from "@/components/sections/PromoStrip";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { ProductRow } from "@/components/sections/ProductRow";
import { GiveawayCallout } from "@/components/sections/GiveawayCallout";
import { VideoSection } from "@/components/sections/VideoSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TrustSection } from "@/components/trust/TrustSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { RequestProductTeaser } from "@/components/sections/RequestProductTeaser";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { CtaBand } from "@/components/sections/CtaBand";
import { Newsletter } from "@/components/sections/Newsletter";
import { products } from "@/content/products";

function savingsAmount(p: (typeof products)[0]) {
  return p.compareAtPrice != null ? Math.max(0, p.compareAtPrice - p.price) : 0;
}

export default function HomePage() {
  const featured = products.filter((p) => p.badges.includes("featured") || p.spotlight);
  const newArrivals = products.filter((p) => p.badges.includes("new"));
  const hotDeals = [...products]
    .filter((p) => p.compareAtPrice != null && p.compareAtPrice > p.price)
    .sort((a, b) => savingsAmount(b) - savingsAmount(a))
    .slice(0, 4);
  const bestSellers = products.filter((p) => p.inStock && p.badges.includes("hot")).length
    ? products.filter((p) => p.inStock && p.badges.includes("hot"))
    : products.filter((p) => p.inStock).slice(0, 3);
  const clearance = products.filter((p) => p.badges.includes("clearance"));

  return (
    <>
      <Hero />
      <WeeklySpecials />
      <HomeFeaturedProducts
        products={featured.length ? featured : products.slice(0, 4)}
        title="Featured products"
        description="Handguns, carbine, optic, light, sling, and defensive ammo — optimized grid for desktop screenshots and stacked cards on mobile."
      />
      <FeaturedCategories />
      <PromoStrip />
      <ProductRow
        eyebrow="Deals"
        title="This week’s price drops"
        description="Same SKUs as weekly tiles in a product-card layout — ideal for comparing PDP styling."
        products={hotDeals.length ? hotDeals : products.slice(0, 4)}
        href="/specials"
        hrefLabel="All specials"
      />
      <TrustSection />
      <ProductRow
        eyebrow="Fresh inventory"
        title="New arrivals"
        description="Recently added optics and accessories as allocations land."
        products={newArrivals.length ? newArrivals : products.slice(0, 3)}
        href="/shop?sort=new"
        hrefLabel="Shop new"
      />
      <ProductRow
        eyebrow="Trending"
        title="Popular right now"
        description="Hot-deal and in-stock momentum for the demo."
        products={bestSellers}
        href="/shop"
      />
      {clearance.length ? (
        <ProductRow
          eyebrow="Value"
          title="Clearance"
          description="Limited quantities — same quality standards."
          products={clearance}
          href="/specials"
          hrefLabel="See specials"
        />
      ) : null}
      <GiveawayCallout />
      <VideoSection />
      <WhyChooseUs />
      <RequestProductTeaser />
      <Testimonials />
      <FaqPreview />
      <CtaBand />
      <Newsletter />
    </>
  );
}
