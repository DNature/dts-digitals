"use server";

import { Brevo } from "@/lib/email";

export async function sendEmail(formInput: any) {
  try {
    const brevo = new Brevo({
      baseApiParams: {
        headers: {
          "api-key":
            process.env.BREVO_EMAIL_API_KEY ||
            "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",
        },
      },
    });

    const accounts = await brevo.senders.getSenders();
    if (accounts.data?.senders) {
      const noReplyEmail = accounts.data.senders.find((sender) =>
        sender.email.startsWith("no-reply@dtdigital.nl"),
      );

      const contactEmail = accounts.data.senders.find((sender) =>
        sender.email.startsWith("hello@dtdigital.nl"),
      );

      const response1 = await brevo.smtp.sendTransacEmail({
        to: [
          {
            email: formInput.email,
          },
        ],
        sender: {
          name: noReplyEmail?.name,
          email: noReplyEmail?.email || "no-reply@dtdigital.nl",
        },
        subject: "Email received!",
        htmlContent: formInput.confirmation,
      });

      const response2 = await brevo.smtp.sendTransacEmail({
        to: [
          {
            email: contactEmail?.email || "hello@dtdigital.nl",
          },
        ],
        sender: {
          name: formInput?.fullName,
          email: formInput?.email || "hello@dtdigital.nl",
        },
        subject: "Webform submission",
        htmlContent: formInput.contact,
      });

      return response1.data && response2.data;
    }
  } catch (error: any) {
    console.log({ error: error });
    return null;
  }
}
