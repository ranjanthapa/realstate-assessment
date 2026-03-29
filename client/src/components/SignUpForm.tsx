import { useState } from "react";
import { signUpUser } from "../api/auth";
import type { SignUpDataType } from "../types/auth.type";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "buyer",
    });

    const [message, setMessage] = useState("")


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await signUpUser(formData as SignUpDataType);
            setFormData({
                name: "",
                email: "",
                password: "",
                role: "buyer",
            })
            setMessage(result.message);
        } catch (error: any) {
            setMessage(error.message)
        }
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>

            <p>{message}</p>

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Sign Up
            </button>

        </form>
    );
}