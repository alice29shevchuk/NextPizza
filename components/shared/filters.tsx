"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";
interface Props {
  className?: string;
}
interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}
interface QueryFilters extends PriceProps{
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters,string>;
  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
  const router = useRouter();
  const[sizes,{toggle: toggleSizes}] = useSet<string>(new Set(searchParams.get('sizes') ? searchParams.get('sizes')?.split(','):[]));
  const[pizzaTypes,{toggle: togglePizzaTypes}] = useSet<string>(new Set(searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(','):[]));

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...prices, [name]: value });
  };

  React.useEffect(()=>{
    const filters={
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      selectedIngredients: Array.from(selectedIngredients),
    }
    const query=  qs.stringify(filters,{
      arrayFormat: 'comma',
    });
    router.push(`?${query}`,{
      scroll:false,
    });
  },[prices,pizzaTypes,sizes,ingredients,selectedIngredients,router])
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold"></Title>


      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mt-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          {text:'Тонкое', value: '1'},
          {text:'Традиционное', value: '2'},
        ]}
      ></CheckboxFiltersGroup>


      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mt-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          {text:'20 см', value: '20'},
          {text:'30 см', value: '30'},
          {text:'40 см', value: '40'}
        ]}
      ></CheckboxFiltersGroup>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цены от и до: </p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={800}
            value={String(prices.priceFrom)}
            onChange={(e)=>{updatePrice('priceFrom', Number(e.target.value))}}
          ></Input>
          <Input
            type="number"
            min={100}
            max={800}
            placeholder="800"
            value={String(prices.priceTo)}
            onChange={(e)=>{updatePrice('priceTo', Number(e.target.value))}}
          ></Input>
        </div>

        <RangeSlider
          min={0}
          max={800}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 800]}
          onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
        ></RangeSlider>
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      ></CheckboxFiltersGroup>
    </div>
  );
};
