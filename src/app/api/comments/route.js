import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET All COMMENTS OF A POST
export const GET = async (request) => {

    const {searchParams} = new URL(request.url)
    console.log(searchParams)

    const postSlug = searchParams.get("postSlug")
 
try {
    const comments = await prisma.comment.findMany({
        where: { 
            ...(postSlug && { postSlug }),
         },
        include: { user: true}  //We user in model Post. There's a relationship between em 
                                
    })
    
    return new NextResponse(
        JSON.stringify( comments, { status: 200 } )
    );
  } catch (error) {
    // console.log(error);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};



//  CREATE A COMMENT

export const POST = async (request) => {

    const session = await getAuthSession();
  
    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
        );
    }
  
    try {
        const body = await request.json();
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        });
    
        return new NextResponse(
            JSON.stringify(comment, { status: 200 })
        );

    } catch (err) {

        console.log(err);

        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
  };