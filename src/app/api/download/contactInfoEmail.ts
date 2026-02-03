import { escapeHtml } from "@/lib/security";

export const contactInfoEmail = (data: {
  name: string;
  phone: string;
  company: string;
}) => {
  const name = escapeHtml(data.name);
  const phone = escapeHtml(data.phone);
  const company = escapeHtml(data.company);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Contact Info Email</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="padding: 40px 0;"
    >
      <tr>
        <td align="center">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="600"
            style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);"
          >
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <h2 style="font-family: Arial, sans-serif; color: #333333;">Contact Information</h2>
              </td>
            </tr>
            <tr>
              <td style="font-family: Arial, sans-serif; color: #555555; font-size: 16px; line-height: 24px;">
                <strong>Name:</strong> ${name}
              </td>
            </tr>
            <tr>
              <td style="font-family: Arial, sans-serif; color: #555555; font-size: 16px; line-height: 24px; padding-top: 10px;">
                <strong>Contact:</strong> ${phone}
              </td>
            </tr>
            <tr>
              <td style="font-family: Arial, sans-serif; color: #555555; font-size: 16px; line-height: 24px; padding-top: 10px;">
                <strong>Company:</strong> ${company}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
