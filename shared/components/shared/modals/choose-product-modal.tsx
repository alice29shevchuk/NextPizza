'use client'
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category, Product } from '@prisma/client';
import { Title } from '../title';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { Dialog, DialogContent } from '../../ui/dialog';
interface Props{
    product: ProductWithRelations;
    className?:string;
}
export const ChooseProductModal: React.FC<Props> = ({product,className})=> {
   const router = useRouter();
   const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
    <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          {
            isPizzaForm ? (
              <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients}></ChoosePizzaForm>
            ):
            <ChooseProductForm imageUrl={product.imageUrl} name={product.name}></ChooseProductForm>
          }
      </DialogContent>
    </Dialog>
  )
}