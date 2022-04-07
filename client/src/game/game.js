import BakerInfo from "./bakerInfo";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import ValueDisplay from "./valueDisplay";

export default function GamePage(props) {
  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row">
      <NewsList />

      <div className="grow bg-primary">
        <BakerInfo />

        <div className="">
          <h1>Action</h1>

          <div className="">
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
