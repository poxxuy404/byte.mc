import { Layout } from "@/components/layout/Layout";
import { Target, Heart, Rocket, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const valueKeys = [
  { icon: Target, keyPrefix: "about.values.mission" },
  { icon: Heart, keyPrefix: "about.values.community" },
  { icon: Rocket, keyPrefix: "about.values.innovation" },
  { icon: Shield, keyPrefix: "about.values.fairplay" },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-20 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              {t("about.hero.badge")}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t("about.hero.titleStart")} <span className="text-gradient">ByteMC</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("about.hero.description")}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "2023", labelKey: "about.stats.founded" },
              { value: "2025+", labelKey: "about.stats.players" },
              { value: "99.99%", labelKey: "about.stats.uptime" },
              { value: "24/7", labelKey: "about.stats.support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 text-center animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              {t("about.values.titleStart")} <span className="text-gradient">{t("about.values.titleHighlight")}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueKeys.map((value, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow))]"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {t(`${value.keyPrefix}.title`)}
                  </h3>
                  <p className="text-muted-foreground">{t(`${value.keyPrefix}.description`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              {t("about.journey.titleStart")} <span className="text-gradient">{t("about.journey.titleHighlight")}</span>
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  date: t("about.journey.events.0.date"),
                  titleKey: "about.journey.events.0.title",
                  descriptionKey: "about.journey.events.0.description",
                },
                {
                  date: t("about.journey.events.1.date"),
                  titleKey: "about.journey.events.1.title",
                  descriptionKey: "about.journey.events.1.description",
                },
                {
                  date: t("about.journey.events.2.date"),
                  titleKey: "about.journey.events.2.title",
                  descriptionKey: "about.journey.events.2.description",
                },
                {
                  date: t("about.journey.events.3.date"),
                  titleKey: "about.journey.events.3.title",
                  descriptionKey: "about.journey.events.3.description",
                },
              ].map((event, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    {i < 3 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="glass rounded-xl p-6 flex-1 -mt-1">
                    <span className="text-primary text-sm font-display font-semibold">
                      {event.date}
                    </span>
                    <h4 className="font-display text-lg font-bold mt-1 mb-2">
                      {t(event.titleKey)}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t(event.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
