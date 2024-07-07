import SectionContainer from "@/components/ui/sectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTIONS = [
  {
    label: "What hours is teleios dome open?",
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
  },
  {
    label: "What are the closest tube and train stations?",
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
  },
  {
    label: "Is parking available?",
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
  },
  {
    label: "Do I need to book / can I walk-in and race?",
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
  },
];
const FAQ = () => {
  return (
    <section>
      <SectionContainer title="faq's">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="section-header">
            frequently asked<span className="block">questions</span>
          </p>
          <Accordion
            type="single"
            collapsible
            defaultValue={QUESTIONS[0].label}
          >
            {QUESTIONS.map((question) => (
              <AccordionItem key={question.label} value={question.label}>
                <AccordionTrigger>{question.label}</AccordionTrigger>
                <AccordionContent>{question.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContainer>
    </section>
  );
};

export default FAQ;
