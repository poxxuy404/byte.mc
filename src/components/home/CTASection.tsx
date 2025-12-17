import { GlassButton } from "@/components/ui/glass-button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            {t("cta.badge")}
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t("cta.titleStart")} <span className="text-gradient">{t("cta.titleHighlight")}</span> {t("cta.titleEnd")}
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlassButton variant="primary" size="lg" asChild>
              <Link to="/prices">
                {t("cta.viewPrices")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </GlassButton>
            <GlassButton variant="default" size="lg">
              {t("cta.joinDiscord")}
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}
