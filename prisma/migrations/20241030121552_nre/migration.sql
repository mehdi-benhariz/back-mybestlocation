-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "num" TEXT NOT NULL,
    "longtitute" TEXT NOT NULL,
    "latitute" TEXT NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("num")
);
