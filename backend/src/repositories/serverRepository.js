const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createServer = async (data) => {
  try {
    console.log('Creating server record in database with data:', JSON.stringify(data, null, 2));
    if ('id' in data) {
      console.warn('Data contains an "id" field:', data.id);
    }
    const result = await prisma.server.create({ data });
    console.log('Server record created successfully:', result);
    return result;
  } catch (error) {
    console.error('Error creating server record in database:', error);
    throw error;
  }
};

const getServerById = async (id) => {
  return await prisma.server.findUnique({ where: { id } });
};

const getAllServers = async () => {
  return await prisma.server.findMany({
    include: { 
      user: true, 
      gpuCardInstances: true, 
      virtualMachines: true 
    }
  });
};

const updateServer = async (id, data) => {
  return await prisma.server.update({ where: { id }, data });
};

const deleteServer = async (id) => {
  return await prisma.server.delete({ where: { id } });
};

const updateGpuInstanceServerId = async (gpuInstanceId, serverId) => {
  try {
    const result = await prisma.gpuCardInstance.update({
      where: { id: gpuInstanceId },
      data: { serverId }
    });
    return result;
  } catch (error) {
    console.error('Error updating GpuCardInstance serverId:', error);
    throw error;
  }
};

const clearGpuInstanceServerId = async (gpuInstanceId) => {
  try {
    const result = await prisma.gpuCardInstance.update({
      where: { id: gpuInstanceId },
      data: { serverId: null }
    });
    return result;
  } catch (error) {
    console.error('Error clearing GpuCardInstance serverId:', error);
    throw error;
  }
};

module.exports = {
  createServer,
  getServerById,
  getAllServers,
  updateServer,
  deleteServer,
  updateGpuInstanceServerId,
  clearGpuInstanceServerId
};
