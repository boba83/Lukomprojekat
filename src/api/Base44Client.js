// Simple mock client for local development (no real Base44 backend)
export const base44 = {
  entities: {
    ContactMessage: {
      create: async (data) => {
        console.log('Kontakt poruka poslata:', data);
        return { success: true };
      }
    }
  },
  auth: {
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {}
  }
};
