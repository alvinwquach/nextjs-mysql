// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      posts: {
        create: [
          { title: "Hello World", content: "My first post" },
          { title: "Another Post" },
        ],
      },
    },
  });

  console.log({ user });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
