# Tenlo

Web app de **Tenlo**, una plataforma para adultos orientada a encontrar recursos alrededor del colegio por zona, centro y categoría.

Claim:

> Todo lo que necesitas alrededor del colegio, filtrado por tu zona y tu centro.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Datos mockeados en `src/lib/mock-data.ts`
- Esquema preparado para Supabase en `docs/supabase-schema.sql`

## Perfil y privacidad

- Registro para familias, profesionales locales, centros educativos y equipo interno.
- Imagen de perfil opcional desde el dispositivo.
- Avatar automático con color e inicial cuando no hay imagen.
- Rol visible en publicaciones y tablón para diferenciar familias, servicios profesionales y centros.
- Sin perfiles, fotos, nombres, clase u horarios personales de menores.

## Ejecutar en local

```bash
npm install
npm run dev
```

Después abre `http://localhost:3000`.

## Despliegue recomendado

Tenlo está planteado como web app con rutas, filtros, formularios, roles, moderación y futuro backend. El despliegue recomendado es Vercel con el repositorio de GitHub conectado.

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

## Próximos pasos para Supabase

1. Crear proyecto Supabase.
2. Ejecutar `docs/supabase-schema.sql`.
3. Añadir variables `.env.local` con URL y anon key.
4. Sustituir `src/lib/mock-data.ts` por un cliente de datos con funciones equivalentes.
5. Conectar Supabase Auth con email/password y magic link.
6. Activar reglas RLS por rol: familia, profesional local, centro y admin.
