/**
 * API Loader
 * Lädt JSON-Daten aus dem /data Ordner
 * Future: Backend-Anschluss möglich (Supabase, Firebase, etc.)
 */
const API = {
  basePath: "./", // wird zur Laufzeit ggf. angepasst (für GitHub Pages)

  loadJSON: async (path) => {
    try {
      const url = `${API.basePath}data/${path}.json`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (e) {
      console.error(`API.loadJSON("${path}") fehlgeschlagen:`, e);
      return null;
    }
  },

  // Future: Placeholder für echte API-Calls
  uploadTicket: async (file) => {
    console.warn(
      "API.uploadTicket() noch nicht implementiert. Future: Supabase/Firebase?"
    );
    return null;
  },

  uploadCV: async (file) => {
    console.warn(
      "API.uploadCV() noch nicht implementiert. Future: Supabase/Firebase?"
    );
    return null;
  },

  saveAttendance: async (entry) => {
    console.warn(
      "API.saveAttendance() noch nicht implementiert. Future Backend?"
    );
    return null;
  },

  submitSurvey: async (surveyId, answers) => {
    console.warn(
      "API.submitSurvey() noch nicht implementiert. Future Backend?"
    );
    return null;
  },
};
