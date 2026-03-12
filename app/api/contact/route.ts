export async function POST(request: Request) {
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

    console.log("[Contact API]", { name, email, subject });

    return Response.json({ success: true, message: "Message received!" });
}
