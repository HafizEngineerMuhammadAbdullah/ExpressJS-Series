const express = require("express");
const projectData = require("./json_data");
const app = express();
const PORT = 3000;

const styles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #f5f7ff, #eef9ff);
    color: #1f2937;
  }

  .navbar {
    background: #1f3a5f;
    padding: 18px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  .nav-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .brand {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .nav-links {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .nav-links a {
    color: #dfeafc;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 999px;
    transition: 0.3s ease;
  }

  .nav-links a:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
  }

  .container {
    max-width: 1100px;
    margin: 50px auto;
    padding: 0 20px;
  }

  .card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 18px;
    box-shadow: 0 12px 30px rgba(31, 58, 95, 0.12);
    padding: 32px;
    margin-bottom: 30px;
  }

  h1 {
    color: #1f3a5f;
    font-size: 2.7rem;
    margin-bottom: 20px;
    text-align: center;
  }

  h2 {
    color: #2b4c7e;
    margin-bottom: 18px;
  }

  p {
    font-size: 1.06rem;
    line-height: 1.8;
    color: #3b4a5a;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 28px;
  }

  .btn {
    display: inline-block;
    background: linear-gradient(135deg, #6c63ff, #4d8dff);
    color: #ffffff;
    text-decoration: none;
    padding: 12px 22px;
    border-radius: 999px;
    font-weight: bold;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 8px 18px rgba(108, 99, 255, 0.28);
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 24px;
  }

  .info-box {
    background: #f8faff;
    border: 1px solid #dfeaf5;
    padding: 22px;
    border-radius: 14px;
  }

  .info-box strong {
    display: block;
    margin-bottom: 10px;
    color: #1f3a5f;
    font-size: 1.1rem;
  }

  .footer {
    text-align: center;
    padding: 28px 20px 40px;
    color: #51657e;
    font-size: 0.95rem;
  }
`;

function renderPage(title, heading, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>${styles}</style>
      </head>
      <body>
        <nav class="navbar">
          <div class="nav-container">
            <a class="brand" href="/">ExpressJS</a>
            <div class="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/portfolio">Portfolio</a>
            </div>
          </div>
        </nav>

        <main class="container">
          <div class="card">
            <h1>${heading}</h1>
            ${content}
          </div>
        </main>

        <footer class="footer">
          © 2026 ExpressJS Demo Website
        </footer>
      </body>
    </html>
  `;
}

app.get("/", (req, res) => {
  const content = `
    <p>Welcome to our ExpressJS learning project. This page demonstrates routing, HTML rendering, and simple styling with CSS.</p>
    <div class="button-group">
      <a class="btn" href="/about">Learn More</a>
      <a class="btn" href="/contact">Get in Touch</a>
    </div>
    <div class="info-grid">
      <div class="info-box"><strong>Fast</strong>Built with Express for quick web app setup.</div>
      <div class="info-box"><strong>Reliable</strong>Simple route handling and page rendering.</div>
      <div class="info-box"><strong>Modern</strong>Styled with responsive CSS for a clean design.</div>
    </div>
  `;

  res.send(renderPage("Home", "Welcome to ExpressJS", content));
});

app.get("/about", (req, res) => {
  const content = `
    <p>We build web experiences with clean code, practical design, and modern developer workflows. Our goal is to teach the fundamentals of backend development with ExpressJS in a friendly way.</p>
    <div class="info-grid">
      <div class="info-box"><strong>Mission</strong>To help students learn server-side web development.</div>
      <div class="info-box"><strong>Focus</strong>Routing, HTML responses, and REST-style app structure.</div>
      <div class="info-box"><strong>Value</strong>Clear, readable code with practical examples.</div>
    </div>
  `;

  res.send(renderPage("About", "About Our Project", content));
});

app.get("/services", (req, res) => {
  const content = `
    <p>Our services include frontend integration, backend route setup, and project structure guidance for beginners learning ExpressJS.</p>
    <div class="info-grid">
      <div class="info-box"><strong>Web Development</strong>Responsive pages and client-side design.</div>
      <div class="info-box"><strong>API Routes</strong>Clean endpoint design for requests and responses.</div>
      <div class="info-box"><strong>Learning Support</strong>Helpful examples for new developers.</div>
    </div>
  `;

  res.send(renderPage("Services", "Our Services", content));
});

app.get("/contact", (req, res) => {
  const content = `
    <p>Need help with your ExpressJS project? Reach out and we would be happy to support your learning or development work.</p>
    <div class="info-grid">
      <div class="info-box"><strong>Email</strong>hello@expressdemo.com</div>
      <div class="info-box"><strong>Phone</strong>+1 (555) 123-4567</div>
      <div class="info-box"><strong>Location</strong>Remote / Online</div>
    </div>
  `;

  res.send(renderPage("Contact", "Contact Us", content));
});

app.get("/portfolio", (req, res) => {
  const content = `
    <p>Here are a few sample project ideas that fit well with ExpressJS and can be expanded as your skills grow.</p>
    <div class="info-grid">
      <div class="info-box"><strong>Blog App</strong>A simple blog with post routes and content pages.</div>
      <div class="info-box"><strong>Portfolio Site</strong>Showcase projects, services, and contact information.</div>
      <div class="info-box"><strong>Task Manager</strong>CRUD routes for tasks and productivity tools.</div>
    </div>
  `;

  res.send(renderPage("Portfolio", "Our Portfolio", content));
});

app.get("/projects", (req, res) => {
  res.json(projectData);
});

app.get("/projects/overall", (req, res) => {
  res.json(projectData.overall);
});

app.use((req, res) => {
  const content = `
    <p>The page you requested does not exist. Please use the navigation above to explore the site.</p>
    <div class="button-group">
      <a class="btn" href="/">Back to Home</a>
    </div>
  `;

  res.status(404).send(renderPage("404", "Page Not Found", content));
});

app.listen(PORT, () => {
  console.log(`My Server is Operating on http://localhost:${PORT}`);
});