export default function LobbyPlayerItem(props) {
  return (
    <article className="grid justify-center text-center">
      <img
        className="mask mask-circle w-20"
        src="https://api.lorem.space/image/shoes?w=160&h=160"
        alt="Avatar"
      />

      <h4 className="text-lg font-bold">{props.name}</h4>
    </article>
  );
}
