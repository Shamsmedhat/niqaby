import { NavHeader } from "@/components/nav-header";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { Footer } from "@/components/footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      
      <main className="flex-1">
        <HeroSection />
        
        <section id="products" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of premium products, carefully selected for quality and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section id="about" className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
              <p className="text-muted-foreground mb-6">
                We are passionate about bringing you the finest selection of premium products.
                Our curated collection features innovative designs and exceptional quality,
                ensuring that every purchase exceeds your expectations.
              </p>
              <p className="text-muted-foreground">
                With years of experience in the industry, we understand what our customers want
                and strive to provide an unmatched shopping experience.
              </p>
            </div>
          </div>
        </section>
        
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products? We're here to help.
              Reach out to our team for personalized assistance.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
