import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/ui/glass-button";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

type Category = "survival" | "boxpvp" | "ranks";

const categories: Category[] = ["survival", "ranks", "boxpvp"];

const pricingData: Record<
  Category,
  Array<{ name: string; prices: { duration: string; price: string }[]; popular?: boolean }>
> = {
  survival: [
    {
      name: "Soldier",
      prices: [
        { duration: "1m", price: "4,999 UZS" },
        { duration: "3m", price: "14,000 UZS" },
        { duration: "6m", price: "25,000 UZS" },
        { duration: "1y", price: "45,000 UZS" },
      ],
    },
    {
      name: "Sarkarda",
      prices: [
        { duration: "1m", price: "9,999 UZS" },
        { duration: "3m", price: "28,000 UZS" },
        { duration: "6m", price: "55,000 UZS" },
        { duration: "1y", price: "95,000 UZS" },
      ],
    },
    {
      name: "Fravn",
      prices: [
        { duration: "1m", price: "14,999 UZS" },
        { duration: "3m", price: "60,000 UZS" },
        { duration: "6m", price: "110,000 UZS" },
        { duration: "1y", price: "200,000 UZS" },
      ],
      popular: true,
    },
    {
      name: "Lord",
      prices: [
        { duration: "1m", price: "19,999 UZS" },
        { duration: "3m", price: "55,000 UZS" },
        { duration: "6m", price: "100,000 UZS" },
        { duration: "1y", price: "199,000 UZS" },
      ],
    },
    {
      name: "Gladiator",
      prices: [
        { duration: "1m", price: "29,999 UZS" },
        { duration: "3m", price: "80,000 UZS" },
        { duration: "6m", price: "160,000 UZS" },
        { duration: "1y", price: "300,000 UZS" },
      ],
    },
    {
      name: "King",
      prices: [
        { duration: "1m", price: "39,999 UZS" },
        { duration: "3m", price: "110,000 UZS" },
        { duration: "6m", price: "200,000 UZS" },
        { duration: "1y", price: "390,000 UZS" },
      ],
    },
    {
      name: "General",
      prices: [
        { duration: "1m", price: "49,999 UZS" },
        { duration: "3m", price: "140,000 UZS" },
        { duration: "6m", price: "260,000 UZS" },
        { duration: "1y", price: "490,000 UZS" },
      ],
    },
    {
      name: "Emperor",
      prices: [
        { duration: "1m", price: "59,999 UZS" },
        { duration: "3m", price: "170,000 UZS" },
        { duration: "6m", price: "330,000 UZS" },
        { duration: "1y", price: "650,000 UZS" },
      ],
      popular: true,
    },
  ],
  ranks: [
    {
      name: "Vip",
      prices: [
        { duration: "1m", price: "4,999 UZS" },
        { duration: "3m", price: "14,000 UZS" },
        { duration: "6m", price: "25,000 UZS" },
        { duration: "1y", price: "45,000 UZS" },
      ],
    },
    {
      name: "Elite",
      prices: [
        { duration: "1m", price: "9,999 UZS" },
        { duration: "3m", price: "28,000 UZS" },
        { duration: "6m", price: "55,000 UZS" },
        { duration: "1y", price: "95,000 UZS" },
      ],
    },
    {
      name: "Prime",
      prices: [
        { duration: "1m", price: "14,999 UZS" },
        { duration: "3m", price: "60,000 UZS" },
        { duration: "6m", price: "110,000 UZS" },
        { duration: "1y", price: "200,000 UZS" },
      ],
    },
    {
      name: "Epicly",
      prices: [
        { duration: "1m", price: "19,999 UZS" },
        { duration: "3m", price: "55,000 UZS" },
        { duration: "6m", price: "100,000 UZS" },
        { duration: "1y", price: "199,000 UZS" },
      ],
    },
    {
      name: "Ultra",
      prices: [
        { duration: "1m", price: "29,999 UZS" },
        { duration: "3m", price: "80,000 UZS" },
        { duration: "6m", price: "160,000 UZS" },
        { duration: "1y", price: "300,000 UZS" },
      ],
      popular: true,
    },
    {
      name: "Premium",
      prices: [
        { duration: "1m", price: "49,999 UZS" },
        { duration: "3m", price: "140,000 UZS" },
        { duration: "6m", price: "260,000 UZS" },
        { duration: "1y", price: "490,000 UZS" },
      ],
    },
    {
      name: "Universal",
      prices: [
        { duration: "1m", price: "59,999 UZS" },
        { duration: "3m", price: "170,000 UZS" },
        { duration: "6m", price: "330,000 UZS" },
        { duration: "1y", price: "650,000 UZS" },
      ],
    },
    {
      name: "Premium+",
      prices: [
        { duration: "1m", price: "70,000 UZS" },
        { duration: "3m", price: "200,000 UZS" },
        { duration: "6m", price: "390,000 UZS" },
        { duration: "1y", price: "750,000 UZS" },
      ],
      popular: true,
    },
  ],
  boxpvp: [
    {
      name: "VIP",
      prices: [
        { duration: "1m", price: "3,990 UZS" },
        { duration: "3m", price: "10,000 UZS" },
        { duration: "6m", price: "22,000 UZS" },
        { duration: "1y", price: "40,000 UZS" },
      ],
    },
    {
      name: "TERRA",
      prices: [
        { duration: "1m", price: "9,999 UZS" },
        { duration: "3m", price: "25,000 UZS" },
        { duration: "6m", price: "50,000 UZS" },
        { duration: "1y", price: "99,000 UZS" },
      ],
    },
    {
      name: "NOVA",
      prices: [
        { duration: "1m", price: "19,999 UZS" },
        { duration: "3m", price: "55,000 UZS" },
        { duration: "6m", price: "110,000 UZS" },
        { duration: "1y", price: "200,000 UZS" },
      ],
      popular: true,
    },
    {
      name: "NEBULA",
      prices: [
        { duration: "1m", price: "29,999 UZS" },
        { duration: "3m", price: "85,000 UZS" },
        { duration: "6m", price: "170,000 UZS" },
        { duration: "1y", price: "320,000 UZS" },
      ],
    },
    {
      name: "KING",
      prices: [
        { duration: "1m", price: "45,000 UZS" },
        { duration: "3m", price: "125,000 UZS" },
        { duration: "6m", price: "250,000 UZS" },
        { duration: "1y", price: "450,000 UZS" },
      ],
      popular: true,
    },
  ],
};

const Prices = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Category>("survival");
  const durations = [
    { id: "1m", labelKey: "durations.1m" },
    { id: "3m", labelKey: "durations.3m" },
    { id: "6m", labelKey: "durations.6m" },
    { id: "1y", labelKey: "durations.1y" },
  ];
  const [selectedDur, setSelectedDur] = useState<string>("1m");

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              {t("prices.premiumRanks")}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t("prices.titleStart")} <span className="text-gradient">{t("prices.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("prices.description")}</p>
          </div>

          {/* NOTE: informational-only banner */}
          <div className="glass rounded-xl p-4 mb-8 max-w-md mx-auto text-center animate-fade-up-delay-1">
            <p className="font-display font-semibold text-foreground">{t("prices.note")}</p>
          </div>

          {/* Exchange Rate */}
          <div className="glass rounded-xl p-4 mb-8 max-w-md mx-auto text-center animate-fade-up-delay-1">
            <p className="font-display font-semibold text-foreground">{t("prices.exchangeRate")}</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-up-delay-1">
            {categories.map((cat) => (
              <GlassButton key={cat} variant={activeCategory === cat ? "primary" : "default"} onClick={() => setActiveCategory(cat)}>
                {t(`categories.${cat}`)}
              </GlassButton>
            ))}
          </div>

          {/* Duration Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up-delay-2">
            {durations.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDur(d.id)}
                className={cn(
                  "px-4 py-2 rounded-lg font-display text-sm font-semibold transition-all duration-300",
                  selectedDur === d.id ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(d.labelKey)}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-up-delay-3">
            {pricingData[activeCategory].map((rank, index) => {
              const selectedPrice = rank.prices.find((p) => p.duration === selectedDur);

              return (
                <div key={index} className={cn("glass rounded-xl p-6 relative transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow))]", rank.popular && "ring-2 ring-primary")}>
                  {rank.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-display font-bold">
                        <Sparkles className="h-3 w-3" />
                        {t("prices.popular")}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-bold text-gradient mb-2">{rank.name}</h3>
                    <div className="font-display text-3xl font-bold text-foreground">{selectedPrice?.price}</div>
                    <p className="text-muted-foreground text-sm">{t(`durations.${selectedDur}`)}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {[
                      "features.exclusiveKit",
                      "features.customPrefix",
                      "features.prioritySupport",
                      "features.specialCommands",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Disabled / informational button - not for purchase */}
                  <GlassButton variant={rank.popular ? "primary" : "default"} className="w-full opacity-70 pointer-events-none cursor-not-allowed" aria-disabled tabIndex={-1}>
                    {t("prices.infoOnly")}
                  </GlassButton>
                </div>
              );
            })}
          </div>

          {/* Payment Info */}
          <div className="mt-16 glass rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">{t("prices.paymentTitle")}</h3>
            <p className="text-muted-foreground mb-6">{t("prices.paymentDescription")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Payme", "Click", "Uzcard", "Humo"].map((method) => (
                <span key={method} className="glass px-4 py-2 rounded-lg text-sm font-display font-semibold">{t(`payment.${method}`)}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;
