This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Styles

En el archivo globals.css deben estar los estilos generales y las variables para que sean mas facil de ser reutilizadas.

Cada componente debe tener un archivo con el mismo nombre solo con la extencion .css

Ejemplo:

- /banner
  - Banner.jsx
  - Banner.css

Metodologia css

Como metodologia de css utilizaremos la BEM, con la caracteristica de que cada bloque, elemento y modificador empiece con mayuscula, por Ejemplo:

- Banner
- Banner\_\_Title
- Banner\_\_Title--Bold



## Estructura de carpetas

La esctructura de las carpetas para la realizacion del proyecto es la siguente:

- ##### components

  Aqui se definen los componentes como por ejemplo: navbar,footer, hero, dashboard, etc.......

- ##### ui

  Aqui adentro se crearan los componentes mas minimos y reutilizables, como por ejemplos: botones, titulos, avatar, etc...

- ##### lib
  Funciones y utilidades compartidas, ejemplo:
  funciones para realizar llamadas a la API,
  funciones de utilidad, etc.....
