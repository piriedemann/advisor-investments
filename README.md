# Advisor.Investments redesign

A redesigned home page for [advisor.investments](https://www.advisor.investments/). It's plain HTML, CSS and JS, so there's no build step.

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Or just open `index.html` in a browser. Screenshots are in `previews/`.

## Content sources

Team photos, bios, contact details, disclosures and newsletter posts come from the firm's current site. Newsletter cards and the Form ADV / CRS links point back to it.

## Still to do before going live

- Contact form is front-end only; wire it to a form service or CRM
- Client Login link (`href="#"`)
- Have compliance review all copy and the footer disclosure (SEC Marketing Rule)
