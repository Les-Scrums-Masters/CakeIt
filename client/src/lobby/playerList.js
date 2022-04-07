import LobbyPlayerItem from "./playerItem";

export default function LobbyPlayerList(props) {

    return(

        <div className="grid grid-cols-4 gap-10">

            {props.players.map((item, index) => <LobbyPlayerItem name={item.name} key={index} />)}

        </div>

    )

}