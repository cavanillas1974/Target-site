
import { GoogleGenAI } from "@google/genai";

export const sendMessageToGemini = async (message, history) => {
  // Inicialización correcta según las guías
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.parts[0].text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: "Eres un asistente virtual experto para 'Target Instalaciones POP'. Ayudas con servicios de material POP, logística y mantenimiento. Sé profesional y responde siempre en español.",
        thinkingConfig: { thinkingBudget: 32768 }
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo más tarde.";
  }
};
