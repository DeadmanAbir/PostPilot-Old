import { WebhookEvent } from "@clerk/nextjs/server";


export async function POST(request) {
    const payload = await request.json();
    console.log(payload);
}


export  async function GET(req, res) {
    return res.json({ message: "Hello World!" });
}  