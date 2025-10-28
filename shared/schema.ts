import { z } from "zod";

// Property specification data
export const propertySpecSchema = z.object({
  squareFootage: z.number(),
  lotSize: z.string(),
  monthlyUtilities: z.number(),
  annualTaxes: z.number(),
  schoolDistrict: z.string(),
  estimatedValue: z.number(),
});

export type PropertySpec = z.infer<typeof propertySpecSchema>;

// Photo gallery item
export const photoSchema = z.object({
  id: z.string(),
  url: z.string(),
  alt: z.string(),
  category: z.enum(["interior", "exterior", "lake"]),
});

export type Photo = z.infer<typeof photoSchema>;

// Hero slideshow image
export const heroImageSchema = z.object({
  id: z.string(),
  url: z.string(),
  alt: z.string(),
});

export type HeroImage = z.infer<typeof heroImageSchema>;

// Property highlights for hero section
export const propertyHighlightsSchema = z.object({
  acreage: z.string(),
  architecture: z.string(),
  fireplaces: z.number(),
  customDoors: z.string(),
  horseFeatures: z.string(),
  airportDistance: z.string(),
  foothillsDistance: z.string(),
  privacy: z.string(),
  waterRights: z.string(),
});

export type PropertyHighlights = z.infer<typeof propertyHighlightsSchema>;

// Contact information
export const contactInfoSchema = z.object({
  email: z.string().email(),
  address: z.string(),
});

export type ContactInfo = z.infer<typeof contactInfoSchema>;

// Complete property data
export const propertyDataSchema = z.object({
  heroImages: z.array(heroImageSchema),
  highlights: propertyHighlightsSchema,
  specs: propertySpecSchema,
  photos: z.array(photoSchema),
  contact: contactInfoSchema,
});

export type PropertyData = z.infer<typeof propertyDataSchema>;
