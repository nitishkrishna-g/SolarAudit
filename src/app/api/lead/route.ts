import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Connect to DB
        await dbConnect();

        // If no URI, just simulate success for demo
        if (!process.env.MONGODB_URI) {
            console.log("Mock saved lead:", body);
            return NextResponse.json(
                { success: true, message: "Lead saved (mock)" },
                { status: 201 }
            );
        }

        // Save to MongoDB
        await Lead.create(body);

        return NextResponse.json(
            { success: true, message: "Lead saved successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving lead:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
