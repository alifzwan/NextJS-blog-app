
<p align="center">
<a href="https://trufflesuite.com/docs/truffle/" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" width="120" height='120'>
</a>
  
<a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" width="120" height='120'>
</a>

<a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
  <img src="https://i.pinimg.com/originals/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.png" width="120" height='120'>
</a>

<a href="https://authjs.dev/" target="_blank" rel="noopener noreferrer">
  <img src="https://miro.medium.com/v2/resize:fit:327/1*oLvPAqketvcwKRALKcFXyQ.png" width="120" height='120'>
</a>

<a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png" width="120" height='120'>
</a>

<h1 align="center">Full-Stack Blog Application with MongoDB</h1>
</p>


## 🚀 Requirements

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   ```sh
   git --version
   ```
    
 - [Nodejs](https://nodejs.org/en/)
    ```sh
    node --version
    ```
 - [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
    ```sh
    yarn --version
    ```
 - [AuthJS](https://authjs.dev/)
   ```sh
    yarn add next-auth
   ```

# MongoDB

- It NoSQL database management system.
- Unlike traditional relational databases like MySQL or PostgreSQL, MongoDB stores data in flexible, JSON-like documents

## Features:

- **Document-Oriented**: Data is stored in flexible JSON-like documents, making it easier to represent complex hierarchical relationships.
- **Scalability**: MongoDB is designed to scale out horizontally, allowing you to distribute data across multiple servers easily.
- **High Performance**: It offers high-performance reads and writes, suitable for various types of applications.
- **NoSQL**: MongoDB is classified as a NoSQL database, meaning it does not use the traditional tabular structure found in relational databases.**

### Setup Database
- Sign In on MongoDB
- Create Database
- Input IP Address (Your API or 0.0.0.0)
- Connect your MongoDB with Prisma


# Prisma

- Open-source ORM (Object-Relational Mapping) tool for Node.js and TypeScript.
- It simplifies database access by providing a type-safe and intuitive way to interact with databases.
### Setup Prisma
- Install Prisma
  ```
  yarn add prisma
  ```

- Initialize prisma file with the datasource provider
  ```
  npx prisma init --datasource-provider mongodb
  ```
- Edit DATABASE_URL on .env file based on connection string on MongoDB.
  ```
  mongodb+srv://alifzwan:<password>@cluster0.cpfzale.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  ```
- Model your data in the Prisma schema
  ```
  model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
  
  }

  model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
  
  }
  ```
- After you model your Prisma Scheme, make sure to push the scheme to database:
  ```
  npx prisma db push
  ```
- Explore the data in Prisma Studio
  ```
  npx prisma studio
  ```

# Auth JS

- Make sure you edit your API for authentication
  ```sh
  import NextAuth from "next-auth"
  import GithubProvider from "next-auth/providers/github"
  
  export default NextAuth({
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
  })
  ```
- Initialize your NEXTAUTH_URL and NEXTAUTH_SECRET on your .env file
  
### Create your API depending on providers you seek. For my case i need google api for authentication
-   Create OAuth client ID on Google Cloud and Service.
-   You'll get your GOOGLE_ID and GOOGLE_SECRET.

# Firebase 
- We only utilise firebase for their storage for our upload function.
