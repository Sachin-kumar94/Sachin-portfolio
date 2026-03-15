Place your resume PDF file here with the filename `resume_sachin_new3.pdf`.

Recommended steps:

1. Copy the PDF you attached (e.g., `resume sachin(new)3.pdf`) into this `assets/` folder.
2. Rename it to `resume_sachin_new3.pdf` (remove spaces/parentheses) so the download link works reliably across browsers and hosting platforms.

If you prefer to keep the original filename, update the `href` in `index.html` accordingly. The current download link in `index.html` points to `./assets/resume_sachin_new3.pdf` and uses the `download` attribute to force download in most browsers.

To test locally:

- Start a simple HTTP server in the project root and open http://localhost:8000 in your browser.
  Example (PowerShell):

  python -m http.server 8000

Then click the "Download Resume" button on the page to verify it downloads the PDF.
