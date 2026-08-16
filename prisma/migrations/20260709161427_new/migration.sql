-- CreateTable
CREATE TABLE "user" (
    "user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
