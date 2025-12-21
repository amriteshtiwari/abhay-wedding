
import { GoogleGenAI, Type } from "@google/genai";
import { OutfitSuggestion } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const suggestOutfits = async (base64Image: string): Promise<OutfitSuggestion[]> => {
  const ai = getClient();

  // Helper to strip the data URL prefix if present (though the SDK often handles this, it's safer to send raw base64 or construct the part correctly)
  const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
  
  const prompt = `
    You are an expert Indian wedding fashion stylist. 
    Analyze the person in the uploaded image (consider gender, apparent body type, and skin tone).
    Suggest 3 distinct, stylish, and culturally appropriate Indian wedding guest outfits for them.
    The suggestions should be suitable for a festive, high-end Indian wedding.
    Be specific about fabrics (e.g., Silk, Georgette, Velvet) and colors.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg', // Assuming jpeg/png, the SDK is flexible but specific is good. 
              data: base64Data
            }
          },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "Name of the outfit style (e.g. 'Floral Lehenga', 'Classic Sherwani')" },
              description: { type: Type.STRING, description: "Detailed description of the outfit components and fabric." },
              colorPalette: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "List of 2-3 matching colors for this outfit."
              },
              stylingTips: { type: Type.STRING, description: "Accessories or footwear recommendations." },
              matchReason: { type: Type.STRING, description: "Why this fits the user's features and the event." }
            },
            required: ["name", "description", "colorPalette", "stylingTips", "matchReason"]
          }
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);
      return data as OutfitSuggestion[];
    }
    return [];
  } catch (error) {
    console.error("Error generating outfit suggestions:", error);
    throw error;
  }
};
