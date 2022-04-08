export default function Slider(props) {
  let suffix = props.suffix ?? "";

  return (
    <div className="grid gap-1 py-5">
      <div className="grid grid-cols-2 items-center align-middle">
        <p className="font-bold text-neutral">{props.caption}</p>
        <p className="text-right">{props.value + suffix}</p>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        className="range-success range grow"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
