import Panel from "../components/panel";
import IngredientItem from "./ingredientItem";

export default function IngredientList(props) {
  let ingredients = props.ingredients ?? {};

  return (
    <Panel title="Ingrédients" color="accent">
      <div className="flex flex-col gap-3 divide-y-2 divide-accent">
        {Object.keys(ingredients).map((key, index) => {
          let ingredient = ingredients[key];

          let price = ingredient.price.values;

          let latestPrice = 0;
          if (price.length > 0) latestPrice = price[price.length - 1];

          return (
            <IngredientItem
              name={ingredient.name}
              image={key}
              price={latestPrice}
              evolution={ingredient.priceEvolution}
              key={index}
            />
          );
        })}
      </div>
    </Panel>
  );
}
