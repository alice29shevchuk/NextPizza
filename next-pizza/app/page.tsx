import { Container, Title, Filters, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиицы" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar></TopBar>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 6,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 7,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                ]}
                categoryId={1}
              ></ProductsGroupList>

              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 6,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                  {
                    id: 7,
                    name: "Маргарита",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42182%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
                    items: [{ price: 400 }],
                  },
                ]}
                categoryId={2}
              ></ProductsGroupList>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
