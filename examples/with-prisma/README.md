# With Prisma

This example shows how create a Prisma application using the Prisma CLI tool.

Prisma is a _data layer_ that replaces traditional ORMs in your application architecture.

The data layer consists of several components:

- A **Prisma server** acting as a proxy for your database
- A high-performance **query engine** that runs on the Prisma server and generates actual database queries
- A **Prisma client** that connects to the Prisma server
- A **realtime event system** that lets you subscribe to database events

## Run example

1. Install dependencies

   `npm i`

2. Run docker services (MySQL server in this case)

   `docker-compose up -d`

3. Deploy prisma app locally

   `npx prisma deploy`

4. Access to the playground `http://localhost:4466/`

5. Fetch users:

   ```graphql
   query {
     users {
       id
       name
     }
   }
   ```

6. Explore the docs an play with the other `queries`, `mutations` and `subscriptions`.

## GraphQL API Server

You can also explore the express based GraphQL server with `graphql-yoga` by running `npm run start:graphql` and accessing to `http://localhost:4000`.

## Rest API server

In order to use the REST API server you should run `npm run start:rest` and then you could run request to the domain `http://localhost:4001`, like this one:

```bash
curl -X POST \
  http://localhost:4001/beer/draft \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Lil`B"
}'
```

## Other CLI commands

- Init new app:

  `npx prisma init <your_app_name>`
