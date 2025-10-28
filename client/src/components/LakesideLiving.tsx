import { Waves, Heart, TreePine, Eye } from "lucide-react";
import lakesideBg from "@assets/generated_images/Panoramic_lake_sunset_vista_47219ea4.png";

export function LakesideLiving() {
  const benefits = [
    {
      icon: Eye,
      title: "Panoramic Lake Views",
      description: "Ever-changing water vistas that transform with each season and hour",
    },
    {
      icon: Heart,
      title: "Therapeutic Living",
      description: "Science-backed wellness benefits of daily water proximity",
    },
    {
      icon: TreePine,
      title: "Private Sanctuary",
      description: "Secluded natural beauty, yet conveniently accessible",
    },
    {
      icon: Waves,
      title: "Natural Wonder",
      description: "Wildlife, sunsets, and the peaceful rhythm of the water",
    },
  ];

  return (
    <section className="relative py-32 px-8 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${lakesideBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl text-white">
        {/* Section Heading */}
        <h2 className="mb-12 text-center font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide" data-testid="heading-lakeside-living">
          The Lakeside Living Experience
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="text-center" data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Icon className="h-10 w-10 mx-auto mb-4 text-white/80" />
                <h3 className="font-sans font-semibold text-lg mb-2 tracking-wide">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-white/80">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pull Quote */}
        <blockquote className="text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed" data-testid="quote-nature-documentary">
            "Like having your own 24/7 nature documentary, where every sunrise and sunset writes a new chapter in your story."
          </p>
        </blockquote>

        {/* Additional Description */}
        <div className="mt-12 space-y-6 text-center max-w-3xl mx-auto">
          <p className="font-sans text-lg leading-relaxed text-white/90">
            Living on the water isn't just about the view—it's about waking up to the gentle sound of lapping waves, 
            watching the morning mist rise across the lake, and ending each day with breathtaking sunsets reflected on the water's surface.
          </p>
          <p className="font-sans text-lg leading-relaxed text-white/90">
            Research shows that proximity to water reduces stress, enhances creativity, and promotes overall well-being. 
            This isn't just a home; it's a daily retreat into nature's most therapeutic setting.
          </p>
        </div>
      </div>
    </section>
  );
}
