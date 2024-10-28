import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";

/** Роуты меню */
const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/cards" },
    { name: "Privacy", path: "/privacy" },
];

/**
 * Компонент Шапка.
 * @returns {JSX.Element} Элемент header.
 */
const Header = () => {
    // Состояние для показа/скрытия модалки для входа
    const [isOpenSignIn, setOpenSignIn] = useState(false);
    const [isOpenSignUp, setOpenSignUp] = useState(false);

    // Получаем информацию из адресной строки
    const location = useLocation();

    /**
     * Определяет, активна ли ссылка.
     * @param {string} path - Путь ссылки.
     * @returns {boolean} ссылка активна или нет.
     */
    const isActiveLink = (path) => {
        return (
            location?.pathname === path ||
            (path === "/cards" && location?.pathname?.startsWith("/cards"))
        );
    };

    return (
        <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-2">
                <div className="flex justify-between h-16">
                    <nav className="flex justify-between">
                        <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                            {navItems?.length > 0 &&
                                navItems?.map((item) => {
                                    return (
                                        <NavLink
                                            to={item?.path}
                                            key={item?.path}
                                            className={`text-zinc-800 inline-flex items-center px-1 pt-1 text-sm ${isActiveLink(item?.path)
                                                    ? "text-indigo-500 border-b-2 border-indigo-500"
                                                    : "hover:text-indigo-500"
                                                }`}
                                        >
                                            {item?.name}
                                        </NavLink>
                                    );
                                })}
                        </div>
                    </nav>
                    <NavLink to="/" className="flex-shrink-0 flex items-center">
                        <img className="w-36 object-contain" src="../../../assets/header/logo.svg" alt="Logo" />
                    </NavLink>

                    <div id="buttons-wrapper" className="inline-flex items-center">
                        <button
                            type="button"
                            onClick={() => setOpenSignIn(true)}
                            className="border-2 text-indigo-500 border-indigo-500 font-medium py-2 px-4 rounded"
                        >
                            Sign in
                        </button>

                        <button
                            type="button"
                            onClick={() => setOpenSignUp(true)}
                            className="ml-3 border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded"
                        >
                            Sign up
                        </button>
                    </div>

                    {isOpenSignUp && (
                        <Modal
                            onClose={() => setOpenSignUp(false)}
                            title="Регистрация в приложение"
                            isOpen={isOpenSignUp}
                        >
                            <form action="#">
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label htmlFor="full_name">Your login</label>
                                        <input
                                            type="text"
                                            name="login"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            defaultValue=""
                                            placeholder="email@domain.com"
                                        />
                                    </div>

                                    <div className="mb-4 flex justify-end">
                                        <button className="border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Modal>
                    )}

                    {isOpenSignIn && (
                        <Modal
                            onClose={() => setOpenSignIn(false)}
                            title="Вход в приложение"
                            isOpen={isOpenSignIn}
                        >
                            <form action="#">
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label htmlFor="full_name">Your login</label>
                                        <input
                                            type="text"
                                            name="login"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            defaultValue=""
                                            placeholder="email@domain.com"
                                        />
                                    </div>

                                    <div className="mb-4 flex justify-end">
                                        <button className="border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Modal>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header";

export default Header;