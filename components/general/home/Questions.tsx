import React from 'react'
import Heading from '../../ui/Heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import questions from "@/components/json/questions.json"
import { BluredPage } from '../../ui/BluredPage';

export default function Questions() {
  return (
    <section className='flex flex-col items-center responsive gap-8'>
        <BluredPage />
        <Heading size='4xl'>Sık Sorulan Sorular</Heading>
        <div className='w-full'>
            <Accordion type='single' collapsible>
                {questions.map((item, key) => (
                    <AccordionItem key={key} value={key.toString()}>
                        <AccordionTrigger>
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  )
}
