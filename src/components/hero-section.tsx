import { MoveLeft } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center">
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
          اكتشف مجموعتنا المميزة
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200 tracking-wide ">
            استمتع بالفخامة والإبداع مع مجموعتنا المختارة بعناية من المنتجات المتميزة.
            ارتق بأسلوب حياتك بجودة وتصميم استثنائيين.
          </p>
          <Button className="text-2xl p-5">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmSXiZU1FQkP5WipWt_eNZGFEPrNtUfAi5wUcQxsOnu890aw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            <span className="flex justify-center items-center gap-2">
            احجز طلباتك من هنا
            <MoveLeft />
            </span>
          </a>
          </Button>
        </div>
      </div>
    </section>
  );
}