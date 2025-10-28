import type { PropertyData } from "@shared/schema";

export interface IStorage {
  getPropertyData(): Promise<PropertyData>;
}

export class MemStorage implements IStorage {
  private propertyData: PropertyData;

  constructor() {
    this.propertyData = {
      heroImages: [
        {
          id: "hero-1",
          url: "/attached_assets/generated_images/Lakefront_luxury_home_sunset_exterior_c8e7ee3d.png",
          alt: "Luxury lakefront home at sunset with mountain backdrop",
        },
        {
          id: "hero-2",
          url: "/attached_assets/generated_images/Luxury_home_daytime_exterior_view_e02336e0.png",
          alt: "Custom architecture lakefront estate daytime view",
        },
        {
          id: "hero-3",
          url: "/attached_assets/generated_images/Panoramic_lake_sunset_vista_47219ea4.png",
          alt: "Panoramic private lake sunset vista",
        },
        {
          id: "hero-4",
          url: "/attached_assets/generated_images/Great_room_with_lake_views_61398c2e.png",
          alt: "Great room interior with expansive lake views",
        },
        {
          id: "hero-5",
          url: "/attached_assets/generated_images/Private_lake_shoreline_peaceful_view_fea08f60.png",
          alt: "Private lakefront shoreline peaceful setting",
        },
      ],
      highlights: {
        acreage: "3+ acres",
        architecture: "High-end custom architecture",
        fireplaces: 4,
        customDoors: "Custom 4-hinge solid wood doors",
        horseFeatures: "Loafing shed and paddock for horses",
        airportDistance: "40 minutes",
        foothillsDistance: "20 minutes",
        privacy: "Close to town, yet secluded",
        waterRights: "Irrigation rights from private lake",
      },
      specs: {
        squareFootage: 5800,
        lotSize: "3.2 acres",
        monthlyUtilities: 450,
        annualTaxes: 18500,
        schoolDistrict: "Poudre School District R-1",
        estimatedValue: 3250000,
      },
      photos: [
        {
          id: "interior-1",
          url: "/attached_assets/generated_images/Luxury_living_room_with_fireplace_bd63d51c.png",
          alt: "Luxury living room with stone fireplace and vaulted ceilings",
          category: "interior",
        },
        {
          id: "interior-2",
          url: "/attached_assets/generated_images/Great_room_with_lake_views_61398c2e.png",
          alt: "Great room with floor-to-ceiling windows and lake views",
          category: "interior",
        },
        {
          id: "interior-3",
          url: "/attached_assets/generated_images/Luxury_gourmet_kitchen_interior_957040ce.png",
          alt: "Gourmet kitchen with high-end appliances and custom cabinetry",
          category: "interior",
        },
        {
          id: "exterior-1",
          url: "/attached_assets/generated_images/Luxury_home_daytime_exterior_view_e02336e0.png",
          alt: "Luxury home exterior with custom architecture",
          category: "exterior",
        },
        {
          id: "exterior-2",
          url: "/attached_assets/generated_images/Elegant_custom_entry_doors_detail_fbcdc602.png",
          alt: "Elegant custom entry doors with stone facade",
          category: "exterior",
        },
        {
          id: "exterior-3",
          url: "/attached_assets/generated_images/Horse_facilities_and_paddock_6c3ce1e5.png",
          alt: "Horse facilities with loafing shed and paddock",
          category: "exterior",
        },
        {
          id: "lake-1",
          url: "/attached_assets/generated_images/Panoramic_lake_sunset_vista_47219ea4.png",
          alt: "Panoramic lake view at golden hour sunset",
          category: "lake",
        },
        {
          id: "lake-2",
          url: "/attached_assets/generated_images/Private_lake_shoreline_peaceful_view_fea08f60.png",
          alt: "Private lake shoreline with natural Colorado landscape",
          category: "lake",
        },
        {
          id: "lake-3",
          url: "/attached_assets/generated_images/Misty_lake_morning_atmosphere_fdd18237.png",
          alt: "Misty morning atmosphere on private lake",
          category: "lake",
        },
      ],
      contact: {
        email: "trapperspoint@gennetten.com",
        address: "1234 Trappers Point, Fort Collins, CO",
      },
    };
  }

  async getPropertyData(): Promise<PropertyData> {
    return this.propertyData;
  }
}

export const storage = new MemStorage();
