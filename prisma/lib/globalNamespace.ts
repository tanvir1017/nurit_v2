import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

export const globalNamespace: NodeJS.Global & { prisma: PrismaClient } =
  global as any;
