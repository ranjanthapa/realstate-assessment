export type Property = {
  _id: string;
  name: string;
  description: string;
  imageURL: string;
  price: number;
  status: "available" | "pending" | "sold";
  location: string;
};

export type propertycardProps = {
  property: Property;
};

export type favouriteCardProps = {
  property: Property;
  onRemove: (id: string) => void;
};
