import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log('Vercel function called:', req.url, req.method);

    // For now, serve a simple SPA loader that will load the client-side React app
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Demaceo's Portfolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        </head>
        <body>
          <div id="root">
            <div class="container text-center mt-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <h2 class="mt-3">Loading Demaceo's Portfolio...</h2>
              <p>Please wait while we prepare your experience.</p>
            </div>
          </div>
          <script>
            // Redirect to the static site if available
            if (window.location.pathname === '/') {
              // Try to load from the dist directory
              fetch('/assets/entry.client-R-HSaRXY.js')
                .then(() => {
                  // Assets are available, redirect to static site
                  window.location.href = '/dist/';
                })
                .catch(() => {
                  // Fallback: show a message that the site is being deployed
                  document.getElementById('root').innerHTML = \`
                    <div class="container text-center mt-5">
                      <h1>🚀 Portfolio Deployment in Progress</h1>
                      <p class="lead">Demaceo's portfolio is currently being deployed.</p>
                      <p>Please check back in a few minutes!</p>
                      <div class="mt-4">
                        <a href="https://linkedin.com/in/demaceo" class="btn btn-primary me-2">Connect on LinkedIn</a>
                        <a href="mailto:hdemaceo@gmail.com" class="btn btn-outline-primary">Send Email</a>
                      </div>
                    </div>
                  \`;
                });
            }
          </script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
}
