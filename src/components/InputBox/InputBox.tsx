import "./InputBox.scss";

const InputBox: React.FC<InputBoxTypes> = ({ name, type = "text", value, handleChange, label, required = false }) => {
    return (
        <label className="flex flex-col">
            {label && label}
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
            />
        </label>
    )
}

export default InputBox

export interface InputBoxTypes {
    name: string;
    type?: string;
    value: string;
    handleChange: React.Dispatch<any>,
    label?: string;
    required?: boolean;
}