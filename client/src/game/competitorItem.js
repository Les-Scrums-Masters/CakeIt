export default function CompetitorItem(props) {

    return (

        <article className="pt-4 pb-2 px-5 flex flex-row align-center items-center gap-3">
            
            <img
                className="mask mask-circle w-8"
                src="https://api.lorem.space/image/shoes?w=160&h=160"
                alt="Avatar"
            />

            <div className="grow flex flex-col">
                <p className="align-text-bottom">
                    <span className="text-md font-bold text-error">{props.name+" "}</span> 
                    <span className="text-sm font-light italic text-gray-400">{props.status}</span>
                </p>
                <p className="font-light text-sm">{"Prix de vente : " + props.price}</p>
                <p className="font-light text-sm">{"Trésorerie : " + props.money}</p>
            </div>
        </article>

    );

}