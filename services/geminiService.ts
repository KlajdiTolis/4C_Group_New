import { GoogleGenAI, Chat } from "@google/genai";
import { HOTELS } from "../constants";

// Initialize the API client
// CRITICAL: We assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Auron", the premier AI Concierge for the 4C Group Hotels in Albania.
Your tone is sophisticated, welcoming, and helpful.
You represent three specific properties:
1. Green Coast Resort (Palasa, Riviera) - Luxury, villas, beach.
2. Valamar Durrës (Durrës) - Coastal, family-friendly, historic access.
3. The Museum Hotel (Tirana) - City center, culture, business.

You speak both English and Albanian fluently. If a user asks in Albanian, reply in Albanian. If in English, reply in English.

Key Responsibilities:
- Answer questions about hotel amenities, locations, and vibes based on the provided names.
- Recommend the best hotel based on user preference.
- Provide general travel advice for Albania (currency is Lek, Mediterranean climate, etc.).
- Keep answers concise (under 100 words) unless asked for details.
- If asked about prices, give the 'starting from' prices provided in your knowledge base but advise checking the booking engine for real-time rates.

Data:
${JSON.stringify(HOTELS)}
`;

let chatSession: Chat | null = null;

export const getConciergeChat = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToConcierge = async (message: string): Promise<string> => {
  try {
    const chat = getConciergeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, but I am momentarily unable to access my records. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the concierge service right now. Please try again later.";
  }
};
