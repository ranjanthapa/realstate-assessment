export type SignUpDataType = {
  name: string;
  email: string;
  password: string;
  role?: "buyer" | "seller";
};

export type LoginPayloadT = {
  email: string;
  password: string;
};
