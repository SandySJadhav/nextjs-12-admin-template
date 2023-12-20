import React from "react";

const Checkbox = ({ id, name, onChange, value, title, ...rest }) => {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        className="w-4 h-4 text-pp bg-gray-100 rounded border-pp border"
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        checked={value}
        {...rest}
      />
      <span className="m-auto ml-1 checkbox-label text-textboxtext font-[Inter] p-2">
        {title}
      </span>
    </label>
  );
};

export default Checkbox;
