import { Layout } from "@/components/layout/Layout";
import { Crown, Shield, Sword, Star } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const staffCategories = [
  {
    titleKey: "admins.categories.owners",
    icon: Crown,
    members: [
      { name: "ByteKing", role: "Founder & CEO", online: true },
      { name: "MCMaster", role: "Co-Founder", online: true },
    ],
  },
  {
    titleKey: "admins.categories.administrators",
    icon: Shield,
    members: [
      { name: "AdminPro", role: "Head Admin", online: true },
      { name: "ServerGuard", role: "Senior Admin", online: false },
      { name: "TechWizard", role: "Technical Admin", online: true },
    ],
  },
  {
    titleKey: "admins.categories.moderators",
    icon: Sword,
    members: [
      { name: "ModMaster", role: "Head Mod", online: true },
      { name: "FairPlay", role: "Senior Mod", online: true },
      { name: "Guardian", role: "Moderator", online: false },
      { name: "Protector", role: "Moderator", online: true },
      { name: "Watchdog", role: "Moderator", online: false },
    ],
  },
  {
    titleKey: "admins.categories.helpers",
    icon: Star,
    members: [
      { name: "Helper1", role: "Helper", online: true },
      { name: "NewHelper", role: "Trial Helper", online: false },
      { name: "Support_Pro", role: "Helper", online: true },
    ],
  },
];

const Admins = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              {t("admins.meetTeam")}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t("admins.titleStart")} <span className="text-gradient">{t("admins.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("admins.description")}
            </p>
          </div>

          <div className="space-y-12">
            {staffCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="animate-fade-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">
                    {t(category.titleKey)}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.members.map((member, memIndex) => (
                    <div
                      key={memIndex}
                      className={cn(
                        "glass rounded-xl p-5 transition-all duration-300 group",
                        "hover:shadow-[0_0_30px_hsl(var(--glow))] hover:translate-y-[-4px]"
                      )}
                      style={{ animationDelay: `${memIndex * 30}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden" aria-hidden>
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-90 transform scale-110 group-hover:scale-125 transition-transform duration-500" />
                          <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <span className="font-display text-lg font-bold text-white drop-shadow">{member.name[0]}</span>
                          </div>
                          <span
                            className={cn(
                              "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card",
                              member.online ? "bg-green-400 after:content-[''] after:absolute after:inset-0 after:rounded-full after:animate-ping" : "bg-muted-foreground"
                            )}
                          />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Join Staff CTA */}
          <div className="mt-20 glass rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto animate-fade-up-delay-2">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              {t("admins.cta.title")}
            </h3>
            <p className="text-muted-foreground mb-6">{t("admins.cta.description")}</p>
            <GlassButton variant="primary" size="lg" asChild>
              <a href="https://discord.gg/your-discord" target="_blank" rel="noreferrer">
                {t("admins.cta.apply")}
              </a>
            </GlassButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admins;
