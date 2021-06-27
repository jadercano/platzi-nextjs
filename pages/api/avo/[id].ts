import Database from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const getAvoById = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const id = request.query.id as string;
  const db = new Database();
  const avo = await db.getById(id);

  response.status(200).json(avo);
};

export default getAvoById;
