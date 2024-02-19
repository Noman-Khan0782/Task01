import React from "react";

export default function Radio({
  name,
  label,
  id,
  value,
  check,
  customClassess,
  onChange,
}) {
  return (
    <div
      className={`w-full  flex justify-start items-center gap-3 ${customClassess}`}
    >
      <input
        name={name}
        onChange={onChange}
        checked={check}
        id={id}
        value={value}
        type="radio"
        className="w-[15px] h-[15px]"
      />
      <label htmlFor="id" className="text-[14px] capitalize">
        {label}
      </label>
    </div>
  );
}
