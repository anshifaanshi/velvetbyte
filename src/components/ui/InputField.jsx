import React, { useState } from "react";

const FloatingInput = ({
  label,
  value: controlledValue,
  onChange,
  type = "text",
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState("");

  // Determine if component is controlled
  const isControlled = controlledValue !== undefined && onChange;

  // Value to use (controlled or uncontrolled)
  const value = isControlled ? controlledValue : uncontrolledValue;

  // Handle change
  const handleChange = (e) => {
    if (isControlled) {
      onChange(e);
    } else {
      setUncontrolledValue(e.target.value);
    }
  };

  // Shrink label if input is focused or has value
  const shrinkLabel = isFocused || value?.length > 0;

  // Generate unique id if not provided
  const inputId = id || `floating-input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="relative w-full">
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full text-xl md:text-xl border-b-2 border-gray-300 bg-transparent outline-none py-3"
        {...props}
      />
      <label
        htmlFor={inputId}
        className={`absolute left-0 text-gray-400 pointer-events-none transition-all duration-300 ${
          shrinkLabel ? "-top-6 text-sm text-black" : "top-3 text-lg"
        }`}
      >
        {label}
      </label>
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full bg-primary transform transition-transform duration-300 ease-in-out ${
          shrinkLabel ? "scale-x-100" : "scale-x-0"
        } origin-left`}
      ></span>
    </div>
  );
};

export default FloatingInput;
