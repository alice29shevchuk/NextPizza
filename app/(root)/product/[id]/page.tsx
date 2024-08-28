import { prisma } from "@/prisma/prisma-client"
import { Container, PizzaImage, Title } from "@/shared/components/shared";
import { GroupVariants } from "@/shared/components/shared/group-variants";
import { notFound } from "next/navigation";

export default async function ProductPage({params: {id}}:{params: {id:string}}){
    const product = await prisma.product.findFirst({where:{id: Number(id)}});
    if(!product){
        return notFound();
    }
    return <Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <PizzaImage imageUrl={product.imageUrl} size={40}></PizzaImage>
            <div className="w-[490px] bg-[#FCFCFC] p-7">
                <Title text={product.name} size="md" className="font-extrabold mb-1"></Title>
                <p className="text-gray-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dignissimos quod quibusdam eos. Tempora et nulla voluptatibus pariatur magni? Quae porro magnam eius molestiae, adipisci quasi delectus autem quia id.</p>
                <GroupVariants value="2" items={[
                    {
                        name:'Маленькая',
                        value:'1',
                    },
                    {
                        name:'Средняя',
                        value:'2',
                    },
                    {
                        name:'Большая',
                        value:'3',
                        disabled:true
                    },
                ]}></GroupVariants>
            </div>
        </div>
    </Container>
}