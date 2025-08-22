# De Groene Deler - front-end

Dit is de subfolder waarin de code voor de front-end staat. Hiervan maken we gebruik van de volgende libraries:

- React - als rendering engine en voor interactie
- NextJS - voor routing en server-side rendering
- React Bootstrap - voor gestandaardiseerde componenten met bijbehorende styling

## Getting Started

Om de development server op te starten draai je vanuit deze folder:

```bash
npm run dev
```

Dit zal de applicatie op http://localhost:3000 starten. Als je deze in de browser opent, dan zie je links onderin een `(N)`-icoontje staan. Dat is het NextJS-developer tool knopje. Hiermee geeft NextJS inzicht in de magie die het op de achtergrond uitvoert.

Alle pagina's staan in de `/app`-folder met de naam `page.tsx`. Componenten specifiek voor die pagina staan in dezelfde folder. Gedeelde componenten staan in `/shared`. NextJS gebruikt de folderstructuur om een URL te koppelen aan een pagina:

- `/app/page.tsx` is `http://localhost:3000/` (de home-pagina)
- `/app/inloggen/page.tsx` is `http://localhost:3000/inloggen`
- `/app/aanbod/[id]/page.tsx` is `http://localhost:3000/aanbod/123`, waarbij `123` gemapt wordt naar de pad-variabele `id`.

Daarnaast zijn er de volgende conventies:

- `/app/layout.tsx` is de globale layout van de website, dus de navigatiebalk en footer.
- `/app/globals.css` is de globale styling. Hierin proberen we zoveel mogelijk met CSS-variabelen te werken. Overrides op bootstrap komen hier ook in.
- `[component].module.css` is de styling specifiek voor een component. Deze is scoped op de component.

## Handige links

De volgende externe links zijn handig om aan de slag te gaan:

- [React](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [React Bootstrap](https://react-bootstrap.github.io/)

## Troubleshooting

NextJS probeert by default componenten server-side te renderen. Dat betekent dat je hier geen interactie in kan laten plaatsvinden. Dit botert niet goed met React Bootstrap, die er vanuit gaat dat alles client-side gerenderd wordt. Als je de foutmelding krijgt "Expected React component class/function but got undefined", dan probeer je een React Bootstrap component met client-side interactie te gebruiken terwijl je server-side rendert. Als je deze foutmelding ziet of zelf interactie wil inbouwen, moet je `"use client"` bovenaan je `.tsx`-bestand zetten. NextJS zal dan snappen dat het renderen aan de browser overgelaten moet worden.
