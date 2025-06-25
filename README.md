# Admin Todos

Admin Todos es una aplicación basada en el curso `Next.js: El framework de React para producción` de `Fernando Herrera` publicado en (https://www.udemy.com/course/nextjs-fh/).

## Descripción

...

## Requisitos previos

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (versión recomendada: 18.x o superior)
- [npm](https://www.npmjs.com/)

## Instalación y desarrollo

Sigue estos pasos para levantar la aplicación en entorno de desarrollo:

### 1. Clona el repositorio

```sh
git clone https://github.com/thamuzlord/admin-todos.git
cd admin-todos
```

### 2. Levanta la base de datos con Docker

```sh
docker compose up -d
```

### 3. Instala dependencias

```sh
npm install
```

### 4. Configura Prisma

Ejecuta los siguientes comandos para inicializar y migrar la base de datos con Prisma:

```sh
npx prisma init
npx prisma migrate dev
npx prisma generate
```

### 5. Inicia la aplicación

```sh
npm run dev
```

## Comandos útiles de Prisma

- Inicializar Prisma: `npx prisma init`
- Migrar base de datos: `npx prisma migrate dev`
- Generar cliente Prisma: `npx prisma generate`