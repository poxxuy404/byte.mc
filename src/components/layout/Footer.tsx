import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-gradient mb-4">
              BYTEMC.UZ
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Premium Minecraft server experience with unique gameplay modes,
              active community, and dedicated staff. Join thousands of players today.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/prices", label: "Prices" },
                { to: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">
                  Server: bytemc.uz
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Discord: discord.gg/bytemc
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Telegram: @bytemcuz
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ByteMC.uz — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
