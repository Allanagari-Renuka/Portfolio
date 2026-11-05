import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Real server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 5 characters long.' },
        { status: 400 }
      );
    }

    // Forward to verified Formspree endpoint (preserves existing portfolio behavior)
    const formspreeResponse = await fetch('https://formspree.io/f/xanjpbjl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        subject: subject?.trim() || 'Portfolio Contact Inquiry',
        message: message.trim(),
      }),
    });

    if (!formspreeResponse.ok) {
      const errorData = await formspreeResponse.json().catch(() => ({}));
      return NextResponse.json(
        {
          success: false,
          error:
            errorData?.error ||
            'Submission service temporarily unavailable. Please email directly at allanagarirenuka28@gmail.com.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! Your message was delivered successfully.',
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error:
          'Failed to transmit message. Please contact directly via allanagarirenuka28@gmail.com.',
      },
      { status: 500 }
    );
  }
}
