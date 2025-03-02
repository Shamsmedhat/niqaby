
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

        </div>
      </div>
    </section>
  );
}