const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const findMany = async () => {
  return prisma.user.findMany();
};

const findUnique = async (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const findByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

const create = async (userData) => {
  return prisma.user.create({ data: userData });
};

const update = async (id, userData) => {
  return prisma.user.update({ where: { id }, data: userData });
};

const deleteUser = async (id) => {
  return prisma.user.delete({ where: { id } });
};

module.exports = {
  findMany,
  findUnique,
  findByEmail,
  create,
  update,
  delete: deleteUser
};
