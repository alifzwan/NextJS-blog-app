import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POTS
export const GET = async (req, {params}) => {

    const {slug} = params
 
try{

    const post = await prisma.post.update({
        where: { slug: slug },
        data:{ views: {increment: 1} },
        include: { user: true}  //We user in model Post. There's a relationship between em 
                                
    })
    
    

    return new NextResponse(
        JSON.stringify(post, { status: 200 })
    );
  } catch (error) {
    console.log(error);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};