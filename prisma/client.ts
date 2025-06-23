import { PrismaClient } from '@prisma/client'; // Ensure this points to the generated client

// Declare global prisma variable
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

// Store in global object in development to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}