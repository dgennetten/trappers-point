import { Card } from "@/components/ui/card";
import { Home, Ruler, DollarSign, Receipt, GraduationCap, TrendingUp } from "lucide-react";
import type { PropertySpec } from "@shared/schema";

interface PropertySpecsProps {
  specs: PropertySpec;
}

export function PropertySpecs({ specs }: PropertySpecsProps) {
  const specItems = [
    {
      icon: Home,
      label: "Square Footage",
      value: `${specs.squareFootage.toLocaleString()} sq ft`,
      testId: "spec-square-footage",
    },
    {
      icon: Ruler,
      label: "Lot Size",
      value: specs.lotSize,
      testId: "spec-lot-size",
    },
    {
      icon: DollarSign,
      label: "Monthly Utilities",
      value: `$${specs.monthlyUtilities.toLocaleString()}`,
      testId: "spec-utilities",
    },
    {
      icon: Receipt,
      label: "Annual Property Taxes",
      value: `$${specs.annualTaxes.toLocaleString()}`,
      testId: "spec-taxes",
    },
    {
      icon: GraduationCap,
      label: "School District",
      value: specs.schoolDistrict,
      testId: "spec-school",
    },
    {
      icon: TrendingUp,
      label: "Estimated Value",
      value: `$${(specs.estimatedValue / 1000000).toFixed(2)}M`,
      testId: "spec-value",
    },
  ];

  return (
    <section id="property-specs" className="py-24 px-8 bg-accent/30">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-4" data-testid="heading-specs">
            Property Specifications
          </h2>
          <p className="text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
            Comprehensive details about this exceptional lakefront estate
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.testId}
                className="p-8 hover-elevate active-elevate-2 transition-transform duration-300"
                data-testid={item.testId}
              >
                <div className="space-y-3">
                  <Icon className="h-6 w-6 text-muted-foreground" />
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2 font-sans">
                      {item.label}
                    </p>
                    <p className="text-2xl md:text-3xl font-light font-sans text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
