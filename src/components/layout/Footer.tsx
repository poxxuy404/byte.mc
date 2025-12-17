import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-gradient mb-4">
              BYTEMC.UZ
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", labelKey: "nav.home" },
                { to: "/about", labelKey: "nav.about" },
                { to: "/prices", labelKey: "nav.prices" },
                { to: "/faq", labelKey: "nav.faq" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              {t("footer.connect")}
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">
                  {t("footer.server")}: bytemc.uz
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  {t("footer.discord")}: discord.gg/bytemc
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  {t("footer.telegram")}: @bytemcuz
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ByteMC.uz — {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
