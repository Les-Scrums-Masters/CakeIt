export default function Slider(props) {
  let suffix = props.suffix ?? "";

  return (
    <div className="flex flex-row items-center py-5 align-middle">
      <p className="w-32 font-bold text-neutral">{props.caption}</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        class="range-success range grow"
        onChange={(e) => props.onChange(e.target.value)}
      />
      <p className="w-20 text-right">{props.value + suffix}</p>
    </div>
  );
}
