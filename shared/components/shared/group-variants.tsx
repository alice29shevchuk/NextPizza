'use client'
import React from 'react';
import { cn } from '@/shared/lib/utils';
type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
}
interface Props{
    items: readonly Variant[];
    onClick?: (value: Variant['value']) => void;
    className?:string;
    value?: Variant['value'];
}
export const GroupVariants: React.FC<Props> = ({items,value, onClick, className})=> {
  return (
    <div className={cn('flex justify-between bg-[#F2F2F7] rounded-3xl p-1 select-none',className)}>
        {
            items.map((item)=>(
                <button key={item.name} onClick={()=>onClick?.(item.value)} className={cn('flexn items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
                    {
                        'bg-white shadow':item.value===value,
                        'text-gray-500 opacity-50 cursor-not-allowed':item.disabled,
                    },
                )}>{item.name}</button>
            ))
        }
    </div>
  )
}