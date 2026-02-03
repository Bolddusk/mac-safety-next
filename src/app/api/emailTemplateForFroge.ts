import { escapeHtml } from "@/lib/security";

type ForgeworkData = {
  fullName?: string;
  jobTitle?: string;
  companyName?: string;
  workEmail?: string;
  companyWebsite?: string;
  industry?: string;
  headcount?: string;
  collectsData?: string;
  dataTypes?: string[];
  openToMAC?: string;
  timeline?: string;
  referralSource?: string;
  termsAccepted?: boolean;
  friction?: string;
  problem?: string;
  consequences?: string;
  existingSystems?: string;
  decisionMaking?: string;
  successDefinition?: string;
  fitReason?: string;
};

function safe(value: unknown): string {
  if (value == null) return "";
  const s = String(value);
  return escapeHtml(s);
}

function safeBool(value: unknown): string {
  return value ? "Yes" : "No";
}

export const generateForgeworkEmailTemplate = (data: ForgeworkData) => {
  const dataTypesHtml = Array.isArray(data.dataTypes)
    ? data.dataTypes.map((type) => `<span class="badge">${safe(type)}</span>`).join("")
    : "";

  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Email Template</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
          }
          .container {
            background-color: #ffffff;
            max-width: 700px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          }
          h2 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
          }
          .section {
            margin-bottom: 25px;
          }
          .label {
            font-weight: bold;
            color: #34495e;
            margin-top: 12px;
          }
          .value {
            color: #555;
            margin: 4px 0 10px 0;
          }
          .badge {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            margin: 3px 5px 3px 0;
            font-size: 14px;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #999;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Fordge work Details</h2>
      
          <div class="section">
            <div class="label">Full Name:</div>
            <div class="value">${safe(data.fullName)}</div>
      
            <div class="label">Job Title:</div>
            <div class="value">${safe(data.jobTitle)}</div>
      
            <div class="label">Company Name:</div>
            <div class="value">${safe(data.companyName)}</div>
      
            <div class="label">Work Email:</div>
            <div class="value">${safe(data.workEmail)}</div>
      
            <div class="label">Company Website:</div>
            <div class="value">${safe(data.companyWebsite)}</div>
      
            <div class="label">Industry:</div>
            <div class="value">${safe(data.industry)}</div>
      
            <div class="label">Headcount:</div>
            <div class="value">${safe(data.headcount)}</div>
      
            <div class="label">Collects Data:</div>
            <div class="value">${safe(data.collectsData)}</div>
      
            <div class="label">Data Types:</div>
            <div class="value">${dataTypesHtml}</div>
      
            <div class="label">Open to MAC:</div>
            <div class="value">${safe(data.openToMAC)}</div>
      
            <div class="label">Timeline:</div>
            <div class="value">${safe(data.timeline)}</div>
      
            <div class="label">Referral Source:</div>
            <div class="value">${safe(data.referralSource)}</div>
      
            <div class="label">Terms Accepted:</div>
            <div class="value">${safeBool(data.termsAccepted)}</div>
          </div>
      
          <div class="section">
            <div class="label">Friction:</div>
            <div class="value">${safe(data.friction)}</div>
      
            <div class="label">Problem:</div>
            <div class="value">${safe(data.problem)}</div>
      
            <div class="label">Consequences:</div>
            <div class="value">${safe(data.consequences)}</div>
      
            <div class="label">Existing Systems:</div>
            <div class="value">${safe(data.existingSystems)}</div>
      
            <div class="label">Decision Making:</div>
            <div class="value">${safe(data.decisionMaking)}</div>
      
            <div class="label">Definition of Success:</div>
            <div class="value">${safe(data.successDefinition)}</div>
      
            <div class="label">Reason for Fit:</div>
            <div class="value">${safe(data.fitReason)}</div>
          </div>
      
          <div class="footer">
            &copy; ${new Date().getFullYear()} ${safe(data.companyName)}. All rights reserved.
          </div>
        </div>
      </body>
      </html>
        `;
};
