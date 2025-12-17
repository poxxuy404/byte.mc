import { Swords, Castle, Users, Zap, Award, HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next";

const featureKeys = [
  { icon: Swords, keyPrefix: "features.boxpvp" },
  { icon: Castle, keyPrefix: "features.survival" },
  { icon: Users, keyPrefix: "features.community" },
  { icon: Zap, keyPrefix: "features.latency" },
  { icon: Award, keyPrefix: "features.ranking" },
  { icon: HeartHandshake, keyPrefix: "features.fairplay" },
];

export function FeaturesSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">ByteMC</span>{t("features.titleStart")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow))] hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                {t(`${feature.keyPrefix}.title`)}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t(`${feature.keyPrefix}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
