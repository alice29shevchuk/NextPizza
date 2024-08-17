import React from 'react'
import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { ShoppingCart, User,ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import Link from 'next/link';
import { SearchInput } from './search-input';
interface Props{
    className?:string;
}

export const Header: React.FC<Props> = ({className})=> {
  return (
    <header className={cn('border border-b',className)}>
        <Container className='flex items-center justify-between py-8'>
           <Link href='/'>
                <div className='flex items-center gap-4'>
                    <Image className='w-[55px] h-[55px]' src="https://pizzaday.eatery.club/storage/pizzaday/restaurant/logo/1185/ac39f6bdf5c716aec904fe503002094b.png" alt='Logo' width={35} height={35}></Image>
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Pizza</h1>
                        <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
                    </div>
                </div>
            </Link>
            
            <div className='mx-10 flex-1'>
                <SearchInput></SearchInput>
            </div>

            <div className='flex items-center gap-3'>
                <Button variant="outline" className='flex items-center gap-1'>
                    <User size={16}></User>
                    Войти
                </Button>

                <div>
                    <Button className='group relative'>
                        <b>520 грн</b>
                        <span className='h-full w-[1px] bg-white/30 mx-3'></span>
                        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='h-4 w-4 relative' strokeWidth={2}></ShoppingCart>
                            <b>3</b>
                        </div>
                        <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}