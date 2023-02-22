const { PrismaClient } = require("@prisma/client");
const server = require("../app");
const prisma = new PrismaClient();
const request = require("supertest");

test("Should return current counter value", async () => {
  return request(server).get("/get-value").expect(200);
});

test("Should update current counter value", async () => {
  const response = await request(server).patch("/change-value").send({
    value: 1,
  });
  console.log(response);
  expect(response.statusCode).toEqual(204);
});

afterAll(async () => {
  await prisma.$disconnect();
  server.close();
});
