const serverService = require('../services/serverService');

const assignGpuToServer = async (req, res) => {
  try {
    const { serverId } = req.params;
    const { gpuInstanceId } = req.body;
    const result = await serverService.assignGpuToServer(serverId, gpuInstanceId);
    res.json(result);
  } catch (error) {
    console.error('Error assigning GPU to server:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const unassignGpuFromServer = async (req, res) => {
  try {
    const { serverId, gpuInstanceId } = req.params;
    await serverService.unassignGpuFromServer(serverId, gpuInstanceId);
    res.status(204).send();
  } catch (error) {
    console.error('Error unassigning GPU from server:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  assignGpuToServer,
  unassignGpuFromServer
};
