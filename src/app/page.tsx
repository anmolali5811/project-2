"use client"
import CustomCarousel from "@/components/home/carousel";
import ContactUs from "@/components/contact-us";
import IndustriesWeOffer from "@/components/home/industries-we-offer";
import OurPartners from "@/components/home/our-partners";
import OurServices from "@/components/home/our-services";
import RelatedBlogs from "@/components/home/related-blogs";
import Testimonials from "@/components/home/testimonials";
import WhyVertexElite from "@/components/home/why-VertexElite";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden pb-12">
      <CustomCarousel />
      <WhyVertexElite />
      <OurServices />
      <IndustriesWeOffer />
      <Testimonials />
      <RelatedBlogs />
      <OurPartners />
      <ContactUs />
    </div>
  );
}
