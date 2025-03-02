import { NavHeader } from "@/components/nav-header";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { Footer } from "@/components/footer";
import { products } from "@/data/products";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-arabic">
      <NavHeader />
      
      <main className="flex-1">
        <HeroSection />

        <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
          <Gallery />
        </section>

        <section id="products" className="container mx-auto px-4 py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">المنتجات المميزة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعتنا من المنتجات المتميزة، والتي تم اختيارها بعناية من حيث الجودة والأناقة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section id="about" className="bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">عن متجرنا</h2>
              <p className="text-muted-foreground mb-6 text-2xl">
              نسعى لانتاج افضل انواع الملابس على طراز عربي يليق بتراثنا نقاب خليجي من أجود الخامات
              </p>
            </div>
          </div>
        </section>
        
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
            <div className="text-muted-foreground max-w-2xl mx-auto text-2xl">
              <p>
              يمكنك التواصل عن طريق الايميل :<a className="underline text-blue-600" href="mailto:niqabyinfo@gmail.com">niqabyinfo@gmail.com</a> 
              </p>
              <p>
              يمكنك التواصل عن طريق الانستجرام :<a className="underline text-purple-600" href="https://www.instagram.com/niqaby6?igsh=am9objN6c25qMWhq">انستجرام</a> 
              </p>
              <p>
              يمكنك التواصل عن طريق الفيسبوك :<a className="underline text-blue-500" href="https://www.facebook.com/Niqabyy">فيسبوك</a> 
              </p>
              <p>
              يمكنك التواصل عن طريق التليفون :<a className="underline text-green-600 " dir="ltr" href="tel:+201099359857">01099359857</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
