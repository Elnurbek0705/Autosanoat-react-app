import React, { createContext, useContext, useEffect, useState } from "react";
import { getCars } from "../services/api";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();
      setCars(data);
    };
    fetchData();
  }, []);
    // localStorage'dan selectedModelni olish
    const [selectedModel, setSelectedModel] = useState(() => {
      const savedModel = localStorage.getItem("selectedModel");
      return savedModel ? JSON.parse(savedModel) : null; // agar mavjud bo'lsa, o'qib olamiz
    });
  
    // selectedModel o'zgarganda uni localStorage'ga saqlash
    useEffect(() => {
      if (selectedModel) {
        localStorage.setItem("selectedModel", JSON.stringify(selectedModel)); // JSON formatida saqlaymiz
      }
    }, [selectedModel]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const updateUser = async (newUserData) => {
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } else {
        throw new Error("User ma'lumotlarini yangilashda xatolik!");
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <DataContext.Provider value={{ cars, user, selectedModel, setSelectedModel, updateUser }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
