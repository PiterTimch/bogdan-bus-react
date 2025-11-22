import React, { useState } from "react";
import { useRegisterMutation } from "../../../services/accountService";

const RegisterPage: React.FC = () => {
    const [register, { isLoading }] = useRegisterMutation();

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    });

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImage(file);
        if (file) setPreview(URL.createObjectURL(file));
        else setPreview(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        try {
            await register({ ...form, image }).unwrap();
            setMessage("Реєстрація пройшла успішно!");
            setForm({ name: "", lastName: "", username: "", email: "", password: "" });
            setImage(null);
            setPreview(null);
        } catch (err) {
            setError("Не вдалося зареєструватися.");
        }
    };

    return (
        <div className="p-5 min-h-screen flex items-center justify-center">
            <div className="max-w-[900px] w-full rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-gray-800">
                <div className="grid md:grid-cols-2">
                    <div className="bg-blue-600 p-10 hidden md:flex flex-col justify-center text-white">
                        <h2 className="text-3xl font-semibold mb-4">Ласкаво просимо!</h2>
                        <p className="text-lg">Зареєструйтесь, щоб розпочати.</p>
                    </div>

                    <div className="p-6 md:p-10 flex flex-col justify-center">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold mb-1">Реєстрація</h3>
                            <p className="">
                                Введіть свої дані, щоб створити акаунт
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block mb-1 font-medium">Прізвище</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Введіть прізвище"
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Ім’я</label>
                                <input
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Введіть ім’я"
                                    className="w-full px-4 py-2 rounded-lg border  focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    value={form.username}
                                    onChange={handleChange}
                                    placeholder="Ваш нікнейм"
                                    className="w-full px-4 py-2 rounded-lg border
                                        focus:ring-2 focus:ring-blue-500
                                        transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com"
                                    className="w-full px-4 py-2 rounded-lg border
                                        focus:ring-2 focus:ring-blue-500
                                        transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Пароль</label>
                                <input
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Введіть пароль"
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Аватар</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImage}
                                    className="block w-full text-body file:mr-4 file:py-2.5 file:px-4 file:rounded-base file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                                />
                                {preview && (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="mt-3 h-32 w-full object-cover rounded border border-gray-300"
                                    />
                                )}
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {message && <p className="text-green-500 text-sm">{message}</p>}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition hover:bg-blue-700 active:scale-95 shadow-md disabled:opacity-50"
                            >
                                {isLoading ? "Реєстрація..." : "Зареєструватися"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
