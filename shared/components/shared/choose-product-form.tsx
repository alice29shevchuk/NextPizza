import React from "react";
import { cn } from "@/shared/lib/utils";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
interface Props {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
}
export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  name,
  onClickAdd,
  className,
}) => {
  const textDetails = "30 см, традиционное тесто 30";
  const totalPrice = 350;
  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-0 top-0 transition-all z-10 duration-300 w-[400px] h-[400px] rounded-full bg-transparent"
        ></img>
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1"></Title>
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};
