import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {  // If it's in production, a new PrismaClient instance is created on every import.
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {  // In development, it checks if a global Prisma client instance exists and creates one if not, to avoid recreating it on every import.
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma

// Explanation:

// This file establish connection to the prisma client.