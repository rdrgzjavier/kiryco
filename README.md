# Proyecto Familias / Kiryco

MVP responsive en español para familias, centros educativos y proveedores locales alrededor del colegio, centrado inicialmente en Madrid noroeste: Las Rozas, Majadahonda, Pozuelo de Alarcón y Boadilla del Monte.

Claim provisional:

> Todo lo que necesitas alrededor del colegio, filtrado por tu zona y tu centro.

## Incluye

- Home SEO con buscador, categorías, confianza, zonas iniciales y CTAs.
- Resultados con filtros por búsqueda, categoría, municipio, centro, precio y verificación.
- Páginas por categoría: `/categoria/uniformes`, `/categoria/libros-material`, `/categoria/clases-particulares`, `/categoria/canguros`, `/categoria/extraescolares`, `/categoria/centros`.
- Detalle de publicación en `/anuncios/[id]`.
- Directorio y ficha de centros en `/centros` y `/centros/[slug]`.
- Página de publicación con aviso obligatorio sobre datos de menores y estado `pending_review`.
- Páginas para proveedores, centros educativos, comunidad controlada, login y legales.
- Datos mockeados en `src/lib/mock-data.ts`.
- Tipos preparados para backend en `src/lib/types.ts`.
- Esquema SQL base para Supabase en `docs/supabase-schema.sql`.

## Privacidad y seguridad

La app está dirigida exclusivamente a adultos: padres, madres, tutores legales, proveedores verificados, centros y administración interna.

No se implementan perfiles de alumnos, fotos de menores, nombre completo de menores, clase visible públicamente, horarios personales, grupos de menores, mensajería juvenil ni rankings internos.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

En esta sesión, las comprobaciones `npx tsc --noEmit` y `npx eslint src --max-warnings=0` pasan correctamente. El entorno local de ejecución bloqueó procesos secundarios de Next con `spawn EPERM`; en una terminal normal de Windows debería arrancar con el comando anterior.

## Conectar Supabase

1. Crear proyecto en Supabase.
2. Aplicar `docs/supabase-schema.sql`.
3. Añadir `.env.local` con `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Instalar cliente Supabase cuando se vaya a conectar backend real.
5. Sustituir lecturas de `src/lib/mock-data.ts` por consultas y Server Actions.
6. Añadir Storage para imágenes con reglas que impidan publicar fotos de menores.

## GitHub

Repositorio previsto: `https://github.com/rdrgzjavier/kiryco`.

Esta carpeta local no contiene `.git` ahora mismo. Para enlazarla:

```bash
git init
git remote add origin https://github.com/rdrgzjavier/kiryco.git
git add .
git commit -m "Build Proyecto Familias MVP"
git push -u origin main
```
