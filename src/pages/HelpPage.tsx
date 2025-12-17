import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  BookOpen,
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I access the practice content?',
    answer: 'You have full access to all available practice content including listening, reading, writing, speaking modules, and practice tests. Navigate to Course Materials to start learning.',
  },
  {
    question: 'Can I track my progress across different tests?',
    answer: 'Yes! Your progress is automatically tracked as you complete tasks. You can view your overall progress on the dashboard and detailed statistics for each skill area.',
  },
  {
    question: 'How accurate are the practice tests?',
    answer: 'Our practice tests are designed to closely mirror the actual IELTS and TOEIC exam formats. They should be used as preparation tools, and actual exam results may vary.',
  },
  {
    question: 'Can I retake completed tests?',
    answer: 'Absolutely! You can retake any test as many times as you want. Your best scores and most recent attempts are both tracked for reference.',
  },
  {
    question: 'How do I get feedback on my responses?',
    answer: 'You can self-assess using the provided band descriptors, model answers, and detailed explanations included with each question. These resources help you understand the correct approaches and improve your skills.',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Currently, Quippy Test Prep is available as a responsive web application that works great on mobile browsers. A dedicated mobile app is in development.',
  },
];

const HelpPage = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="h-16 w-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-glow">
          <HelpCircle className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">How can we help?</h1>
        <p className="text-muted-foreground">
          Find answers to common questions or get in touch with our support team
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        <QuickLinkCard 
          icon={BookOpen}
          title="Documentation"
          description="Read our guides and tutorials"
        />
        <QuickLinkCard 
          icon={MessageCircle}
          title="Live Chat"
          description="Chat with our support team"
        />
        <QuickLinkCard 
          icon={Mail}
          title="Email Support"
          description="support@quippy-lab.com"
        />
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="h-6 w-1 gradient-bg rounded-full" />
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-medium text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still need help? */}
        <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help you succeed
          </p>
          <Button variant="gradient">Contact Support</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

interface QuickLinkCardProps {
  icon: typeof HelpCircle;
  title: string;
  description: string;
}

const QuickLinkCard = ({ icon: Icon, title, description }: QuickLinkCardProps) => {
  return (
    <button className="group p-6 bg-card rounded-xl border border-border card-hover text-left w-full">
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </button>
  );
};

export default HelpPage;
