# SUPEREKA

**Building services consultancy in Singapore.** SUPEREKA is a Singapore consultancy, founded in 2018
by architects and mechanical and electrical engineers. It designs and supervises air-conditioning and
mechanical ventilation (ACMV), electrical and fire protection systems, provides Qualified Person (QP)
endorsement, project management and due diligence, for building owners, developers, builders and
homeowners, in Singapore and overseas.

This repository is the source of the company website: **[supereka-sg.com](https://supereka-sg.com)**.

| | |
|---|---|
| Legal name | SUPEREKA LLP (UEN T18LL1787A) |
| Office | National Design Centre, 111 Middle Road, #03-01, Singapore 188969 |
| Email | admin@supereka-sg.com |
| Phone | +65 9667 4754 |
| LinkedIn | [SUPEREKA on LinkedIn](https://www.linkedin.com/company/96142158/) |

## What SUPEREKA does

| Service | What it covers |
|---|---|
| [ACMV](https://supereka-sg.com/services/acmv/) | Air-conditioning and mechanical ventilation design and supervision, including kitchen exhaust for F&B outlets and central kitchens |
| [Electrical](https://supereka-sg.com/services/electrical/) | Power, lighting and load design, Licensed Electrical Worker (LEW) services, electrical load upgrading and EV charging infrastructure |
| [Fire protection](https://supereka-sg.com/services/fire-protection/) | Fire protection design and SCDF submissions |
| [QP endorsement](https://supereka-sg.com/services/qualified-person-endorsement/) | Endorsement, vetting and submission of building services plans, including submission-only appointments and PUB submissions |
| [Project management](https://supereka-sg.com/services/project-management/) | Design coordination, tendering and site supervision until completion |
| [Due diligence](https://supereka-sg.com/services/due-diligence/) | Independent review of a building's mechanical and electrical systems |

## Selected work

More than 60 projects, described by type (client names are not published):

- 19 outlets for a leading premium tea brand across Singapore
- 11 multi-stall central kitchens
- 9 HDB neighbourhood upgrading projects
- Places of worship, landed homes, offices and hospitality venues
- Office design and management projects in South Korea and the Philippines
- Vetting and regulatory submissions

See the [project pages](https://supereka-sg.com/projects/) for detail.

## About this website

A React single-page app built with Vite, **prerendered to static HTML at build time** so that search
engines and AI crawlers that do not run JavaScript still read the full content.

- **16 pages:** home, projects, eight project-type case studies, and six service pages.
- **Search and AI discovery:** per-page title, description, canonical and Open Graph tags; JSON-LD
  structured data (organisation, services, FAQs, breadcrumbs, project lists); `sitemap.xml`;
  `robots.txt` allowing AI crawlers; `llms.txt`.
- **Regulatory content** on the service pages is based on public guidance from BCA, SCDF, EMA, LTA,
  URA and SFA, with a link to the official source for each statement.
- **Hosting:** GitHub Pages, on the custom domain `supereka-sg.com`, with HTTPS enforced.

### Tech stack

React 18, Vite 4, React Router 6, Tailwind CSS 3, Framer Motion, three.js (`@react-three/fiber`) for the
3D hero, and EmailJS for the contact form.

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build the site and prerender every page into `dist/` |
| `npm run preview` | Serve the Vite build locally |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

To check the prerendered output, run `npm run build` and serve `dist/` with any static server, for
example `python3 -m http.server --directory dist`.

## Updating the content

Almost all text lives in a few data files. Pages, metadata, the sitemap and `llms.txt` are generated
from them, so changing a file updates everything that uses it.

| To change | Edit |
|---|---|
| Company name, contact details, legal name and UEN, profile links (`sameAs`) | `src/constants/site.js` |
| Services, their FAQs and the regulatory statements | `src/constants/services.js` |
| Project counts and project lists | `src/constants/portfolio.js` |
| Case-study text | `src/constants/caseStudies.js` |
| Page titles, descriptions and structured data | `src/seo/meta.js` |

Guidelines for content:

- **Do not publish client names, fees or private home addresses.** Describe projects by type and
  setting.
- Cite official sources for regulatory statements, and keep the "confirm current requirements" note.
- Project counts are calculated from the data, so keep entries accurate.

## How the build works

1. `vite build` compiles the client app.
2. `vite build --ssr src/entry-server.jsx` builds a server entry that renders pages to strings.
3. `scripts/prerender.mjs` renders every route into `dist/<route>/index.html` with its own head tags
   and JSON-LD, and writes `sitemap.xml`, `robots.txt`, `llms.txt` and a `404.html`.

The browser then hydrates the prerendered markup. The 3D scenes load only in the browser.

Adding a page: add its path to `indexablePaths` and its metadata in `src/seo/meta.js`, then add the
route in `src/App.jsx`.

## Deploying

```bash
npm run deploy
```

This builds and publishes to the `gh-pages` branch. `public/CNAME` is copied into every build so the
custom domain `supereka-sg.com` is kept. Do not delete it.

DNS for `supereka-sg.com` is managed at GoDaddy: four `A` records pointing to GitHub Pages and a
`www` `CNAME` to `supereka-sg.github.io`.

`public/_headers` tells Netlify (which builds previews of pull requests) to send `noindex`, so only
`supereka-sg.com` is indexed. Remove it only if production ever moves to Netlify.

## Repository layout

```
src/
  constants/    content: site, services, portfolio, case studies
  pages/        Home, ServicePage, CaseStudyPage, ProjectsPage, NotFound
  components/   layout, sections, regulation list, 3D canvases
  seo/          page metadata, structured data, llms.txt
  entry-server.jsx   server render entry used by the prerender
scripts/prerender.mjs   static page generation
public/         CNAME, logos, social preview image, 3D models, _headers
```

## Contact

For project enquiries, email [admin@supereka-sg.com](mailto:admin@supereka-sg.com) or call
+65 9667 4754, or use the contact form at [supereka-sg.com](https://supereka-sg.com/#contact).
