const API_URL = "http://localhost:5000";

export const getCars = async () => {
  try {
    const response = await fetch(`${API_URL}/cars`);
    if (!response.ok) {
      throw new Error("Ma'lumotlarni yuklashda xatolik!");
    }
    return await response.json();
  } catch (error) {
    console.error("Xatolik:", error);
    return [];
  }
};
