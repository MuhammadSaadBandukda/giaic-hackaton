
import Brands from "@/app/components/Brands";
import DiscountItem from "@/app/components/DiscountItem";
import FeaturedProd from "@/app/components/FeaturedProd";
import HeroSection from "@/app/components/HeroSection";
import HomeBanner from "@/app/components/HomeBanner";
import LatestBlog from "@/app/components/LatestBlog";
import LatestProducts from "@/app/components/LatestProducts";
import Rectangle from "@/app/components/Rectangle";
import ShopexOffer from "@/app/components/ShopexOffer";
import TopCategory from "@/app/components/TopCategory";
import TrendingProducts from "@/app/components/TrendingProducts";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <FeaturedProd/>
    <LatestProducts/>
    <ShopexOffer/>
    <HomeBanner/>
    <TrendingProducts/>
    <DiscountItem/>
    <TopCategory/>
    <Rectangle/>
    <Brands/>
    <LatestBlog/>

    
    </div>

);}
