import Facts from "./Facts";
import RecentPosts from "./RecentPosts";
import Hero from "./Hero";
import SpecialOffers from "./SpecialOffers";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedProducts from "./FeaturedProducts";

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
