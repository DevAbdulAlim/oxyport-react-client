import Facts from "../sections/Facts";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../sections/Hero";
import SpecialOffers from "../sections/SpecialOffers";
import FeaturedCategories from "../sections/FeaturedCategories";
import FeaturedProducts from "../sections/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialOffers />
      <FeaturedCategories />
      <FeaturedProducts />
      <Facts />
      <RecentPosts />
    </>
  );
}
