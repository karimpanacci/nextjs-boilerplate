import prisma from "../db";

async function main() {
  const createdElement = await prisma.chemicalElement.createManyAndReturn({
    data: [
      {
        name: "Idrogeno",
      },
      {
        name: "Elio",
      },
      {
        name: "Litio",
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
