const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/get-value", async (req, res) => {
  const allValues = await prisma.counter.findFirst({
    where: {
      id: 1,
    },
  });
  return res.status(200).json({ value: allValues });
});

app.post("/change-value", async (req, res) => {
  const { value } = req.body;

  const getRecords = await prisma.counter.findMany();
  if (getRecords.length == 0) {
    const addValue = await prisma.counter.create({
      data: {
        value: Number(value),
      },
    });
  } else {
    const updateValue = await prisma.counter.update({
      where: {
        id: 1,
      },
      data: {
        value: Number(value),
      },
    });
  }
  return res.status(200).json({ msg: "Data updated" });
});

const server = app.listen(8000);

server.on("listening", () => console.log("server is listening on port 8000"));

module.exports = server;
