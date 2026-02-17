import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real app, this would verify the token and use 
        // MongoDB Data API to insert the document.
        // For now, we simulate success.

        // const response = await fetch(process.env.MONGODB_DATA_API_URL + '/action/insertOne', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'api-key': process.env.MONGODB_DATA_API_KEY,
        //   },
        //   body: JSON.stringify({
        //     dataSource: 'Cluster0',
        //     database: 'solar_audit',
        //     collection: 'leads',
        //     document: body,
        //   }),
        // });

        console.log("Lead Received:", body);

        return NextResponse.json({ success: true, message: "Lead captured" });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to process lead" }, { status: 500 });
    }
}
