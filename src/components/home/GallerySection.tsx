import { useState } from "react";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 1,
    title: "Spawn Area",
    description: "Our beautiful main spawn with custom builds",
  },
  {
    id: 2,
    title: "PvP Arena",
    description: "Competitive battle grounds",
  },
  {
    id: 3,
    title: "Survival World",
    description: "Vast exploration awaits",
  },
  {
    id: 4,
    title: "Events",
    description: "Regular community events",
  },
  {
    id: 5,
    title: "Shop District",
    description: "Player-run economy",
  },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Server <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our beautifully crafted worlds and game modes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Display */}
          <div className="glass rounded-2xl overflow-hidden aspect-video relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary">
                    {activeIndex + 1}
                  </span>
                </div>
                <p className="text-muted-foreground">Gallery Image</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {galleryImages[activeIndex].title}
              </h3>
              <p className="text-muted-foreground">
                {galleryImages[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "glass rounded-xl aspect-video relative overflow-hidden transition-all duration-300",
                  activeIndex === index
                    ? "ring-2 ring-primary shadow-[0_0_20px_hsl(var(--glow))]"
                    : "hover:ring-1 hover:ring-primary/50"
                )}
              >
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary/50">
                    {index + 1}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs font-display font-semibold text-foreground">
                  {image.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
