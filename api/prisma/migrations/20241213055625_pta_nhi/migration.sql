-- CreateTable
CREATE TABLE "Cryptocurrency" (
    "symbol" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "maker" BOOLEAN NOT NULL,
    "market" BOOLEAN NOT NULL,
    "cryptocurrencyId" TEXT NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cryptocurrency_symbol_key" ON "Cryptocurrency"("symbol");

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_cryptocurrencyId_fkey" FOREIGN KEY ("cryptocurrencyId") REFERENCES "Cryptocurrency"("symbol") ON DELETE RESTRICT ON UPDATE CASCADE;
