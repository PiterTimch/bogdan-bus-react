import React from "react";

const RegisterPage: React.FC = () => {
    return (
        <div className="p-5 min-h-screen flex items-center justify-center  transition-colors">
            <div className="max-w-[900px] w-full rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-black/40 dark:bg-gray-800 bg-white transition-colors">
                <div className="grid md:grid-cols-2">

                    <div className="bg-blue-600 dark:bg-blue-700 p-10 hidden md:flex flex-col justify-center text-white">
                        <h2 className="text-3xl font-semibold mb-4">Ласкаво просимо!</h2>
                        <p className="text-lg">
                            Зареєструйтесь, щоб розпочати.
                        </p>
                    </div>

                    <div className="p-6 md:p-10 flex flex-col justify-center text-gray-900 dark:text-gray-100">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold mb-1">Реєстрація</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Введіть свої дані, щоб створити акаунт
                            </p>
                        </div>

                        <form className="space-y-5">

                            <div>
                                <label className="block mb-1 font-medium">
                                    Прізвище
                                </label>
                                <input
                                    type="text"
                                    className="
                                        w-full px-4 py-2 rounded-lg border
                                        border-gray-300 dark:border-gray-600
                                        bg-white dark:bg-gray-700
                                        text-gray-900 dark:text-gray-100
                                        focus:ring-2 focus:ring-blue-500
                                        transition
                                    "
                                    placeholder="Введіть прізвище"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">
                                    Ім’я
                                </label>
                                <input
                                    type="text"
                                    className="
                                        w-full px-4 py-2 rounded-lg border
                                        border-gray-300 dark:border-gray-600
                                        bg-white dark:bg-gray-700
                                        text-gray-900 dark:text-gray-100
                                        focus:ring-2 focus:ring-blue-500
                                        transition
                                    "
                                    placeholder="Введіть ім’я"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="
                                        w-full px-4 py-2 rounded-lg border
                                        border-gray-300 dark:border-gray-600
                                        bg-white dark:bg-gray-700
                                        text-gray-900 dark:text-gray-100
                                        focus:ring-2 focus:ring-blue-500
                                        transition
                                    "
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">
                                    Телефон
                                </label>
                                <input
                                    type="tel"
                                    className="
                                        w-full px-4 py-2 rounded-lg border
                                        border-gray-300 dark:border-gray-600
                                        bg-white dark:bg-gray-700
                                        text-gray-900 dark:text-gray-100
                                        focus:ring-2 focus:ring-blue-500
                                        transition
                                    "
                                    placeholder="+380..."
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    className="
                                        w-full px-4 py-2 rounded-lg border
                                        border-gray-300 dark:border-gray-600
                                        bg-white dark:bg-gray-700
                                        text-gray-900 dark:text-gray-100
                                        focus:ring-2 focus:ring-blue-500
                                        transition
                                    "
                                    placeholder="Введіть пароль"
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                                    w-full bg-blue-600 dark:bg-blue-700 text-white py-3
                                    rounded-lg font-semibold
                                    transition hover:bg-blue-700 dark:hover:bg-blue-800 active:scale-95
                                    shadow-md
                                "
                            >
                                Зареєструватися
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
