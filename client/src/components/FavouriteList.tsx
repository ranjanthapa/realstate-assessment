import { useState, useEffect } from "react";
import FavouriteCard from "./FavouriteCard";
import { getFavourites } from "../api/properties"; // fetches all favourites
import type { Property } from "../types/property.type";

export default function FavouritesList() {
    const [favourites, setFavourites] = useState<Property[]>([]);
    useEffect(() => {
        const loadFavourites = async () => {
            try {
                const res = await getFavourites();
                setFavourites(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        loadFavourites();
    }, []);

    const handleRemove = (propertyId: string) => {
        setFavourites(prev => prev.filter(p => p._id !== propertyId));
    };

    return (
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favourites.map((property) => (
                <FavouriteCard
                    key={property._id}
                    property={property}
                    onRemove={handleRemove} 
                />
            ))}
        </div>
    );
}