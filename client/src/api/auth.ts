import type { LoginPayloadT, SignUpDataType } from "../types/auth.type";

export const signUpUser = async (data: SignUpDataType) => {
  const response = await fetch("http://localhost:5000/api/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }

  return response.json();
};

export async function loginUser(payload: LoginPayloadT) {
  const URL = "http://localhost:5000/api/auth/login";
  const res = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok || data.status !== "success") {
    throw new Error(data.message || "Login failed");
  }

  return data;
}
