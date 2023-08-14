import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "Shabbir@gmail.com",
      name: "Shabbir",
      age: 23,
    },
  });
  console.log(user);

  //   const users = await prisma.user.findMany();
  //   console.log(users);
}

main();
