import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import  { Resend } from "resend";
const  resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(){
    await resend.emails.send({
        from:"my email in domains @resend.com",
        to:"lblblb",
        subject:"Welcome to our service",
        react: <WelcomeTemplate name="Nooba" />,
    });

    return NextResponse.json({ message: "Email sent successfully" });

}