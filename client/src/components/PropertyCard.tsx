import { useState, useEffect } from "react";
import { addToFavourite, removeFromFavourite } from "../api/properties";
import type { propertycardProps } from "../types/property.type";

export default function PropertyCard({ property }: propertycardProps) {
  const { _id, name, description, imageURL, price, status, location } = property;

  const [isFav, setIsFav] = useState(false);

  // Optional: Check if this property is already in favourites on mount
  useEffect(() => {
    const favsString = localStorage.getItem("favourites"); // example, or fetch from backend
    if (favsString) {
      const favs = JSON.parse(favsString);
      if (favs.includes(_id)) setIsFav(true);
    }
  }, [_id]);

  const handleToggleFav = async () => {
    try {
      const userString = localStorage.getItem("user");
      if (!userString) return alert("Please login first");

      const user = JSON.parse(userString);

      if (!isFav) {
        await addToFavourite(_id, user.id);
        setIsFav(true);
      } else {
        await removeFromFavourite(_id);
        setIsFav(false);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update favourites");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={imageURL} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">📍 {location}</p>
        <p className="font-bold text-gray-800">💰 Rs. {price.toLocaleString()}</p>

        <p
          className={`text-sm font-medium ${
            status === "available"
              ? "text-green-600"
              : status === "pending"
              ? "text-yellow-500"
              : "text-red-600"
          }`}
        >
          {status.toUpperCase()}
        </p>

        <button
          onClick={handleToggleFav}
          className={`w-full mt-2 py-2 rounded-lg transition ${
            isFav
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          {isFav ? "❤️ Remove from Fav" : "🤍 Add to Fav"}
        </button>
      </div>
    </div>
  );
}