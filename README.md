# Kiryco

MVP web de **Proyecto Familias**, una plataforma para adultos en España centrada inicialmente en Madrid noroeste: Las Rozas, Majadahonda, Pozuelo de Alarcón, Boadilla del Monte y alrededores.

Claim provisional:

> Todo lo que necesitas alrededor del colegio, filtrado por tu zona y tu centro.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Datos mockeados en `src/lib/mock-data.ts`
- Esquema preparado para Supabase en `docs/supabase-schema.sql`

## Ejecutar en local

```bash
npm install
npm run dev
```

Después abre `http://localhost:3000`.

## Scripts

```bash
npm run typecheck
npm run lint
npm run build
```

## Rutas principales

- `/`
- `/buscar`
- `/zona/las-rozas`
- `/zona/majadahonda`
- `/zona/pozuelo`
- `/zona/boadilla`
- `/categoria/uniformes`
- `/categoria/libros-material`
- `/categoria/clases-particulares`
- `/categoria/canguros`
- `/categoria/extraescolares`
- `/uniformes`
- `/libros-material`
- `/clases-particulares`
- `/canguros`
- `/extraescolares`
- `/centros`
- `/centros/[slug-centro]`
- `/proveedores`
- `/publicar`
- `/comunidad`
- `/login`
- `/aviso-legal`
- `/privacidad`
- `/cookies`
- `/normas-comunidad`
- `/contacto`

## Principios de seguridad

- Plataforma dirigida exclusivamente a adultos.
- Sin perfiles de alumnos.
- Sin fotos de menores.
- Sin nombres completos, clase visible ni horarios personales de menores.
- Publicaciones, reseñas y tablón preparados para moderación.
- Reseñas de centros estructuradas, respetuosas y sin acusaciones personales.

## Próximos pasos para Supabase

1. Crear proyecto Supabase.
2. Ejecutar `docs/supabase-schema.sql`.
3. Añadir variables `.env.local` con URL y anon key.
4. Sustituir `src/lib/mock-data.ts` por un cliente de datos con funciones equivalentes.
5. Conectar Supabase Auth con email/password y magic link.
6. Activar reglas RLS por rol: familia, proveedor, centro y admin.
