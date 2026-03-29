import React, { useState } from 'react'
import { loginUser } from '../api/auth';
import type { LoginPayloadT } from '../types/auth.type';

export type LoginFormProp = {
    onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProp) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("helloooo")

        try {
            const result = await loginUser(formData as LoginPayloadT);

            // store JWT token in localStorage
            localStorage.setItem('token', result.data.jwtToken);

            // store user info separately
            localStorage.setItem('user', JSON.stringify({ name: result.data.name, role: result.data.role }));

            // call onLogin prop to update parent state
            onLogin();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Login
            </button>
        </form>
    );
}