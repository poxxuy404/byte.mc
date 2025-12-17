import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const faqKeys = [
  { questionKey: "faq.0.question", answerKey: "faq.0.answer" },
  { questionKey: "faq.1.question", answerKey: "faq.1.answer" },
  { questionKey: "faq.2.question", answerKey: "faq.2.answer" },
  { questionKey: "faq.3.question", answerKey: "faq.3.answer" },
  { questionKey: "faq.4.question", answerKey: "faq.4.answer" },
  { questionKey: "faq.5.question", answerKey: "faq.5.answer" },
  { questionKey: "faq.6.question", answerKey: "faq.6.answer" },
  { questionKey: "faq.7.question", answerKey: "faq.7.answer" },
  { questionKey: "faq.8.question", answerKey: "faq.8.answer" },
  { questionKey: "faq.9.question", answerKey: "faq.9.answer" },
];

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              {t("faq.hero.badge")}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t("faq.hero.titleStart")} <span className="text-gradient">{t("faq.hero.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("faq.hero.description")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqKeys.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="font-display font-bold text-left hover:text-primary hover:no-underline py-5">
                    {t(faq.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {t(faq.answerKey)}
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
