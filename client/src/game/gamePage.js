import BakerInfo from "./bakerInfo";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import ValueDisplay from "./valueDisplay";

export default function GamePage(props) {
  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row">
      <NewsList />

      <div className="grow flex flex-col gap-5">
        <BakerInfo date="dimanche 28 janvier" name="Eren" money={20393}/>

        <div className="flex w-full flex-col rounded-xl border-2 bg-white border-success p-8 gap-5 h-full">
          <h1 className="font-bold text-4xl text-success">Action</h1>

          <div className="flex flex-row text-success">
            <ValueDisplay value="2240" legend="gateaux en rayon" />
            <ValueDisplay value="10.3 €" legend="prix de vente" />
          </div>

          <p>...</p>
        </div>
      </div>

      <CompetitorsList />
    </div>
  );
}
