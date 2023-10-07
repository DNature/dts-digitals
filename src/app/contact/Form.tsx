"use client";

import { toast } from "react-toastify";
import { ConfirmationEmailTemplate } from "@/lib/email/templates/Confirmation";
import { ContactEmailTemplate } from "@/lib/email/templates/Contact";
import { sendEmail } from "./action";
import clsx from "clsx";
import { render } from "@react-email/components";

const formData = [
  { name: "Full name", type: "text", id: "fullName", required: true },
  { name: "Comany Name", type: "text", id: "companyName" },
  { name: "Email", type: "email", id: "email", required: true },
  { name: "Subject", type: "text", id: "subject", required: true },
];

export function Form() {
  async function onSubmit(formData: FormData) {
    const data = {
      fullName: formData.get("fullName"),
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    } as any;

    const contact = render(<ContactEmailTemplate {...data} />);
    const confirmation = render(<ConfirmationEmailTemplate {...data} />);

    const response = await sendEmail({
      contact,
      confirmation,
      ...data,
    });

    if (response) {
      toast.success(
        "We've received your email! We will get back to you shortly.",
      );
    } else {
      toast.error("Opps! Unable to save changes");
    }
  }

  return (
    <form
      data-aos="zoom-in-up"
      action={onSubmit}
      className="p-4 mt-28 w-full max-w-xl bg-white bg-opacity-40 border border-gray-200 shadow-2xl sm:p-10 md:mt-0 card backdrop-blur-md"
    >
      <h4 className="text-center">First things first</h4>
      <p className="self-center my-4 w-3/4 text-xl text-center">
        Let us get to know about your project
      </p>

      {formData.map((item, idx) => (
        <input
          key={idx}
          type={item.type}
          placeholder={item.name}
          required={item.required}
          name={item.id}
          className={clsx(
            "h-12 border bg-white border-gray-400 rounded-xl px-4 mt-6",
          )}
        />
      ))}
      <textarea
        className={clsx("border bg-white border-gray-400 rounded-xl p-4 mt-6")}
        required
        name="message"
        rows={4}
        placeholder="Message"
      />
      <button
        className={clsx("btn border-none outline-none mt-5 rounded-lg flex-1")}
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}
