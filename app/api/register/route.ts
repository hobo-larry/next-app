import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client"; // Ensure this points to your Prisma client
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function POST(request: NextRequest) {
  try {

  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email,
    },
  });

  if (user)
    return NextResponse.json(
      { error: "User already exists!" },
      { status: 400 }
    );
   

  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });
  return NextResponse.json(
    { message: "User registered successfully!", user: newUser.email },
    { status: 201 }
  );
  }
  catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
