import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/ui/glass-button";
import { Check, Sparkles, Crown, Shield, Zap } from "lucide-react";
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

  const categoryIcons = {
    survival: Shield,
    ranks: Crown,
    boxpvp: Zap,
  };

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-glow/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 animate-pulse" />
              {t("prices.premiumRanks")}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t("prices.titleStart")} <span className="text-gradient animate-gradient">{t("prices.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("prices.description")}</p>
          </div>

          {/* Info Banners */}
          <div className="max-w-md mx-auto mb-12 space-y-4 animate-fade-up-delay-1">
            <div className="glass rounded-xl p-4 text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-primary/10">
              <p className="font-display font-semibold text-foreground">{t("prices.note")}</p>
            </div>
            <div className="glass rounded-xl p-4 text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-glow/10">
              <p className="font-display font-semibold text-foreground">{t("prices.exchangeRate")}</p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up-delay-1">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              return (
                <GlassButton
                  key={cat}
                  variant={activeCategory === cat ? "primary" : "default"}
                  onClick={() => setActiveCategory(cat)}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 mr-2 inline-block group-hover:rotate-12 transition-transform duration-300" />
                  {t(`categories.${cat}`)}
                </GlassButton>
              );
            })}
          </div>

          {/* Duration Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up-delay-2">
            {durations.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDur(d.id)}
                className={cn(
                  "px-6 py-2.5 rounded-lg font-display text-sm font-semibold transition-all duration-300 hover:scale-105",
                  selectedDur === d.id
                    ? "bg-primary/20 text-primary shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground glass"
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
                <div
                  key={index}
                  className={cn(
                    "glass rounded-2xl p-6 relative transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--glow))] group",
                    rank.popular && "ring-2 ring-primary shadow-lg shadow-primary/20"
                  )}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`
                  }}
                >
                  {rank.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-display font-bold shadow-lg">
                        <Sparkles className="h-3 w-3 animate-pulse" />
                        {t("prices.popular")}
                      </span>
                    </div>
                  )}

                  {/* Icon with 3D effect */}
                  <div className="mb-5 flex justify-center perspective-1000">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-glow flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-y-12 transition-all duration-500">
                      <Crown className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{rank.name}</h3>
                    <div className="font-display text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{selectedPrice?.price}</div>
                    <p className="text-muted-foreground text-sm">{t(`durations.${selectedDur}`)}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {[
                      "features.exclusiveKit",
                      "features.customPrefix",
                      "features.prioritySupport",
                      "features.specialCommands",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm group/item"
                        style={{
                          animation: `slideInLeft 0.4s ease-out ${0.1 * i}s both`
                        }}
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/30 group-hover/item:scale-110 transition-all duration-300">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>

                  <GlassButton
                    variant={rank.popular ? "primary" : "default"}
                    className="w-full opacity-70 pointer-events-none cursor-not-allowed relative overflow-hidden"
                    aria-disabled
                    tabIndex={-1}
                  >
                    <span className="relative z-10">{t("prices.infoOnly")}</span>
                  </GlassButton>
                </div>
              );
            })}
          </div>

          {/* Payment Info */}
          <div className="mt-16 glass rounded-2xl p-8 text-center max-w-3xl mx-auto hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-primary/10">
            <h3 className="font-display text-2xl font-bold mb-4 text-gradient">{t("prices.paymentTitle")}</h3>
            <p className="text-muted-foreground mb-6">{t("prices.paymentDescription")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Payme", "Click", "Uzcard", "Humo"].map((method, i) => (
                <div
                  key={method}
                  className="glass px-4 py-3 rounded-xl text-sm font-display font-semibold hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${0.1 * i}s both`
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-glow mx-auto mb-2 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-lg font-black text-primary-foreground">{method[0]}</span>
                  </div>
                  {t(`payment.${method}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </Layout>
  );
};

export default Prices;