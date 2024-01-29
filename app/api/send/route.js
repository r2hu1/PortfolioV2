import EmailComponents from '@/app/contact/_components/EmailComponents';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
    if (!resend) return NextResponse.json({ error: "Resend API Key Not Found" });
    if (cookies().get('resend')) return NextResponse.json({ error: "Message Already Sent, Come Back In 24hrs!" });
    try {
        const { name, email, message } = await request.json();
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'newasram86@gmail.com',
            subject: `A Message From ${name}`,
            react: EmailComponents({ name, email, message }),
        });
        cookies().set('resend', data.id, { path: '/', maxAge: 24 * 60 * 60 * 1000 });
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong" });
    }
};