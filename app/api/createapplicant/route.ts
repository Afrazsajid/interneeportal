import { backendclient } from "@/sanity/lib/backendClient";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; // Import UUID package to generate unique IDs
import nodemailer from "nodemailer"; // Import Nodemailer

export async function POST(req: Request) {
  try {
    const applicantData = await req.json();
    console.log("Processing applicant submission...");
    console.log("Applicant Data:", applicantData); // Log applicant data to inspect it

    // Basic validation
    if (!applicantData.name || !applicantData.email || !applicantData.internshipref) {
      const missingFields = [];
      if (!applicantData.name) missingFields.push("name");
      if (!applicantData.email) missingFields.push("email");
      if (!applicantData.internshipref) missingFields.push("internshipref");
      
      console.log("Missing fields:", missingFields); // Log missing fields
      return NextResponse.json({ message: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 });
    }

    // Construct full applicant object
    const fullApplicant = {
      _id: uuidv4(), // Generate a unique ID for the applicant
      _type: "applicant", // Sanity schema type
      title: applicantData.name,
      email: applicantData.email,
      internshiprefrence: {
        _type: "reference",
        _ref: applicantData.internshipref, // Reference to internship
      },
      phonenumber: applicantData.phoneNumber || "g", // Optional phone number
    };

    console.log("Applicant Object to be created:", fullApplicant); // Log the object to check

    // Submit to Sanity
    const result = await backendclient.create(fullApplicant);
    console.log("Applicant added to Sanity:", result); // Log the result of Sanity API call

    // Send a confirmation email to the applicant
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this to your email provider if not using Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or App password
      },
    });

    const mailOptions = {
      from: process.env.E, // Sender's email
      to: applicantData.email, // Recipient's email
      subject: "Applicant Confirmation",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f9f9;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .email-container {
      width: 100%;
      background-color: #ffffff;
      margin: 0 auto;
      padding: 30px;
      max-width: 600px;
      border-radius: 10px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      border-top: 5px solid #2F6C2F; /* Green border */
    }
    .header {
      text-align: center;
      padding-bottom: 25px;
    }
    .header img {
      max-width: 160px;
      margin-bottom: 15px;
    }
    .title {
      font-size: 24px;
      color: #2F6C2F; /* Dark green for title */
      font-weight: bold;
      margin-bottom: 10px;
    }
    .message {
      font-size: 16px;
      line-height: 1.6;
      color: #555;
      margin-bottom: 25px;
    }
    .footer {
      font-size: 14px;
      text-align: center;
      color: #777;
    }
    .footer p {
      margin: 5px 0;
    }
    .button {
      background-color: #2F6C2F; /* Green-700 theme */
      color: white;
      padding: 12px 25px;
      text-align: center;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      margin-top: 25px;
    }
    .button:hover {
      background-color: #1e4f1e; /* Darker green for hover effect */
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <!-- Replace with your company's actual logo -->
      <img src="https://www.internee.pk/assets/icon-BT8woF2N.jpg" alt="Company Logo">
    </div>

    <div class="message">
      <p class="title">Hello ${applicantData.name},</p>

      <p>Your application has been successfully submitted! We will get back to you shortly.</p>

      <p>If you have any questions in the meantime, feel free to reach out.</p>

      <p>Best regards,<br>The Team</p>
    </div>

    <a style="color: #ffffff;"href="https://yourwebsite.com" class="button">Visit Our Website</a>

    <div class="footer">
      <p>&copy; 2025 Company Name. All rights reserved.</p>
      <p>123 Company Address, City, Country</p>
    </div>
  </div>
</body>
</html>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", applicantData.email); // Log email sent status

    return NextResponse.json({ message: "Applicant created successfully and confirmation email sent", result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error submitting applicant:", error);
      return NextResponse.json({ message: "Failed to submit applicant", error: error.message }, { status: 500 });
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json({ message: "Failed to submit applicant", error: "Unknown error" }, { status: 500 });
    }
  }
}
