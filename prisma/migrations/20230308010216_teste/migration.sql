-- CreateEnum
CREATE TYPE "Category" AS ENUM ('PERISHABLE', 'OFFICE', 'FLAMMABLE');

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);
