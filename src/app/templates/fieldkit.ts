// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateFiedlKitTemplate = (data: any) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Field Kit Inquiry</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      overflow: hidden;
    }
    .email-header {
      background: #4f46e5;
      color: #ffffff;
      text-align: center;
      padding: 30px;
    }
    .email-header h1 {
      margin: 0;
      font-size: 22px;
    }
    .email-header p {
      margin: 8px 0 0;
      font-size: 14px;
    }
    .email-body {
      padding: 30px;
      color: #333333;
      font-size: 15px;
      line-height: 1.6;
      border: 1px solid black;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .details-table td {
      padding: 8px;
    }
    .details-table tr:nth-child(odd) {
      background: #f9fafb;
    }
    .details-table td:first-child {
      font-weight: bold;
      width: 40%;
    }
    .email-footer {
      text-align: center;
      font-size: 12px;
      color: #888888;
      background: #f9fafb;
      padding: 20px;
    }
  </style>
</head>
<body>
  <table class="email-container" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td class="email-header">
        <h1>Field Kit Inquiry</h1>
        <p>Delivering AI directly to the field</p>
      </td>
    </tr>
    <tr>
      <td class="email-body">
     

        <table class="details-table">
          <tr>
            <td>Company Name</td>
            <td>${data?.companyName || ""}</td>
          </tr>
          <tr>
            <td>Representative</td>
            <td>${data?.companyRep || ""}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${data?.email || ""}</td>
          </tr>
          <tr>
            <td>Field Kits Needed</td>
            <td>${data?.fieldKitsNeeded || ""}</td>
          </tr>
        </table>

        
      </td>
    </tr>
    
  </table>
</body>
</html>
`;
