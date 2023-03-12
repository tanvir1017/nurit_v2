import { PrismaClient } from "@prisma/client";
import { globalNamespace } from "./globalNamespace";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalNamespace.prisma) {
    globalNamespace.prisma = new PrismaClient();
  }
  prisma = globalNamespace.prisma;
}

export default prisma;
