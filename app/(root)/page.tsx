import { prisma } from "@/prisma/prisma-client";
import { Container, Filters, Title, TopBar } from "@/shared/components/shared";
import { ProductsGroupList } from "@/shared/components/shared/products-group-list";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include:{
      products:{
        include:{
          items:true,
          ingredients:true,
        }
      }
    }
  })
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиицы" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar categories={categories.filter((category)=>category.products.length>0)}></TopBar>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) =>(
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
