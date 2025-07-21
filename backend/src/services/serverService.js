const serverRepository = require('../repositories/serverRepository');

const createServer = async (data) => {
  try {
    // Remove 'id' field if present to let Prisma generate it
    const { id, ...serverData } = data;
    console.log('Creating server with data:', serverData);
    const result = await serverRepository.createServer(serverData);
    console.log('Server created successfully:', result);
    return result;
  } catch (error) {
    console.error('Error creating server:', error);
    throw error;
  }
};

const getServer = async (id) => {
  return await serverRepository.getServerById(id);
};

const listServers = async () => {
  return await serverRepository.getAllServers();
};

const updateServer = async (id, data) => {
  return await serverRepository.updateServer(id, data);
};

const deleteServer = async (id) => {
  return await serverRepository.deleteServer(id);
};

const assignGpuToServer = async (serverId, gpuInstanceId) => {
  try {
    const server = await serverRepository.getServerById(serverId);
    if (!server) {
      throw new Error('Server not found');
    }

    const gpuInstance = await gpuCardInstanceRepository.getGpuCardInstanceById(gpuInstanceId);
    if (!gpuInstance) {
      throw new Error('GpuCardInstance not found');
    }

    if (gpuInstance.serverId) {
      throw new Error('GpuCardInstance is already assigned to a server');
    }

    await serverRepository.updateGpuInstanceServerId(gpuInstanceId, serverId);
    return await serverRepository.getServerById(serverId);
  } catch (error) {
    console.error('Error assigning GpuCardInstance to Server:', error);
    throw error;
  }
};

const unassignGpuFromServer = async (serverId, gpuInstanceId) => {
  try {
    const server = await serverRepository.getServerById(serverId);
    if (!server) {
      throw new Error('Server not found');
    }

    const gpuInstance = await gpuCardInstanceRepository.getGpuCardInstanceById(gpuInstanceId);
    if (!gpuInstance) {
      throw new Error('GpuCardInstance not found');
    }

    if (gpuInstance.serverId !== serverId) {
      throw new Error('GpuCardInstance is not assigned to the specified server');
    }

    await serverRepository.clearGpuInstanceServerId(gpuInstanceId);
    return await serverRepository.getServerById(serverId);
  } catch (error) {
    console.error('Error unassigning GpuCardInstance from Server:', error);
    throw error;
  }
};

module.exports = {
  createServer,
  getServer,
  listServers,
  updateServer,
  deleteServer,
  assignGpuToServer,
  unassignGpuFromServer
};
