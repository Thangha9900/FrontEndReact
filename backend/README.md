# Class Data API

NestJS API for the React client.

## Run in development

```bash
npm install
npm run start:dev
```

The API listens on `http://localhost:9000`. Request `GET http://localhost:9000/data` to receive:

```json
{
  "id": 1,
  "name": "Lop Web N04-Sunday 11 Oct 2026",
  "active": true
}
```

CORS is enabled so the React development server can request the API.
