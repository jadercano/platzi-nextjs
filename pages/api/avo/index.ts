import Database from "@database";
import { IncomingMessage, ServerResponse } from "http";

const getAllAvos = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const db = new Database();
  const allAvos = await db.getAll();

  response.statusCode = 200;
  response
    .setHeader("Content-Type", "application-json")
    .end(JSON.stringify({ length: allAvos.length, data: allAvos }));
};

export default getAllAvos;
