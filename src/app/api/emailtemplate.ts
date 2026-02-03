import { escapeHtml } from "@/lib/security";

export const emailTemplate = (
    serviceName: string,
    data: { label: string; value: string }[]
  ) => {
  const safeServiceName = escapeHtml(serviceName);
  const safeRows = data.map(
    (el) =>
      `<div class="info">
            <span class="label">${escapeHtml(el.label)}:</span> ${escapeHtml(el.value)}
          </div>`
  ).join("");
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #000;
          color: #ffd700;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #111;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }
        .header {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          border-bottom: 2px solid #ffd700;
          padding-bottom: 10px;
          color: white;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }
        .content {
          padding: 20px;
          line-height: 1.6;
        }
        .info {
          margin-bottom: 10px;
          color: white;
        }
        .label {
          font-weight: bold;
          color: #ffd700;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #aaa;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">${safeServiceName}</div>
        <div class="content">
          ${safeRows}
        </div>
        <div class="footer">
          Copyright © ${new Date().getFullYear()} MAC Safety, Inc. All Rights
          Reserved
        </div>
      </div>
    </body>
  </html>
  `;
};
  