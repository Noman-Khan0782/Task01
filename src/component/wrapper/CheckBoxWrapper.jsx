import React from "react";

export default function CheckBoxWrapper({ customClases, children }) {
  return (
    <div
      className={`w-[95%] py-2 pl-3 bg-slate-200 flex justify-start items-center ${customClases}`}
    >
      {children}
    </div>
  );
}
