import prisma from "../db";

async function main() {
  const createdElement = await prisma.chemicalElement.createManyAndReturn({
    data: [
      {
        name: "Idrogeno",
        number: 1,
      },
      {
        name: "Elio",
        number: 2,
      },
      {
        name: "Litio",
        number: 3,
      },
    ],
  });
  console.log(createdElement);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("ERRORE:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
