import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log('Vercel function called:', req.url, req.method);

    try {
        // Import the React Router server build directly
        // @ts-ignore - Dynamic import of build output
        const serverBuild = await import('../build/server/index.js');

        // The server build should export a default function that handles requests
        const handleRequest = serverBuild.default;

        if (typeof handleRequest !== 'function') {
            throw new Error('Server build did not export a request handler function');
        }

        // Create a Web API Request
        const request = new Request(`https://${req.headers.host}${req.url}`, {
            method: req.method,
            headers: new Headers(req.headers as Record<string, string>),
            body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
        });

        const response = await handleRequest(request);        // Set headers from the React Router response
        response.headers.forEach((value: string, key: string) => {
            res.setHeader(key, value);
        });

        // Set status and send response
        res.status(response.status);

        if (response.body) {
            const reader = response.body.getReader();
            const chunks: Uint8Array[] = [];

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
            }

            const body = Buffer.concat(chunks).toString('utf-8');
            res.send(body);
        } else {
            res.end();
        }

    } catch (error) {
        console.error('Error in React Router server:', error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        // Fallback HTML
        res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Demaceo's Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
        </head>
        <body>
          <div class="container text-center mt-5">
            <h1>Welcome to Demaceo's Portfolio</h1>
            <p>Portfolio loading...</p>
            <p><small>Debug: ${req.url} | Error: ${errorMessage}</small></p>
            <a href="/" class="btn btn-primary">Go Home</a>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </html>
    `);
    }
}
