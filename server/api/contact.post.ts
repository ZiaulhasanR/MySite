import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.name || !body.subject || !body.message) {
      return {
        success: false,
        message: 'Name, subject, and message are required fields.'
      };
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'ziaulhasanf@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password-here'
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'ziaulhasanf@gmail.com',
      to: 'ziaulhasanf@gmail.com',
      replyTo: body.email || 'noreply@yoursite.com',
      subject: `Contact Form: ${body.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 14px; text-transform: uppercase;">Name:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #333;">${body.name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 14px; text-transform: uppercase;">Email:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #333;">${body.email || 'Not provided'}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 14px; text-transform: uppercase;">Subject:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #333;">${body.subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 14px; text-transform: uppercase;">Message:</strong>
              <div style="margin: 10px 0 0 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 5px;">
                <p style="margin: 0; font-size: 16px; color: #333; line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="margin: 0; font-size: 12px; color: #999;">
                This message was sent from your portfolio website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email || 'Not provided'}
Subject: ${body.subject}

Message:
${body.message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: 'Message sent successfully!'
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.'
    };
  }
});

