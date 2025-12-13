import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/ui/glass-button";
import { Check, Sparkles } from "lucide-react";

type Category = "survival" | "boxpvp" | "ranks";

const categories: { id: Category; label: string }[] = [
  { id: "survival", label: "Survival 1-2-3-4" },
  { id: "ranks", label: "Ranks" },
  { id: "boxpvp", label: "BoxPVP" },
];

const pricingData: Record<Category, Array<{
  name: string;
  prices: { duration: string; price: string }[];
  popular?: boolean;
}>> = {
  survival: [
    {
      name: "Soldier",
      prices: [
        { duration: "1 month", price: "4,999 UZS" },
        { duration: "3 months", price: "14,000 UZS" },
        { duration: "6 months", price: "25,000 UZS" },
        { duration: "1 year", price: "45,000 UZS" },
      ],
    },
    {
      name: "Sarkarda",
      prices: [
        { duration: "1 month", price: "9,999 UZS" },
        { duration: "3 months", price: "28,000 UZS" },
        { duration: "6 months", price: "55,000 UZS" },
        { duration: "1 year", price: "95,000 UZS" },
      ],
    },
    {
      name: "Fravn",
      prices: [
        { duration: "1 month", price: "14,999 UZS" },
        { duration: "3 months", price: "60,000 UZS" },
        { duration: "6 months", price: "110,000 UZS" },
        { duration: "1 year", price: "200,000 UZS" },
      ],
      popular: true,
    },
    {
      name: "Lord",
      prices: [
        { duration: "1 month", price: "19,999 UZS" },
        { duration: "3 months", price: "55,000 UZS" },
        { duration: "6 months", price: "100,000 UZS" },
        { duration: "1 year", price: "199,000 UZS" },
      ],
    },
    {
      name: "Gladiator",
      prices: [
        { duration: "1 month", price: "29,999 UZS" },
        { duration: "3 months", price: "80,000 UZS" },
        { duration: "6 months", price: "160,000 UZS" },
        { duration: "1 year", price: "300,000 UZS" },
      ],
    },
    {
      name: "King",
      prices: [
        { duration: "1 month", price: "39,999 UZS" },
        { duration: "3 months", price: "110,000 UZS" },
        { duration: "6 months", price: "200,000 UZS" },
        { duration: "1 year", price: "390,000 UZS" },
      ],
    },
    {
      name: "General",
      prices: [
        { duration: "1 month", price: "49,999 UZS" },
        { duration: "3 months", price: "140,000 UZS" },
        { duration: "6 months", price: "260,000 UZS" },
        { duration: "1 year", price: "490,000 UZS" },
      ],
    },
    {
      name: "Emperor",
      prices: [
        { duration: "1 month", price: "59,999 UZS" },
        { duration: "3 months", price: "170,000 UZS" },
        { duration: "6 months", price: "330,000 UZS" },
        { duration: "1 year", price: "650,000 UZS" },
      ],
      popular: true,
    },
  ],
  ranks: [
    {
      name: "Vip",
      prices: [
        { duration: "1 month", price: "4,999 UZS" },
        { duration: "3 months", price: "14,000 UZS" },
        { duration: "6 months", price: "25,000 UZS" },
        { duration: "1 year", price: "45,000 UZS" },
      ],
    },
    {
      name: "Elite",
      prices: [
        { duration: "1 month", price: "9,999 UZS" },
        { duration: "3 months", price: "28,000 UZS" },
        { duration: "6 months", price: "55,000 UZS" },
        { duration: "1 year", price: "95,000 UZS" },
      ],
    },
    {
      name: "Prime",
      prices: [
        { duration: "1 month", price: "14,999 UZS" },
        { duration: "3 months", price: "60,000 UZS" },
        { duration: "6 months", price: "110,000 UZS" },
        { duration: "1 year", price: "200,000 UZS" },
      ],
    },
    {
      name: "Epicly",
      prices: [
        { duration: "1 month", price: "19,999 UZS" },
        { duration: "3 months", price: "55,000 UZS" },
        { duration: "6 months", price: "100,000 UZS" },
        { duration: "1 year", price: "199,000 UZS" },
      ],
    },
    {
      name: "Ultra",
      prices: [
        { duration: "1 month", price: "29,999 UZS" },
        { duration: "3 months", price: "80,000 UZS" },
        { duration: "6 months", price: "160,000 UZS" },
        { duration: "1 year", price: "300,000 UZS" },
      ],
      popular: true,
    },
    {
      name: "Premium",
      prices: [
        { duration: "1 month", price: "49,999 UZS" },
        { duration: "3 months", price: "140,000 UZS" },
        { duration: "6 months", price: "260,000 UZS" },
        { duration: "1 year", price: "490,000 UZS" },
      ],
    },
    {
      name: "Universal",
      prices: [
        { duration: "1 month", price: "59,999 UZS" },
        { duration: "3 months", price: "170,000 UZS" },
        { duration: "6 months", price: "330,000 UZS" },
        { duration: "1 year", price: "650,000 UZS" },
      ],
    },
    {
      name: "Premium+",
      prices: [
        { duration: "1 month", price: "70,000 UZS" },
        { duration: "3 months", price: "200,000 UZS" },
        { duration: "6 months", price: "390,000 UZS" },
        { duration: "1 year", price: "750,000 UZS" },
      ],
      popular: true,
    },
  ],
  boxpvp: [
    {
      name: "VIP",
      prices: [
        { duration: "1 month", price: "3,990 UZS" },
        { duration: "3 months", price: "10,000 UZS" },
        { duration: "6 months", price: "22,000 UZS" },
        { duration: "1 year", price: "40,000 UZS" },
      ],
    },
    {
      name: "TERRA",
      prices: [
        { duration: "1 month", price: "9,999 UZS" },
        { duration: "3 months", price: "25,000 UZS" },
        { duration: "6 months", price: "50,000 UZS" },
        { duration: "1 year", price: "99,000 UZS" },
      ],
    },
    {
      name: "NOVA",
      prices: [
        { duration: "1 month", price: "19,999 UZS" },
        { duration: "3 months", price: "55,000 UZS" },
        { duration: "6 months", price: "110,000 UZS" },
        { duration: "1 year", price: "200,000 UZS" },
      ],
      popular: true,
    },
    {
      name: "NEBULA",
      prices: [
        { duration: "1 month", price: "29,999 UZS" },
        { duration: "3 months", price: "85,000 UZS" },
        { duration: "6 months", price: "170,000 UZS" },
        { duration: "1 year", price: "320,000 UZS" },
      ],
    },
    {
      name: "KING",
      prices: [
        { duration: "1 month", price: "45,000 UZS" },
        { duration: "3 months", price: "125,000 UZS" },
        { duration: "6 months", price: "250,000 UZS" },
        { duration: "1 year", price: "450,000 UZS" },
      ],
      popular: true,
    },
  ],
};

const Prices = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("survival");
  const [selectedDuration, setSelectedDuration] = useState("1 month");

  const durations = ["1 month", "3 months", "6 months", "1 year"];

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              Premium Ranks
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Prices</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect rank for your playstyle. All ranks include exclusive
              perks and benefits.
            </p>
          </div>

          {/* Exchange Rate */}
          <div className="glass rounded-xl p-4 mb-8 max-w-md mx-auto text-center animate-fade-up-delay-1">
            <p className="font-display font-semibold text-foreground">
              💵 1,000 ByteCoin = 2,000 UZS
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-up-delay-1">
            {categories.map((cat) => (
              <GlassButton
                key={cat.id}
                variant={activeCategory === cat.id ? "primary" : "default"}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </GlassButton>
            ))}
          </div>

          {/* Duration Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up-delay-2">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={cn(
                  "px-4 py-2 rounded-lg font-display text-sm font-semibold transition-all duration-300",
                  selectedDuration === duration
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {duration}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-up-delay-3">
            {pricingData[activeCategory].map((rank, index) => {
              const selectedPrice = rank.prices.find(
                (p) => p.duration === selectedDuration
              );

              return (
                <div
                  key={index}
                  className={cn(
                    "glass rounded-xl p-6 relative transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow))]",
                    rank.popular && "ring-2 ring-primary"
                  )}
                >
                  {rank.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-display font-bold">
                        <Sparkles className="h-3 w-3" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-bold text-gradient mb-2">
                      {rank.name}
                    </h3>
                    <div className="font-display text-3xl font-bold text-foreground">
                      {selectedPrice?.price}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {selectedDuration}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {[
                      "Exclusive Kit",
                      "Custom Prefix",
                      "Priority Support",
                      "Special Commands",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <GlassButton
                    variant={rank.popular ? "primary" : "default"}
                    className="w-full"
                  >
                    Purchase
                  </GlassButton>
                </div>
              );
            })}
          </div>

          {/* Payment Info */}
          <div className="mt-16 glass rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">
              Payment Methods
            </h3>
            <p className="text-muted-foreground mb-6">
              We accept various payment methods for your convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Payme", "Click", "Uzcard", "Humo"].map((method) => (
                <span
                  key={method}
                  className="glass px-4 py-2 rounded-lg text-sm font-display font-semibold"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;
