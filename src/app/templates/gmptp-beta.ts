// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateGMPTPBETATemplate(data: any) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${data.companyName} Project Info</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        color: #f5f5f5;
      }
      .container {
        max-width: 650px;
        margin: 50px auto;
        background: #777777;
        border-radius: 16px;
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
        overflow: hidden;
        border: 1px solid #444;
      }
      .header {
        background: linear-gradient(135deg, #6b6b6b, #111);
        color: #FFD700;
        padding: 25px;
        text-align: center;
        border-bottom: 2px solid #FFD700;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        letter-spacing: 1px;
      }
      .content {
        padding: 30px;
      }
      .content h2 {
        color: #FFD700;
        margin-bottom: 20px;
        font-size: 22px;
        border-bottom: 1px solid #FFD700;
        display: inline-block;
        padding-bottom: 5px;
      }
      .info-box {
        margin: 15px 0;
        padding: 15px;
        border-radius: 12px;
        background: #1a1a1a;
        border-left: 6px solid #FFD700;
      }
        .info-box p {
      color: white
    }
      .info-box strong {
        color: #FFD700;
      }
      .footer {
        background: #0d0d0d;
        text-align: center;
        padding: 20px;
        font-size: 14px;
        color: #aaa;
        border-top: 1px solid #333;
      }
      .footer span {
        color: #FFD700;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>✨ ${data.companyName}</h1>
        <p>Premium Software Development</p>
      </div>
  
      <!-- Content -->
      <div class="content">
        <h2>📋 Project Information</h2>
  
        <div class="info-box">
          <p><strong>Company Name:</strong> ${data.companyName}</p>
        </div>
  
        <div class="info-box">
          <p><strong>Representative:</strong> ${data.companyRep}</p>
        </div>
  
        <div class="info-box">
          <p><strong>Email:</strong> ${data.email}</p>
        </div>
  
        <div class="info-box">
          <p><strong>Facility:</strong> ${data.facility}</p>
        </div>
  
        <div class="info-box">
          <p><strong>Project:</strong> ${data.project}</p>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="footer">
        &copy; ${new Date().getFullYear()} <span>MacSafety</span> | Crafted with ❤️ by <span>MacSafety Team</span>
      </div>
    </div>
  </body>
  </html>`;
}
