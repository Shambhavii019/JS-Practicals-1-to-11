function enterDetails() {
    let name = prompt("Enter your name: ");
    let age = prompt("Enter your age: ");
    let prn = prompt("Enter your PRN: ");
    alert("Welcome, "+name+", you are "+age+" years old and your PRN is "+prn+".");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("PRN: " + prn);
    
    document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Student Details</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-image: url('sit-nagpur-logo.png');
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
        }
        .overlay {
          background: rgba(255, 255, 255, 0.85);
          padding: 50px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          border: 4px solid #2980b9; /* Nice blue border */
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        p {
          color: #2980b9; /* Blue text for details */
          font-size: 20px;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="overlay">
        <h1>Details Entered Successfully!</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>PRN:</strong> ${prn}</p>
      </div>
    </body>
    </html>
  `);
}