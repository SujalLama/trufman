import { ChangeEvent } from "react";

interface IInputProps {
    className?: string;
    type: 'text' | 'number' | 'email' | 'password' | 'search';
    name?: string;
    label?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string;
    value?: string | number;
    disabled?: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
}

export default function Input({
    className, 
    type,
    name,
    label,
    onChange,
    error,
    value,
    disabled = false,
    placeholder,
    min,
    max,
} : IInputProps) {
  return (
    <>
        {label && <label htmlFor=""></label>}
        <input 
            className={`w-full border-1 text-gray-darker 
            py-[15px] px-[20px] rounded-[5px] focus:border-primary focus:ring-primary 
            placeholder:text-black/30 ${error ? 'border-red' : 'border-gray/20'} ${className ?? ''}`}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder ?? ''}
            disabled={disabled}
            min={min}
            max={max}
        />
        {error && <span className="block text-red  text-sm mb-2">{error}</span>}
      </>
  )
}
