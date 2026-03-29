import { useEffect, useState } from "react";
import { getAllProperties } from "../api/properties";
import type { Property } from "../types/property.type";
import PropertyCard from "./PropertyCard";

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [propertiesLoading, setPropertiesLoading] = useState(false);

  useEffect(() => {
    async function loadProperties() {
      try {
        setPropertiesLoading(true)

        const result = await getAllProperties();
        setProperties(result);
      } catch (error) {
        console.error(error);
      } finally {
        setPropertiesLoading(false)
      }
    }
    console.log(properties);

    loadProperties();
  }, []);

  if (propertiesLoading) {
    return <h1 className="p-6 text-xl">Loading...</h1>;
  }

  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <PropertyCard
            key={p._id}
            property={p}
          />
        ))}
      </div>
    </div>
  );
}