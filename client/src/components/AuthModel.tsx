import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';

export type AuthModelProps = {
    onCloseBtn: () => void;
    onLogin: () => void;
}

export default function AuthModel({ onCloseBtn, onLogin }: AuthModelProps) {
    const [card, setCard] = useState('login')
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-80 shadow-lg relative">

                <button
                    onClick={onCloseBtn}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                    ✖
                </button>

                <h2 className="text-xl font-bold mb-4 text-center">RealEstate </h2>

                <div className="flex flex-col gap-3">
                    {card === 'login' ? <LoginForm onLogin={onLogin} /> : <SignupForm />}
                </div>

                <p className="text-sm text-gray-500 mt-4 text-center">
                    {card === "login" ? (
                        <>
                            Don't have an account?{" "}
                            <span
                                className="text-blue-500 font-medium cursor-pointer hover:underline"
                                onClick={() => setCard("signup")}
                            >
                                Sign up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span
                                className="text-blue-500 font-medium cursor-pointer hover:underline"
                                onClick={() => setCard("login")}
                            >
                                Login
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    )
}
