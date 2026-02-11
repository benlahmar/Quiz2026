import { Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  // Initialisation du client avec la nouvelle syntaxe
  private ai = new GoogleGenAI({
    apiKey: "*******"
  });

  async getAiExplanation(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      // La réponse est directement accessible via .text
      return response.text || "Aucune réponse générée.";
    } catch (error) {
      console.error("Erreur avec Gemini 3:", error);
      return "Erreur lors de la communication avec l'IA.";
    }
  }
}