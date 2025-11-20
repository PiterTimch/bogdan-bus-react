import React from "react";
import { APP_ENV } from "../../env";

interface CountryCardProps {
    country: {
        code: string;
        name: string;
        image: string;
    };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    return (
        <div
            className="
                group relative rounded-2xl overflow-hidden
                shadow-xl bg-white/5 dark:bg-gray-800/50 dark:shadow-black/40
                backdrop-blur-sm
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]
                cursor-pointer
            "
        >
            <div className="relative h-72 w-full">
                {country.image && (
                    <img
                        src={`${APP_ENV.IMAGE_BASE_URL}large/${country.image}`}
                        alt={country.name}
                        className="
                            h-full w-full object-cover
                            transition-transform duration-700
                            group-hover:scale-110
                        "
                    />
                )}

                <div
                    className="
                        absolute inset-0
                        bg-gradient-to-b
                        from-black/20 via-black/40 to-black/100
                        dark:from-black/10 dark:via-black/30 dark:to-black/80
                        opacity-70 group-hover:opacity-50
                        transition duration-700
                        group-hover:scale-110
                    "
                />

                <h3
                    className="
                        absolute bottom-5 left-5
                        text-2xl font-bold text-white
                        drop-shadow-xl tracking-wide
                    "
                >
                    {country.name}
                </h3>
            </div>

            <div className="p-5 flex justify-end">
                <button
                    className="
                        px-5 py-2.5 rounded-lg text-sm font-semibold
                        bg-blue-600 text-white
                        dark:bg-blue-500
                        shadow-md
                        transition-all duration-300
                        hover:bg-blue-700 dark:hover:bg-blue-600
                        hover:shadow-xl
                        active:scale-95
                    "
                >
                    Детальніше
                </button>
            </div>
        </div>
    );
};

export default CountryCard;
