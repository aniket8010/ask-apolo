import { Filter } from "lucide-react";
import React from "react";

const DoctorsFilters = () => {
    const inputs = [
        {
            id: 1,
            name: "category",
            options: [{ id: 1, name: "Cardiologist" }],
        },
        {
            id: 2,
            name: "gender",
            options: [
                { id: 1, name: "Male" },
                { id: 2, name: "Female" },
            ],
        },
        {
            id: 3,
            name: "language",
            options: [
                { id: 1, name: "English" },
                { id: 2, name: "Hindi" },
            ],
        },
        {
            id: 4,
            name: "sort",
            options: [
                { id: 1, name: "Experience High-Low" },
                { id: 2, name: "Experience Low-High" },
            ],
        },
    ];
    return (
        <div className="text-sm my-2 mt-5">
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1">
                    <Filter size={12} />
                    <span>Filter</span>
                </div>
                <div className="flex items-center gap-2">
                    {inputs.map(({ name, options, id }) => (
                        <select
                            key={id}
                            name={name}
                            className="border rounded-md p-1 px-3 outline-none "
                        >
                            <option value="">Select {name.charAt(0).toUpperCase() + name.slice(1)}</option>
                            {options.map(({ id: optionId, name: optionName }) => (
                                <option key={optionId} value={optionId}>
                                    {optionName}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorsFilters;