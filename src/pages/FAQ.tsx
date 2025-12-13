import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I join the server?",
    answer:
      "Open Minecraft Java or Bedrock Edition, go to Multiplayer, and add our server address: bytemc.uz. Make sure you're using a supported version.",
  },
  {
    question: "What Minecraft versions are supported?",
    answer:
      "We support Minecraft Java Edition 1.8 - 1.20+ and Bedrock Edition. The recommended version is 1.20 for the best experience.",
  },
  {
    question: "How do I purchase a rank?",
    answer:
      "Visit our Prices page and select the rank you want. You can pay using various methods including Payme, Click, and Uzcard.",
  },
  {
    question: "Can I transfer my rank to another account?",
    answer:
      "Rank transfers are handled on a case-by-case basis. Contact our support team through Discord for assistance.",
  },
  {
    question: "What happens if I get banned?",
    answer:
      "If you believe your ban was unjust, you can appeal through our Discord server. All appeals are reviewed by senior staff.",
  },
  {
    question: "Are there any rules I need to follow?",
    answer:
      "Yes! We have server rules to ensure fair play and a positive experience. No hacking, no spamming, be respectful. Check /rules in-game for the full list.",
  },
  {
    question: "How can I become a staff member?",
    answer:
      "Staff applications open periodically. Follow our Discord announcements for application periods. We look for active, helpful community members.",
  },
  {
    question: "Is the server online 24/7?",
    answer:
      "Yes! Our servers are hosted on dedicated infrastructure with 99.9% uptime. Scheduled maintenance is announced in advance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Payme, Click, Uzcard, and international payment methods. All transactions are secure.",
  },
  {
    question: "How do I report a player?",
    answer:
      "Use /report in-game or contact staff through Discord with evidence (screenshots/videos) of the violation.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              Got Questions?
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about ByteMC. Can't find what you're
              looking for? Join our Discord!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="font-display font-bold text-left hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
