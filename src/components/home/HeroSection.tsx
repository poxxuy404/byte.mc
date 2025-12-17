import { GlassButton } from "@/components/ui/glass-button";
import { Copy, Users, Gamepad2, Shield } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const copyIP = () => {
    navigator.clipboard.writeText("bytemc.uz");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up-delay-1">
            {t("hero.title")}{" "}
            <span className="text-gradient">BYTEMC.UZ</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up-delay-2">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <GlassButton
              variant="primary"
              size="lg"
              onClick={copyIP}
              className="min-w-48"
            >
              <Copy className="h-5 w-5" />
              {copied ? t("common.copied") : t("hero.copyIP")}
            </GlassButton>
            <GlassButton variant="default" size="lg" className="min-w-48">
              <Gamepad2 className="h-5 w-5" />
              {t("hero.viewModes")}
            </GlassButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-up-delay-3">
            {[
              { icon: Users, value: "2025+", labelKey: "hero.stats.players" },
              { icon: Gamepad2, value: "12+", labelKey: "hero.stats.modes" },
              { icon: Shield, value: "24/7", labelKey: "hero.stats.online" },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
