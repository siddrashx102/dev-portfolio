import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
        console.error("[Contact API] Missing RESEND_API_KEY or CONTACT_EMAIL env vars");
        return Response.json({ error: "Server configuration error" }, { status: 500 });
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { name, email, subject, message } = body as Record<string, unknown>;

    const errors: Partial<Record<string, string>> = {};
    if (!name || typeof name !== "string" || !name.trim())
        errors.name = "Please enter your name.";
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errors.email = "Please enter a valid email address.";
    if (!subject || typeof subject !== "string" || !subject.trim())
        errors.subject = "Please enter a subject.";
    if (!message || typeof message !== "string" || message.trim().length < 10)
        errors.message = "Message must be at least 10 characters.";

    if (Object.keys(errors).length > 0) {
        return Response.json({ error: "Validation failed", fields: errors }, { status: 400 });
    }

    console.log("[Contact API] Email-only submission", { name, email, subject });

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL,
            subject: `New contact form submission: ${subject}`,
            html: `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Message:</strong></p>
  <p>${(message as string).replace(/\n/g, "<br>")}</p>
`,
        });
    } catch (err) {
        console.error("[Contact API] Failed to send email:", err);
        return Response.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
    }

    return Response.json({ success: true, message: "Message emailed successfully." });
}
