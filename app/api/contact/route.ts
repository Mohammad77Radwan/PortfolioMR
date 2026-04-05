import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { logEvent, logError } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod schema
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          success: false,
          error: "Validation échouée",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Log for production monitoring
    logEvent("contact_form_submission", {
      name,
      email,
      subject,
      messageLength: message.length,
    });

    // TODO: Integrate with email service (e.g., Resend, SendGrid, Mailgun)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio <noreply@radwan-portfolio.vercel.app>",
    //   to: "mohammadradwn804@gmail.com",
    //   replyTo: email,
    //   subject: `[Portfolio Contact] ${subject}`,
    //   html: `
    //     <h2>Nouveau message de ${name}</h2>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Sujet:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès",
      },
      { status: 200 }
    );
  } catch (error) {
    logError("contact_api", error);

    return NextResponse.json(
      {
        success: false,
        error: "Erreur serveur. Veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}
