import React from "react";

export default function Checkbox({
  name,
  id,
  value,
  label,
  check,
  onChange,
  customClassess,
}) {
  return (
    <div
      className={`w-full  flex justify-start items-center gap-3 ${customClassess}`}
    >
      <input
        name={name}
        id={id}
        value={value}
        checked={check}
        type="checkbox"
        onChange={onChange}
        className="w-[15px] h-[15px]"
      />
      <label htmlFor="id" className="text-[14px] capitalize">
        {label}
      </label>
    </div>
  );
}
