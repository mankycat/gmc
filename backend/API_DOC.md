# API Documentation

## Overview

This document provides comprehensive information about the available API endpoints in the system, including updates for managing 'CardUsage' within Virtual Machines.

## Endpoints

### Server API

#### 1. Create Server

*   **POST /api/servers**
*   **Description:** Create a new server.
*   **Request Body:**
    *   `nameLabel`: Name label of the server.
    *   `ipAddress`: IP address of the server.
    *   `cpuModel`: CPU model of the server.
    *   `cpuCores`: Number of CPU cores.
    *   `memoryGb`: Memory in GB.
*   `totalAcquiredStock`: Total acquired stock of the GPU card model.
    *   `diskSpec`: Disk specifications.
    *   `os`: Operating system.
    *   `purpose`: Purpose of the server.
*   **Response:** Created server object.

#### 2. Get Server

*   **GET /api/servers/{id}**
*   **Description:** Retrieve a specific server by ID.
*   **Path Parameters:**
    *   `id`: ID of the server.
*   **Response:** Server object.

#### 3. List Servers

*   **GET /api/servers**
*   **Description:** List all servers.
*   **Response:** List of server objects.

#### 4. Update Server

*   **PUT /api/servers/{id}**
*   **Description:** Update an existing server.
*   **Path Parameters:**
    *   `id`: ID of the server.
*   **Request Body:**
    *   `nameLabel`: Optional. Name label of the server.
    *   `ipAddress`: Optional. IP address of the server.
    *   `cpuModel`: Optional. CPU model of the server.
    *   `cpuCores`: Optional. Number of CPU cores.
    *   `memoryGb`: Optional. Memory in GB.
    *   `diskSpec`: Optional. Disk specifications.
    *   `os`: Optional. Operating system.
    *   `purpose`: Optional. Purpose of the server.
*   **Response:** Updated server object.

#### 5. Delete Server

*   **DELETE /api/servers/{id}**
*   **Description:** Delete a server by ID.
*   **Path Parameters:**
    *   `id`: ID of the server.
*   **Response:** Success message.

### GPU Card Model API

#### 1. Create GPU Card Model

*   **POST /api/gpu-card-models**
*   **Description:** Create a new GPU card model.
*   **Request Body:**
    *   `vendor`: Vendor of the GPU card model.
    *   `modelName`: Model name of the GPU card.
    *   `architecture`: Architecture of the GPU card model.
    *   `memoryGb`: Memory in GB.
    *   `totalAcquiredStock`: Total acquired stock of the GPU card model.
*   **Response:** Created GPU card model object.

#### 2. Get GPU Card Model

*   **GET /api/gpu-card-models/{id}**
*   **Description:** Retrieve a specific GPU card model by ID.
*   **Path Parameters:**
    *   `id`: ID of the GPU card model.
*   **Response:** GPU card model object.

#### 3. List GPU Card Models

*   **GET /api/gpu-card-models**
*   **Description:** List all GPU card models.
*   **Response:** List of GPU card model objects.

#### 4. Update GPU Card Model

*   **PUT /api/gpu-card-models/{id}**
*   **Description:** Update an existing GPU card model.
*   **Path Parameters:**
    *   `id`: ID of the GPU card model.
*   **Request Body:**
    *   `vendor`: Optional. Vendor of the GPU card model.
    *   `modelName`: Optional. Model name of the GPU card.
    *   `architecture`: Optional. Architecture of the GPU card model.
    *   `memoryGb`: Optional. Memory in GB.
    *   `totalAcquiredStock`: Optional. Total acquired stock of the GPU card model.
*   **Response:** Updated GPU card model object.

#### 5. Delete GPU Card Model

*   **DELETE /api/gpu-card-models/{id}**
*   **Description:** Delete a GPU card model by ID.
*   **Path Parameters:**
    *   `id`: ID of the GPU card model.
*   **Response:** Success message.

### GPU Card Instance API

#### 1. Create GPU Card Instance

*   **POST /api/gpu-card-instances**
*   **Description:** Create a new GPU card instance.
*   **Request Body:**
    *   `gpuCardModelId`: ID of the GPU card model.
    *   `serverId`: ID of the server where the GPU card is installed.
    *   `status`: Status of the GPU card instance.
    *   `purchaseDate`: Date of purchase.
*   **Response:** Created GPU card instance object.

#### 2. Get GPU Card Instance

*   **GET /api/gpu-card-instances/{id}**
*   **Description:** Retrieve a specific GPU card instance by ID.
*   **Path Parameters:**
    *   `id`: ID of the GPU card instance.
*   **Response:** GPU card instance object.

#### 3. List GPU Card Instances

*   **GET /api/gpu-card-instances**
*   **Description:** List all GPU card instances.
*   **Query Parameters:**
    *   `serverId`: Optional filter by server ID.
*   **Response:** List of GPU card instance objects.

#### 4. Update GPU Card Instance

*   **PUT /api/gpu-card-instances/{id}**
*   **Description:** Update an existing GPU card instance.
*   **Path Parameters:**
    *   `id`: ID of the GPU card instance.
*   **Request Body:**
    *   `gpuCardModelId`: Optional. ID of the GPU card model.
    *   `serverId`: Optional. ID of the server where the GPU card is installed.
    *   `status`: Optional. Status of the GPU card instance.
    *   `purchaseDate`: Optional. Date of purchase.
*   **Response:** Updated GPU card instance object.

#### 5. Delete GPU Card Instance

*   **DELETE /api/gpu-card-instances/{id}**
*   **Description:** Delete a GPU card instance by ID.
*   **Path Parameters:**
    *   `id`: ID of the GPU card instance.
*   **Response:** Success message.

### Virtual Machine API

#### 1. Create Virtual Machine

*   **POST /api/virtual-machines**
*   **Description:** Create a new virtual machine.
*   **Request Body:**
    *   `nameLabel`: Name label of the virtual machine.
    *   `vcpuCoresAssigned`: Number of vCPU cores assigned.
    *   `ramGbAssigned`: RAM in GB assigned.
    *   `gpuResourceSlice`: Optional GPU resource slice.
    *   `purpose`: Optional purpose of the virtual machine.
    *   `internalIpAddress`: Internal IP address.
    *   `hostServerId`: ID of the host server.
    *   `userId`: ID of the user.
*   **Response:** Created virtual machine object.

#### 2. Get Virtual Machine

*   **GET /api/virtual-machines/{id}**
*   **Description:** Retrieve a specific virtual machine by ID.
*   **Path Parameters:**
    *   `id`: ID of the virtual machine.
*   **Response:** Virtual machine object.

#### 3. List Virtual Machines

*   **GET /api/virtual-machines**
*   **Description:** List all virtual machines.
*   **Response:** List of virtual machine objects.

#### 4. Update Virtual Machine

*   **PUT /api/virtual-machines/{id}**
*   **Description:** Update an existing virtual machine.
*   **Path Parameters:**
    *   `id`: ID of the virtual machine.
*   **Request Body:**
    *   `nameLabel`: Optional. Name label of the virtual machine.
    *   `vcpuCoresAssigned`: Optional. Number of vCPU cores assigned.
    *   `ramGbAssigned`: Optional. RAM in GB assigned.
    *   `gpuResourceSlice`: Optional. GPU resource slice.
    *   `purpose`: Optional. Purpose of the virtual machine.
    *   `internalIpAddress`: Optional. Internal IP address.
    *   `hostServerId`: Optional. ID of the host server.
    *   `userId`: Optional. ID of the user.
*   **Response:** Updated virtual machine object.

#### 5. Delete Virtual Machine

*   **DELETE /api/virtual-machines/{id}**
*   **Description:** Delete a virtual machine by ID.
*   **Path Parameters:**
    *   `id`: ID of the virtual machine.
*   **Response:** Success message.

### User API

#### 1. Create User

*   **POST /api/admin/users**
*   **Description:** Create a new user.
*   **Request Body:**
    *   `email`: Email of the user.
    *   `password`: Password of the user.
*   **Response:** Created user object.

#### 2. Get User

*   **GET /api/admin/users/{id}**
*   **Description:** Retrieve a specific user by ID.
*   **Path Parameters:**
    *   `id`: ID of the user.
*   **Response:** User object.

#### 3. List Users

*   **GET /api/admin/users**
*   **Description:** List all users.
*   **Response:** List of user objects.

#### 4. Update User

*   **PUT /api/admin/users/{id}**
*   **Description:** Update an existing user.
*   **Path Parameters:**
    *   `id`: ID of the user.
*   **Request Body:**
    *   `email`: Optional. Email of the user.
    *   `password`: Optional. Password of the user.
    *   `isAdmin`: Optional. Whether the user is an admin.
    *   `status`: Optional. Status of the user.
*   **Response:** Updated user object.

#### 5. Delete User

*   **DELETE /api/admin/users/{id}**
*   **Description:** Delete a user by ID.
*   **Path Parameters:**
    *   `id`: ID of the user.
*   **Response:** Success message.

### CardUsage API

#### 1. Create CardUsage

*   **POST /api/card-usages**
*   **Description:** Create a new CardUsage entry for a virtual machine.
*   **Request Body:**
    *   `cardIndex`: Index of the GPU card.
    *   `cardUuid`: UUID of the GPU card.
    *   `usage`: Usage details of the GPU card (e.g., percentage).
    *   `virtualMachineId`: ID of the virtual machine using the GPU card.
*   **Response:** Created CardUsage object.

#### 2. Get CardUsage

*   **GET /api/card-usages/{id}**
*   **Description:** Retrieve a specific CardUsage entry by ID.
*   **Path Parameters:**
    *   `id`: ID of the CardUsage entry.
*   **Response:** CardUsage object.

#### 3. List CardUsages

*   **GET /api/card-usages**
*   **Description:** List all CardUsage entries.
*   **Query Parameters:**
    *   `virtualMachineId`: Optional filter by virtual machine ID.
*   **Response:** List of CardUsage objects.

## Change Log

- Updated Virtual Machine CRUD operations to include GPU Card related fields and functionality.
- Implemented a new 'CardUsage' entity and integrated its management into the existing VM workflows.
- Updated Virtual Machine schema to remove redundant fields and improve data consistency.
- Implemented frontend validation for VM creation and editing.
- Updated VM creation/editing form to use a select list for Host Server ID.
- Updated `cardUsageService` and `virtualMachineRepository` to handle transactions and card usages correctly.

#### 4. Update CardUsage

*   **PUT /api/card-usages/{id}**
*   **Description:** Update an existing CardUsage entry.
*   **Path Parameters:**
    *   `id`: ID of the CardUsage entry.
*   **Request Body:**
    *   `cardIndex`: Optional. Index of the GPU card.
    *   `cardUuid`: Optional. UUID of the GPU card.
    *   `usage`: Optional. Usage details of the GPU card.
*   **Response:** Updated CardUsage object.

#### 5. Delete CardUsage

*   **DELETE /api/card-usages/{id}**
*   **Description:** Delete a CardUsage entry by ID.
*   **Path Parameters:**
    *   `id`: ID of the CardUsage entry.
*   **Response:** Success message.

## Models

### Server

*   `id`: Unique identifier.
*   `nameLabel`: Name label of the server.
*   `ipAddress`: IP address of the server.
*   `cpuModel`: CPU model of the server.
*   `cpuCores`: Number of CPU cores.
*   `memoryGb`: Memory in GB.
*   `diskSpec`: Disk specifications.
*   `os`: Operating system.
*   `purpose`: Purpose of the server.

### GpuCardModel

*   `id`: Unique identifier.
*   `vendor`: Vendor of the GPU card model.
*   `modelName`: Model name of the GPU card.
*   `architecture`: Architecture of the GPU card model.
*   `memoryGb`: Memory in GB.

### GpuCardInstance

*   `id`: Unique identifier.
*   `count`: Number of GPU card instances.
*   `gpuCardModelId`: ID of the GPU card model.
*   `serverId`: ID of the server where the GPU card is installed.

### VirtualMachine

*   `id`: Unique identifier.
*   `nameLabel`: Name label of the virtual machine.
*   `vcpuCoresAssigned`: Number of vCPU cores assigned.
*   `ramGbAssigned`: RAM in GB assigned.
*   `gpuResourceSlice`: Optional GPU resource slice.
*   `purpose`: Optional purpose of the virtual machine.
*   `internalIpAddress`: Internal IP address.
*   `notes`: Optional notes about the VM.
*   `hostServerId`: ID of the host server.
*   `userId`: ID of the user.

### User

*   `id`: Unique identifier.
*   `email`: Email of the user.
*   `isAdmin`: Whether the user is an admin.
*   `status`: Status of the user (e.g., 'pending_approval', 'approved').

### CardUsage

*   `id`: Unique identifier.
*   `cardIndex`: Index of the GPU card.
*   `cardUuid`: UUID of the GPU card.
*   `usage`: Usage details of the GPU card (e.g., percentage).
*   `virtualMachineId`: ID of the virtual machine using the GPU card.
