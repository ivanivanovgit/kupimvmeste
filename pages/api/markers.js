import pool from "../../src/utils/db";

export default async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM markers");
  res.status(200).json(rows);
};