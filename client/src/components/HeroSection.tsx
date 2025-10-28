import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroImage, PropertyHighlights } from "@shared/schema";

interface HeroSectionProps {
  images: HeroImage[];
  highlights: PropertyHighlights;
}

export function HeroSection({ images, highlights }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPausedByHover, setIsPausedByHover] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isPausedByHover || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPausedByHover, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPausedByHover(true)}
      onMouseLeave={() => setIsPausedByHover(false)}
    >
      {/* Background Images with Crossfade */}
      {images.map((image, index) => (
        <div
          key={image.id}
          className="absolute inset-0 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
            transition: 'opacity 3000ms ease-in-out',
          }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-8 text-white">
        {/* Property Address */}
        <p 
          className="mb-8 text-sm uppercase tracking-[0.3em] font-sans font-light"
          data-testid="text-property-address"
        >
          1234 Trappers Point, Fort Collins
        </p>

        {/* Main Headline */}
        <h1 
          className="mb-6 max-w-5xl text-center font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight"
          data-testid="heading-hero-title"
        >
          A Lakefront Sanctuary in the Heart of Colorado
        </h1>

        {/* Feature Highlights Grid */}
        <div className="mb-12 mt-8 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
          <div className="flex items-center gap-3" data-testid="feature-acreage">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.acreage} of pristine lakefront land
            </p>
          </div>
          <div className="flex items-center gap-3" data-testid="feature-airport">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.airportDistance} to Denver International
            </p>
          </div>
          <div className="flex items-center gap-3" data-testid="feature-fireplaces">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.fireplaces} fireplaces throughout
            </p>
          </div>
          <div className="flex items-center gap-3" data-testid="feature-foothills">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.foothillsDistance} to Rocky Mountain foothills
            </p>
          </div>
          <div className="flex items-center gap-3" data-testid="feature-architecture">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.architecture}
            </p>
          </div>
          <div className="flex items-center gap-3" data-testid="feature-privacy">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.privacy}
            </p>
          </div>
          <div className="flex items-center gap-3" data-testid="feature-doors">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.customDoors}
            </p>
          </div>
          <div className="flex items-center gap-3" data-testid="feature-water-rights">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.waterRights}
            </p>
          </div>
          <div className="flex items-center gap-3 md:col-span-2 justify-center" data-testid="feature-horses">
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <p className="font-sans text-base md:text-lg font-light tracking-wide">
              {highlights.horseFeatures}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          size="lg"
          className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-base tracking-wide"
          data-testid="button-view-details"
          onClick={() => {
            document.getElementById('property-specs')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View Property Details
        </Button>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border border-white/20"
            onClick={goToPrevious}
            data-testid="button-hero-previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border border-white/20"
            onClick={goToNext}
            data-testid="button-hero-next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                data-testid={`button-hero-dot-${index}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
