// pages/RegisterPage.tsx
import React from "react";
import CreateCityForm from "../../../components/forms/CreateCityForm.tsx";

const CreateCityPage: React.FC = () => {
    return (
        <div className="p-5 min-h-screen flex items-center justify-center">
            <div className="max-w-[900px] w-full rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-gray-800">
                <CreateCityForm />
            </div>
        </div>
    );
};

export default CreateCityPage;
