import { NextResponse } from "next/server";
import pb from "../../../lib/pocketbase";

export async function PUT(request: Request) {
    const { email, password } = await request.json();

    console.log("LOGIN REQUEST");
    const result = await pb.collection("kantan_users").authWithPassword(email, password);

    console.log(result);
    return NextResponse.json({ data: "olala" });
}