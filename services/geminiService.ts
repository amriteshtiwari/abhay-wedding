
import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is missing");
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Uses Gemini to generate a "Royal Look" by editing the user's uploaded image.
 * It transforms their clothes into high-end Indian wedding attire.
 */
export const generateRoyalLook = async (base64Image: string, genderPreference: 'masculine' | 'feminine' | 'neutral'): Promise<string> => {
  const ai = getClient();
  
  // Strip prefix
  const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");

  const attireType = genderPreference === 'feminine' 
    ? 'a heavy Banarasi Silk Lehenga with intricate gold zari work and a royal dupatta' 
    : genderPreference === 'masculine'
    ? 'a regal Zardosi Sherwani with a silk stole and a traditional Safa (turban)'
    : 'a premium Indo-Western silk ensemble with ethnic embroidery';

  const prompt = `
    This is a photo of a wedding guest. Please generate a new image where you:
    1. KEEP the person's exact face, expression, and physical identity.
    2. CHANGE their outfit to ${attireType} suitable for a royal wedding in Varanasi.
    3. The outfit should look like high-end couture (Sabyasachi/Manish Malhotra style).
    4. PLACE them in a blurred, elegant background of a royal Indian palace courtyard with marigold decorations.
    5. Ensure the lighting is warm and festive.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: base64Data
            }
          },
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4"
        }
      }
    });

    // Find the image part in candidates
    const candidate = response.candidates?.[0];
    if (!candidate) throw new Error("No response from AI");

    for (const part of candidate.content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }

    throw new Error("AI did not return an image part.");
  } catch (error) {
    console.error("Error generating royal look:", error);
    throw error;
  }
};
