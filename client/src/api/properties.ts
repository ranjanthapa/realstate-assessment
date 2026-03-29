import type { Property } from "../types/property.type";

export async function getAllProperties() {
  const res = await fetch("http://localhost:5000/api/properties");
  const data = await res.json();
  return data;
}

export async function addToFavourite(propertyId: string, userId: string) {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User not authenticated");

    const response = await fetch(
      `http://localhost:5000/api/favourites/${propertyId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to add to favourites");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function toggleFavourite(propertyId: string) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("User not logged in");

  const res = await fetch(
    `http://localhost:5000/api/favourites/${propertyId}`,
    {
      method: "POST", // or PUT depending on your backend
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to update favourite");
  const data = await res.json();
  return data; // return updated favourite info
}

export async function removeFromFavourite(propertyId: string) {
  const token = localStorage.getItem("token"); // get JWT from localStorage
  if (!token) throw new Error("No token found");

  const res = await fetch(
    `http://localhost:5000/api/favourites/${propertyId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to remove favourite");
  }

  return await res.json();
}

export async function getFavourites() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("User not logged in");

  const res = await fetch("http://localhost:5000/api/favourites", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch favourites");
  }

  const data = await res.json();

  console.log("data are", data);
  return data; // This will contain the array of favourite properties
}
