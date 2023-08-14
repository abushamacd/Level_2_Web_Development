import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       email: "Siddik@gmail.com",
  //       name: "Siddik",
  //     },
  //   });

  //   console.log(user);

  const users = await prisma.user.findMany();
  console.log(users);
}

main();
