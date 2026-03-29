import React, { useEffect, useState } from 'react';
import AuthModel from './AuthModel';



export default function Header() {
    const [user, setUser] = useState<{ name: string, role: string } | null>(null);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);


    const onCloseBtn = () => setShowAuthModal(false);

    useEffect(() => {
        const userString = localStorage.getItem("user");

        if (userString) {
            const parsedVal = JSON.parse(userString);
            setUser({ name: parsedVal.name, role: parsedVal.role });
        }
    }, [])

    const onLogIn = () => {
        setLoggedIn(true);
        setShowAuthModal(false);
    }


    const onLogOut = () => {
        localStorage.clear();
        setLoggedIn(false);
        setUser(null);
    }


    return (
        <>
            <div className="p-4 bg-gray-100 flex justify-between items-center">
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold'>RealEstate Dashboard</h1>

                    {user && (
                        <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.role}</p>
                        </div>
                    )}
                </div>

                {isLoggedIn ? (
                    <button
                        onClick={onLogOut}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Log out
                    </button>
                ) : (
                    <button
                        onClick={() => setShowAuthModal(true)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Log in
                    </button>
                )}
            </div>

            {/* Modal */}
            {showAuthModal && (
                <AuthModel onCloseBtn={onCloseBtn} onLogin={onLogIn} />
            )}
        </>
    );
}