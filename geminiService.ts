
import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = 'gemini-3-pro-preview';

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: "Eres un asistente virtual experto para la empresa 'Target Instalaciones POP'. Ayudas a los clientes a entender nuestros servicios de almacenamiento, distribución, implementación de material POP y mantenimiento. Eres profesional, servicial y conoces los 22 años de trayectoria de la empresa. Siempre responde en español.",
        thinkingConfig: { thinkingBudget: 32768 }
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
        return "Lo siento, ha habido un problema con la clave API. Por favor, intenta de nuevo.";
    }
    return "Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo más tarde.";
  }
};
