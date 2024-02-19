import { authOption } from "@/utils/auth"
import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"


const handler =  NextAuth(authOption)

export {handler as GET, handler as POST}

// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.