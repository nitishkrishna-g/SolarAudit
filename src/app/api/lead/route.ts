import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

// Define Schema here to avoid creating a separate model file for a simple app
const LeadSchema = new mongoose.Schema(
    {
        name: String,
        phone: String,
        city: String,
        state: String,
        billAmount: Number,
        createdAt: { type: Date, default: Date.now },
    },
    { strict: false }
);

// Prevent OverwriteModelError
const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

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
