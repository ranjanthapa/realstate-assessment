import { removeFromFavourite } from "../api/properties";
import type { favouriteCardProps } from "../types/property.type";

export default function FavouriteCard({ property, onRemove }: favouriteCardProps) {
  const { _id, name, description, imageURL, price, status, location } = property;

  const handleRemoveFav = async () => {
    try {
      const userString = localStorage.getItem("user");
      if (!userString) return alert("Please login first");

      await removeFromFavourite(_id); // Remove from backend
      onRemove(_id); // Update parent state to rerender
      alert("Property removed from favourites!");
    } catch (error) {
      console.error(error);
      alert("Failed to remove from favourites");
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
          onClick={handleRemoveFav}
          className="w-full mt-2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          ❤️ Remove from Fav
        </button>
      </div>
    </div>
  );
}