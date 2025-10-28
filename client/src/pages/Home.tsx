import { useQuery } from "@tanstack/react-query";
import { HeroSection } from "@/components/HeroSection";
import { PropertySpecs } from "@/components/PropertySpecs";
import { PhotoGalleries } from "@/components/PhotoGalleries";
import { LakesideLiving } from "@/components/LakesideLiving";
import { ContactSection } from "@/components/ContactSection";
import type { PropertyData } from "@shared/schema";

export default function Home() {
  const { data: propertyData, isLoading } = useQuery<PropertyData>({
    queryKey: ["/api/property"],
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="font-sans text-muted-foreground">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!propertyData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="font-sans text-muted-foreground">Property data not available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        images={propertyData.heroImages} 
        highlights={propertyData.highlights} 
      />
      <PropertySpecs specs={propertyData.specs} />
      <PhotoGalleries photos={propertyData.photos} />
      <LakesideLiving />
      <ContactSection contact={propertyData.contact} />
    </div>
  );
}
