// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const { name, email, phone, subject, message } = await request.json();

    
//     const transporter = nodemailer.createTransport({
//       host: 'mail.zamexo.in',
//       port: 465,
//       secure: true, // SSL
//       auth: {
//         user: 'info@zamexo.in',
//         pass: process.env.EMAIL_PASSWORD, 
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
//     });

//     // Email content
//     const mailOptions = {
//       from: '"Website Contact" <info@zamexo.in>',
//       to: 'info@zamexo.in', // Your email
//       replyTo: email,
//       subject: `Website Query: ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333;">New Contact Form Submission</h2>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Name:</strong></td>
//               <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
//               <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone:</strong></td>
//               <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Subject:</strong></td>
//               <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Message:</strong></td>
//               <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
//             </tr>
//           </table>
//           <p style="margin-top: 20px; color: #666;">
//             This email was sent from your website contact form.
//           </p>
//         </div>
//       `,
//       text: `
//         New Contact Form Submission
        
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone || 'Not provided'}
//         Subject: ${subject}
//         Message: ${message}
        
//         This email was sent from your website contact form.
//       `
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return Response.json(
//       { success: true, message: 'Email sent successfully!' },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('Email error:', error);
//     return Response.json(
//       { success: false, message: 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const { name, email, phone, pan, income, message, subject, city, brand } = await request.json();

//     // Email transport configuration - ZAMEXO email settings
//     const transporter = nodemailer.createTransport({
//       host: 'mail.zamexo.in',
//       port: 465,
//       secure: true, 
//       auth: {
//         user: 'info@zamexo.in',
//         pass: process.env.EMAIL_PASSWORD, 
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
//     });

//     // Email subject 
//     const emailSubject = subject || 'New ITR Filing Enquiry';

//     // Email content
//     const mailOptions = {
//       from: '"ZAMEXO Website" <info@zamexo.in>',
//       to: 'info@zamexo.in', 
//       replyTo: email || 'noreply@zamexo.in',
//       subject: `📋 ${emailSubject} - ${name || 'New Lead'}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 700px; margin: 0 auto; padding: 20px; }
//             .header { background-color: #0B1C2D; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
//             .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
//             .field { margin-bottom: 15px; }
//             .label { font-weight: bold; color: #0B1C2D; display: inline-block; width: 150px; }
//             .value { color: #555; }
//             .highlight { background-color: #FFF8E1; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0; }
//             .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h2>📋 New Lead from ZAMEXO Website</h2>
//             </div>
//             <div class="content">
//               <div class="highlight">
//                 <strong>Lead Type:</strong> ${subject || 'ITR Filing Enquiry'}
//               </div>
              
//               <h3 style="color: #0B1C2D; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Client Details</h3>
              
//               <div class="field">
//                 <span class="label">👤 Name:</span>
//                 <span class="value">${name || 'Not provided'}</span>
//               </div>
              
//               <div class="field">
//                 <span class="label">📧 Email:</span>
//                 <span class="value">${email || 'Not provided'}</span>
//               </div>
              
//               <div class="field">
//                 <span class="label">📱 Phone:</span>
//                 <span class="value">${phone || 'Not provided'}</span>
//               </div>
              
//               <div class="field">
//                 <span class="label">📍 City:</span>
//                 <span class="value">${city || 'Not provided'}</span>
//               </div>
              
//               ${pan ? `<div class="field">
//                 <span class="label">🆔 PAN Number:</span>
//                 <span class="value">${pan}</span>
//               </div>` : ''}
              
//               ${income ? `<div class="field">
//                 <span class="label">💰 Annual Income:</span>
//                 <span class="value">₹ ${income}</span>
//               </div>` : ''}
              
//               ${brand ? `<div class="field">
//                 <span class="label">🏢 Brand Name:</span>
//                 <span class="value">${brand}</span>
//               </div>` : ''}
              
//               ${message ? `<div class="field" style="margin-top: 20px;">
//                 <span class="label">💬 Message:</span><br>
//                 <div class="value" style="background: white; padding: 10px; border-radius: 5px; margin-top: 5px;">
//                   ${message.replace(/\n/g, '<br>')}
//                 </div>
//               </div>` : ''}
              
//               <div class="footer">
//                 <p>📅 Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
//                 <p>📍 Source: ZAMEXO Website - ${subject || 'Contact Form'}</p>
//                 <p>🔒 This email was automatically generated from the website contact form.</p>
//               </div>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//       text: `
//         NEW LEAD FROM ZAMEXO WEBSITE
//         =============================
        
//         Lead Type: ${subject || 'ITR Filing Enquiry'}
        
//         CLIENT DETAILS:
//         --------------
//         Name: ${name || 'Not provided'}
//         Email: ${email || 'Not provided'}
//         Phone: ${phone || 'Not provided'}
//         City: ${city || 'Not provided'}
//         ${pan ? `PAN Number: ${pan}` : ''}
//         ${income ? `Annual Income: ₹ ${income}` : ''}
//         ${brand ? `Brand Name: ${brand}` : ''}
        
//         ${message ? `Message: ${message}` : ''}
        
//         ---
//         Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
//         Source: ZAMEXO Website - ${subject || 'Contact Form'}
//       `
//     };

//     // Email भ
//     const info = await transporter.sendMail(mailOptions);
    
//     console.log('✅ Email sent successfully!');
//     console.log('Message ID:', info.messageId);
//     console.log('To:', mailOptions.to);

//     return Response.json(
//       { 
//         success: true, 
//         message: 'Email sent successfully!',
//         messageId: info.messageId
//       },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('❌ Email sending error:', error);
    
//     return Response.json(
//       { 
//         success: false, 
//         message: 'Failed to send email',
//         error: error.message
//       },
//       { status: 500 }
//     );
//   }
// }
import nodemailer from "nodemailer";

// 🔴 MUST for SMTP on Vercel / GoDaddy
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      pan,
      income,
      message,
      subject,
      city,
      brand,
    } = body;

    // ✅ SMTP CONFIG (SERVERLESS SAFE)
    const transporter = nodemailer.createTransport({
      host: "mail.zamexo.in",
      port: 587,        // ✅ IMPORTANT
      secure: false,    // ✅ STARTTLS
      auth: {
        user: "info@zamexo.in",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // ✅ HARD CHECK (debug)
    await transporter.verify();

    const mailOptions = {
      from: `"ZAMEXO Website" <info@zamexo.in>`,
      to: "info@zamexo.in",
      replyTo: email || "noreply@zamexo.in",
      subject: subject || "New Website Enquiry",
      html: `
        <h2>New Lead - ZAMEXO</h2>
        <p><b>Name:</b> ${name || "N/A"}</p>
        <p><b>Email:</b> ${email || "N/A"}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>City:</b> ${city || "N/A"}</p>
        ${pan ? `<p><b>PAN:</b> ${pan}</p>` : ""}
        ${income ? `<p><b>Income:</b> ₹${income}</p>` : ""}
        ${brand ? `<p><b>Brand:</b> ${brand}</p>` : ""}
        ${message ? `<p><b>Message:</b><br/>${message}</p>` : ""}
        <hr/>
        <p>Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Email sent successfully",
      id: info.messageId,
    });
  } catch (error) {
    console.error("SMTP ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
