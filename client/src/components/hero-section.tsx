import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundImage: 'url(https://images.unsplash.com/photo-1503455637927-730bce8583c0)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Our Premium Collection
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Experience luxury and innovation with our curated selection of premium products.
            Elevate your lifestyle with exceptional quality and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg text-white border-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}