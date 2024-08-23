const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashing } = require("../utils/encryption.js");

async function addCustomer(req, res) {
  const customerData = req.body;
  try {
    const data = await prisma.customer.findFirst({
      where: {
        email: customerData.email,
      },
    });
    if (!data) {
      const hashed = await hashing(customerData.password);
      const customer = await prisma.customer.create({
        data: {
          name: customerData.name,
          email: customerData.email,
          password: hashed,
          contact: customerData.contact,
        },
      });
      const payload = {
        success: true,
        data: "customer added",
      };
      res.status(200).json(payload);
    }
    res.status(404).json({ success: false, data: "email already exist" });
  } catch (error) {
    res.status(400).json({ success: false });
  }
  // res.send(customer);
}

async function findAll(req, res) {
  const customer = await prisma.customer.findMany();
  res.send({
    success: true,
    data: customer,
  });
}

async function getCustomer(req, res) {
  const { id } = req.params;
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id,
      },
    });
    const payload = {
      success: true,
      data: customer,
    };
    res.status(200).json(payload);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { addCustomer, findAll, getCustomer };
