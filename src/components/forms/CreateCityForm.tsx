import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateCityMutation } from "../../services/cityService.ts";
import { useGetCountriesQuery } from "../../services/countryService.ts";
import type { ICountryItem } from "../../types/location/ICountryItem.ts";
import InputField from "../inputs/InputField.tsx";
import FileUploadField from "../inputs/FileUploadField.tsx";
import BaseButton from "../inputs/BaseButton.tsx";
import SelectField from "../inputs/SelectField.tsx";
import { Editor } from "@tinymce/tinymce-react";
import type {ICityCreate} from "../../types/location/ICityCreate.ts";
import {APP_ENV} from "../../env";

const CreateCityForm: React.FC = () => {
    const navigate = useNavigate();
    const [createCity, { isLoading }] = useCreateCityMutation();
    const { data: countries = [] } = useGetCountriesQuery();

    const [formValues, setFormValues] = useState<ICityCreate>({
        name: "",
        slug: "",
        image: null,
        countryId: 0,
        population: undefined,
        timezone: "",
        description: "",
        mainAirportCode: "",
        avgMealPrice: undefined,
        avgHotelPrice: undefined,
        hasRecreationalWater: false,
    });

    const [file, setFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string | undefined>(undefined);
    const [formError, setFormError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues((prev) => ({
            ...prev,
            countryId: Number(e.target.value),
        }));
    };

    const handleDescriptionChange = (content: string) => {
        setFormValues((prev) => ({ ...prev, description: content }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError(null);
        setFieldErrors({});

        if (!file) {
            setFileError("Головне зображення обов'язкове");
            return;
        }

        try {
            await createCity({ ...formValues, image: file }).unwrap();
            navigate("/cities");
        } catch (err: any) {
            setFormError(err?.data?.message || "Помилка створення міста");
        }
    };

    const countryOptions = countries.map((c: ICountryItem) => ({
        value: c.id || c.slug,
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={`${APP_ENV.IMAGE_BASE_URL}large/${c.image}`}
                    alt={c.name}
                    className="w-6 h-4 object-cover rounded-sm"
                />
                <span>{c.name}</span>
            </div>
        ),
    }));

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                    label="Назва міста"
                    name="name"
                    placeholder="Kyiv"
                    value={formValues.name}
                    onChange={handleChange}
                    error={fieldErrors.name}
                />
                <InputField
                    label="Slug"
                    name="slug"
                    placeholder="kyiv"
                    value={formValues.slug}
                    onChange={handleChange}
                    error={fieldErrors.slug}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                    label="Населення"
                    name="population"
                    placeholder="3000000"
                    value={formValues.population?.toString() || ""}
                    onChange={handleChange}
                    error={fieldErrors.population}
                />
                <InputField
                    label="Часовий пояс"
                    name="timezone"
                    placeholder="Belgium"
                    value={formValues.timezone}
                    onChange={handleChange}
                    error={fieldErrors.timezone}
                />
            </div>

            <SelectField
                label="Країна"
                name="countryId"
                options={countryOptions.map((c) => ({ value: c.value, label: c.label }))}
                value={formValues.countryId}
                onChange={handleSelectChange}
            />

            <FileUploadField
                label="Головне зображення"
                name="image"
                file={file}
                setFile={setFile}
                error={fileError}
                setError={setFileError}
                accept="image/*"
            />

            <div>
                <label className="block mb-2 font-medium">Опис міста</label>
                <Editor
                    apiKey={APP_ENV.APP_TINYMCE_KEY}
                    value={formValues.description}
                    init={{
                        height: 300,
                        menubar: false,
                        plugins: ["link image code lists table"],
                        toolbar:
                            "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image | code",
                    }}
                    onEditorChange={handleDescriptionChange}
                />
            </div>

            {formError && <p className="text-red-500 text-sm">{formError}</p>}

            <BaseButton
                type="submit"
                className="w-full rounded-xl border border-blue-300 font-medium py-2"
            >
                {isLoading ? "Створення..." : "Створити місто"}
            </BaseButton>
        </form>
    );
};

export default CreateCityForm;
