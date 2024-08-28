import { Prisma } from "@prisma/client";
import { _ingredients, categories, products } from "./contstants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { connect } from "http2";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};
const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(99, 200),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullname: "John",
        email: "john@example.com",
        password: hashSync("password123", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullname: "Admin",
        email: "admin@example.com",
        password: hashSync("password123", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Гавайская",
      imageUrl:
        "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42073%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Курица и грибы",
      imageUrl:
        "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F34584%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Баварская",
      imageUrl:
        "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41955%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

       // Остальные продукты
       generateProductItem({ productId: 1 }),
       generateProductItem({ productId: 2 }),
       generateProductItem({ productId: 3 }),
       generateProductItem({ productId: 4 }),
       generateProductItem({ productId: 5 }),
       generateProductItem({ productId: 6 }),
       generateProductItem({ productId: 7 }),
       generateProductItem({ productId: 8 }),
       generateProductItem({ productId: 9 }),
       generateProductItem({ productId: 10 }),
       generateProductItem({ productId: 11 }),
       generateProductItem({ productId: 12 }),
       generateProductItem({ productId: 13 }),
       generateProductItem({ productId: 14 }),
       generateProductItem({ productId: 15 }),
       generateProductItem({ productId: 16 }),
       generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data:[
        {
            userId:1,
            totalAmount:0,
            token:'11111',
        },
        {
            userId:2,
            totalAmount:0,
            token:'22222',
        },
    ]
  })

  await prisma.cartItem.create({
    data:
        {
            productItemId:1,
            cartId:1,
            quantity:2,
            ingredients:{
                connect:[{id:1},{id:2},{id:3},{id:4}],
            }
        },
  })
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
