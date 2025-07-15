import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import TechStack from "@/components/tech-stack";
import BlogPreview from "@/components/blog-preview";
import ContactAndNewsletter from "@/components/contact-and-newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <Services /> removed for modal usage */}
      <CaseStudies />
      <Testimonials />
      <TechStack />
      <BlogPreview />
      <ContactAndNewsletter />
      <Footer />
    </main>
  );
}
