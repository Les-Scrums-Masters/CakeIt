import Chart from "../charts/chart";
import ValueDisplay from "./valueDisplay";

export default function GameContent(props) {

    return (
        <div className="flex h-full w-full flex-col gap-5 rounded-xl border-2 border-success bg-white p-8">
          <h1 className="text-4xl font-bold text-success">Action</h1>

          <div className="flex flex-row text-success">
            <ValueDisplay value="2240" legend="gateaux en rayon" />
            <ValueDisplay value="10.3 €" legend="prix de vente" />
          </div>

          <p>
            <Chart /*data={myRoundData}*/ />
          </p>
        </div>
    )

}