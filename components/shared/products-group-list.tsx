"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "@/components/shared/product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(`Element with category ${categoryId} is intersecting.`);
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-bold"></Title>
      <div className={cn("grid", "grid-cols-3", "gap-[50px]", listClassName)}>
        {items.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};
