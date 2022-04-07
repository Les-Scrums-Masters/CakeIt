export default function BakerInfo(props) {
  return (
    <article className="rounded-lg bg-primary p-5 flex flex-row align-center items-center gap-3">

      <img
          className="mask mask-circle w-20"
          src="https://api.lorem.space/image/shoes?w=160&h=160"
          alt="Avatar"
        />

      <div className="grow flex flex-col text-white">
          <h6 className="font-light">{props.date}</h6>
          <h2 className="font-xl">{props.name}</h2>
      </div>
  
    </article>
  );
}
