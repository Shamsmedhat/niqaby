import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">عنا</h3>
            <p className="text-muted-foreground">
            نسعى لانتاج افضل انواع الملابس على طراز عربي يليق بتراثنا نقاب خليجي من أجود الخامات
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">لينكات مباشرة</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">الصفحة الرئيسية</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary">المنتجات</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary">من نحن</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a className="text-muted-foreground hover:text-primary" href="mailto:niqabyinfo@gmail.com">niqabyinfo@gmail.com</a></li>
              <li><a className="text-muted-foreground hover:text-primary" href="https://www.instagram.com/niqaby6?igsh=am9objN6c25qMWhq"></a></li>
              <li><a className="text-muted-foreground hover:text-primary" href="https://www.facebook.com/Niqabyy">فيسبوك</a></li>
              <li><a className="text-muted-foreground hover:text-primary " dir="ltr" href="tel:+201099359857">01099359857</a></li>
            </ul>
          </div>
          

        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © 2024 Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
