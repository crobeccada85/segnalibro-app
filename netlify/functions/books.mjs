import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("segnalibro");

  if (req.method === "GET") {
    const books = (await store.get("books", { type: "json" })) || [];
    return new Response(JSON.stringify(books), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (req.method === "POST") {
    const body = await req.json();
    if (!Array.isArray(body)) {
      return new Response(JSON.stringify({ error: "Formato non valido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    await store.setJSON("books", body);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/books" };
