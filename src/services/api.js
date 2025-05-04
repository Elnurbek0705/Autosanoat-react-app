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

export const registerUser = async (userData) => {
   try {
     const res = await fetch(`${API_URL}/users`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(userData),
     });
 
     if (!res.ok) throw new Error("Registration failed");
     return await res.json();
   } catch (error) {
     console.error(error);
     return null;
   }
 };
 
 export const loginUser = async ({ email, password }) => {
   try {
     const res = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
     const users = await res.json();
 
     if (users.length === 0) throw new Error("User not found");
     return users[0]; // birinchi topilgan foydalanuvchi
   } catch (error) {
     console.error(error);
     return null;
   }
 };