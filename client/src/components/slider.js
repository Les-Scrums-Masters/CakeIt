import { useState } from "react";

export default function Slider(props) {
  const [value, setValue] = useState(props.initialValue ?? 0);

  let suffix = props.suffix ?? "";

  return (
    <div className="flex flex-row items-center py-5 align-middle">
      <p>{props.caption}</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={value}
        class="range grow"
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange(value);
        }}
      />
      <p>{value + suffix}</p>
    </div>
  );
}
