/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user` on the `user` table. All the data in the column will be lost.
  - The required column `id` was added to the `user` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "user",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "room" (
    "adminid" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,
    "messages" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "roomid" INTEGER NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "room_name_key" ON "room"("name");

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_adminid_fkey" FOREIGN KEY ("adminid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
