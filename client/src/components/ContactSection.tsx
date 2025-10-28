import { Mail } from "lucide-react";
import type { ContactInfo } from "@shared/schema";

interface ContactSectionProps {
  contact: ContactInfo;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="py-20 px-8 bg-accent/30">
      <div className="mx-auto max-w-2xl text-center">
        {/* Section Heading */}
        <h2 className="mb-6 font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground" data-testid="heading-contact">
          Connect With Us
        </h2>

        <p className="mb-8 text-lg text-muted-foreground font-sans">
          For inquiries about this exceptional lakefront property
        </p>

        {/* Email Display */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Mail className="h-6 w-6 text-muted-foreground" />
          <a
            href={`mailto:${contact.email}`}
            className="font-sans text-2xl md:text-3xl font-light text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
            data-testid="link-email"
          >
            {contact.email}
          </a>
        </div>

        <p className="text-sm text-muted-foreground font-sans">
          {contact.address}
        </p>
      </div>
    </section>
  );
}
