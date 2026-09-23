# Advisor.Investments redesign

A redesigned home page for [advisor.investments](https://www.advisor.investments/). It's plain HTML, CSS and JS, so there's no build step.

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Or just open `index.html` in a browser. Screenshots are in `previews/`.

## Placeholders to replace before going live

- Phone, email, street address (contact section)
- Headshots for James Pope and Shane Haag (currently initials)
- Bio, Our Story, Client Login, Form ADV / Form CRS links (`href="#"`)
- Contact form is front-end only; wire it to a form service or CRM
- Have compliance review all copy and the footer disclosure (SEC Marketing Rule)
