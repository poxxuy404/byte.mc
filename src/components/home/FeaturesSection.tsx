import { Swords, Castle, Users, Zap, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "BoxPVP",
    description: "Intense player vs player combat with unique kits and rewards.",
  },
  {
    icon: Castle,
    title: "Survival",
    description: "Classic survival experience with custom plugins and events.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of players and make new friends.",
  },
  {
    icon: Zap,
    title: "Low Latency",
    description: "Optimized servers for smooth gameplay experience.",
  },
  {
    icon: Award,
    title: "Ranking System",
    description: "Climb the ranks and unlock exclusive perks.",
  },
  {
    icon: HeartHandshake,
    title: "Fair Play",
    description: "Anti-cheat systems to ensure fair competition.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">ByteMC</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide the best Minecraft experience with premium features and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow))] hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
