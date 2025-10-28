import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Photo } from "@shared/schema";

interface PhotoGalleriesProps {
  photos: Photo[];
}

export function PhotoGalleries({ photos }: PhotoGalleriesProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState<"interior" | "exterior" | "lake" | null>(null);

  const interiorPhotos = photos.filter((p) => p.category === "interior");
  const exteriorPhotos = photos.filter((p) => p.category === "exterior");
  const lakePhotos = photos.filter((p) => p.category === "lake");

  const openLightbox = (category: "interior" | "exterior" | "lake", index: number) => {
    setCurrentCategory(category);
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const getCurrentPhotos = () => {
    if (currentCategory === "interior") return interiorPhotos;
    if (currentCategory === "exterior") return exteriorPhotos;
    if (currentCategory === "lake") return lakePhotos;
    return [];
  };

  const currentPhotos = getCurrentPhotos();

  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % currentPhotos.length);
  };

  return (
    <>
      {/* Interior Photos */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground" data-testid="heading-interior">
            Interior Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interiorPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openLightbox("interior", index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                data-testid={`button-interior-${index}`}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior Photos */}
      <section className="py-20 px-8 bg-accent/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground" data-testid="heading-exterior">
            Exterior & Grounds
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {exteriorPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openLightbox("exterior", index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                data-testid={`button-exterior-${index}`}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Photos */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground" data-testid="heading-lake">
            Lakefront Views
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {lakePhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openLightbox("lake", index)}
                className="group relative aspect-[16/9] overflow-hidden rounded-lg"
                data-testid={`button-lake-${index}`}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentPhotos[currentPhotoIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
            data-testid="button-lightbox-close"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          {currentPhotos.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              data-testid="button-lightbox-previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          {/* Image */}
          <img
            src={currentPhotos[currentPhotoIndex].url}
            alt={currentPhotos[currentPhotoIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            data-testid="img-lightbox-current"
          />

          {/* Next Button */}
          {currentPhotos.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-black/40 backdrop-blur-sm px-4 py-2 text-white font-sans text-sm">
            {currentPhotoIndex + 1} / {currentPhotos.length}
          </div>
        </div>
      )}
    </>
  );
}
