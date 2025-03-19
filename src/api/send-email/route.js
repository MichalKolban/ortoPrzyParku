import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate/EmailTemplate";
import { ca } from "date-fns/locale";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_TiBEuKMv_HwCiiaenzt8fibjVwHiivWfA");

// export async function POST(req) {
//   try {
//     const { firstName, lastName, email, message } = await req.json();

//     const data = await resend.emails.send({
//       from: "formularz@ortoogrodzinska.pl",
//       to: "majkeleight@gmail.com",
//       subject: "Nowa wiadomość z formularza",
//       react: EmailTemplate({ firstName, lastName, email, message }),
//       // html: `<p><strong>Od:</strong> ${firstName} ${lastName} (${email})</p><p>${message}</p>`,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json({ success: false, error }, { status: 500 });
//   }
// }

export async function POST(req) {
  try {
    const { firstName, lastName, email, message, category } = await req.json();

    console.log("CATEGORY =", category);

    const data = await resend.emails.send({
      from: "Szkolenia@ortoogrodzinska.pl",
      to: "mza@int.pl",
      subject: `Szkolenie ${category}`,
      react: EmailTemplate({ firstName, lastName, email, message, category }),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

// export async function POST(req) {
//   try {
//     const { firstName, lastName, email, message, category } = await req.json();

//     const data = await resend.emails.send({
//       from: "formularz@twojadomena.com",
//       to: "twojemail@domena.com",
//       subject: `Nowa wiadomość - ${category}`,
//       react: EmailTemplate({ firstName, lastName, email, message, category }),
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json({ success: false, error }, { status: 500 });
//   }
// }
