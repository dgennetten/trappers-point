import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get property data
  app.get("/api/property", async (req, res) => {
    try {
      const propertyData = await storage.getPropertyData();
      res.json(propertyData);
    } catch (error) {
      console.error("Error fetching property data:", error);
      res.status(500).json({ error: "Failed to fetch property data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
