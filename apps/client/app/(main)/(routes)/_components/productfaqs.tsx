import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Productfaqs = ({ q, a }: ProductfaqsProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{q}</AccordionTrigger>
        <AccordionContent>{a}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Productfaqs;
