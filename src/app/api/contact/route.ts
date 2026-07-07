import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
  
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  

export async function POST(request:Request) {
    try {
        const body = await request.json();
      
        const {
          fullName,
          phone,
          tcIdentity,
          email,
          insuranceType,
          birthDate,
          message,
        } = body;

        await transporter.sendMail({
            from: `"Meka Sigorta Web Sitesi" <${process.env.SMTP_USER}>`,
          
            to: process.env.MAIL_TO,
          
            replyTo: email || process.env.SMTP_USER,
          
            subject: "Yeni Teklif Talebi",
          
            text: `
          Yeni teklif talebi
          
          Ad Soyad: ${fullName}
          
          Telefon: ${phone}
          
          TC Kimlik: ${tcIdentity}
          
          E-Posta: ${email}
          
          Sigorta Türü: ${insuranceType}
          
          Doğum Tarihi: ${birthDate}
          
          Mesaj:
          ${message}
          `,
          });

          return NextResponse.json({
            success: true,
            message: "Talebiniz başarıyla gönderildi.",
          });
      
      } catch (error) {

        console.error(error);
      
        return NextResponse.json(
          {
            success: false,
            message: "Mail gönderilemedi.",
          },
          {
            status: 500,
          }
        );
      
      }
}