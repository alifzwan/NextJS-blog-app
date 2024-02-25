import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  const { searchParams } = new URL(req.url)

  const page = searchParams.get("page")

  const POST_PER_PAGE = 2;

  try {
    const posts = await prisma.posts.findMany({
      take: POST_PER_PAGE, 
      skip: POST_PER_PAGE * (page - 1)
    });

    if(posts){
        return new NextResponse(
            JSON.stringify(categories, { status: 200 })
        );
    }
    
  } catch (error) {
    console.log(error);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};