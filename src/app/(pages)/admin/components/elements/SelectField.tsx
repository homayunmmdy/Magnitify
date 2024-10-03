import React from "react";

//@ts-ignore
const SelectField = ({ id, name, label, value, onChange, options, className = "select select-primary w-full" }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} onChange={onChange} className={className}>
                {/* @ts-ignore */}
                {options.map((option) => (
                    <option key={option._id} value={option.secid}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;