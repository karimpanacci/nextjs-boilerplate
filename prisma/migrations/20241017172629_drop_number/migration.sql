/*
  Warnings:

  - The primary key for the `ChemicalElement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `number` on the `ChemicalElement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChemicalElement" DROP CONSTRAINT "ChemicalElement_pkey",
DROP COLUMN "number",
ADD CONSTRAINT "ChemicalElement_pkey" PRIMARY KEY ("name");
