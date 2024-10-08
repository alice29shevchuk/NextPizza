import React from "react";
import { cn } from "@/shared/lib/utils";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}
export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAddCart,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );
  console.log(items);
  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;
  const pizzaPrice = items.find(
    (item) => item.pizzaType === type && item.size === size
  )?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  const totalPrice = pizzaPrice+totalIngredientsPrice;
  const handleClickAdd=()=>{
    onClickAddCart?.();
    console.log({
      size,
      type,
      selectedIngredients: Array.from(selectedIngredients),
      totalPrice,
    });
  }
  const availablePizzas = items.filter((item)=>item.pizzaType===type);
  const availablePizzaSizes = pizzaSizes.map((item)=>({
    name: item.name,
    value: item.value,
    disabled:!availablePizzas.some((pizza)=>Number(pizza.size)===Number(item.value)),
  }));
  React.useEffect(()=>{
    const isAvailableSize = availablePizzaSizes?.find((item)=>Number(item.value)===size && !item.disabled)
    const availableSize = availablePizzaSizes?.find((item)=>!item.disabled);
    if(!isAvailableSize && availableSize){
      setSize(Number(availableSize.value) as PizzaSize);
    }
  },[type]);
  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size}></PizzaImage>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1"></Title>
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          ></GroupVariants>

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          ></GroupVariants>
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button onClick={handleClickAdd} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} грн
        </Button>
      </div>
    </div>
  );
};
