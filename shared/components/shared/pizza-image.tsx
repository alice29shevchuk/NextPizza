import React from 'react';
import { cn } from '@/shared/lib/utils';
interface Props{
    imageUrl: string;
    size: 20 | 30 | 40;
    className?:string;
}
export const PizzaImage: React.FC<Props> = ({imageUrl, size, className})=> {
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-full',className)}>
        <img 
            src={imageUrl} 
            alt='logo'
            className={cn('relative left-0 top-0 transition-all z-10 duration-300 rounded-full bg-transparent',{
                'w-[300px] h-[300px]':size===20,
                'w-[400px] h-[400px]':size===30,
                'w-[500px] h-[500px]':size===40,
            })}>
        </img>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]'></div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]'></div>
    </div>
  )
}