# GPU Management Console

This project aims to provide a web-based console for managing GPU resources and virtual machines.

## Project Structure

- `backend/`: Contains the backend API server code (Node.js with Express and Prisma).
- `frontend/`: Contains the frontend console UI code (React with Vite and React Router).
- `scripts/`: Contains utility scripts for development and task management.
- `.taskmaster/`: Contains task definitions and documentation.

## Project Design and Implementation Details

### Backend

The backend is built using Node.js with the Express framework for handling HTTP requests. Prisma is used as the ORM for interacting with the PostgreSQL database.

- **Database:** PostgreSQL is used for data storage, managed via Docker Compose for easy setup in development. The schema includes `users`, `servers`, and `gpuCards` tables with defined relationships.
- **Authentication:** Google OAuth 2.0 is implemented using Passport.js for user authentication. Users are created in the database upon their first login with a 'pending_approval' status.
- **APIs:**
    - **Server CRUD:** RESTful APIs are implemented at `/servers` for creating, reading, updating, and deleting server records.
    - **Admin User Management:** Admin-protected APIs are available at `/users` for listing users and `/users/:id/approve` for approving pending users. A simple middleware (`ensureAdmin`) is used for authorization.
    - **GPU Card CRUD:** RESTful APIs are implemented at `/servers/:serverId/gpus` for managing GPU cards associated with a specific server.
- **Prisma:** Configured to connect to the PostgreSQL database. Migrations are used to manage schema changes.

### Frontend

The frontend is a single-page application built with React using Vite as the build tool. React Router is used for navigation.

- **Routing:** Basic routing is set up for the Home page (`/`), Login page (`/login`), Add Server form (`/servers/new`), Edit Server form (`/servers/edit/:id`), and Admin User Management page (`/admin/users`).
- **Components:**
    - `ServerList`: Displays a table of servers fetched from the backend. Server names link to the Server Detail page.
    - `ServerForm`: Provides a form for adding or editing server details, interacting with the backend CRUD APIs.
    - `AdminUserList`: Displays a list of users and allows approving pending users (requires admin privileges).
    - `ServerDetail`: Displays details of a specific server and includes a placeholder for GPU card management.
    - `ServerGpuCards`: Component to display and manage GPU cards for a given server (implemented basic fetching and delete).
- **Authentication Integration:** A link on the Login page initiates the Google OAuth flow by redirecting to the backend endpoint.

## Tasks Completed

The project has completed the following tasks:
- Initialized the project structure for both backend and frontend.
- Implemented user authentication using Google OAuth 2.0.
- Implemented GPU allocation and deallocation features in the Server Form.
- Created APIs for managing servers, virtual machines, and users.
- Developed the frontend interface for user management, server management, and virtual machine management.
- Implemented protected routes for authenticated users.
- Refactored code to improve maintainability and readability.
- Removed redundant files and code.
- Improved code structure and organization.
- Updated Virtual Machine CRUD operations to include GPU Card related fields and functionality.
- Implemented a new 'CardUsage' entity and integrated its management into the existing VM workflows.
- Updated Virtual Machine schema to remove redundant fields and improve data consistency.
- Implemented frontend validation for VM creation and editing.
- Updated VM creation/editing form to use a select list for Host Server ID.
- Updated `cardUsageService` and `virtualMachineRepository` to handle transactions and card usages correctly.
- Updated `cardUsageService` to handle transactions correctly for `createCardUsage` and `updateCardUsage`.
- Updated `virtualMachineRepository` to handle `cardUsages` correctly during VM updates.

## Key Components

- `backend/src/index.js`: The entry point for the backend server.
- `frontend/src/main.tsx`: The entry point for the frontend application.
- `frontend/src/components/ProtectedRoute.tsx`: A component that protects routes for authenticated users.
- `frontend/src/utils/auth.ts`: A utility file that handles authentication-related functions.
- `frontend/src/components/ServerFormWrapper.tsx`: A wrapper component for `ServerForm` to handle props.

## Adjustments Made

1. Removed redundant files and code, such as `main.jsx`.
2. Improved code structure and organization.
3. Updated `main.tsx` to use `ServerFormWrapper` and `ProtectedRoute` components.
4. Updated `index.html` to reference `main.tsx` instead of `main.jsx`.

## Stock Management Functionality

The project now includes stock management functionality for GPU card models. This involves:

1. Adding a `totalAcquiredStock` field to the `GpuCardModel` schema.
2. Updating CRUD APIs for `GpuCardModel` to support the new field.
3. Implementing stock validation logic in `GpuCardInstance` creation.
4. Updating frontend forms to handle the new stock management functionality.
5. Documenting the changes in `README.md`, `API_DOC.md`, and `database-erd.md`.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Docker and Docker Compose

### Database Setup (using Docker Compose)

1.  Ensure Docker and Docker Compose are installed and running on your system.
2.  Navigate to the project root directory in your terminal.
3.  Run the following command to start the PostgreSQL database container:
    ```bash
    docker-compose up -d
    ```
4.  Apply the Prisma database migrations to set up the schema:
    ```bash
    cd backend
    npx prisma migrate dev --name initial_schema
    ```
    *(Note: If you encounter drift issues, you may need to run `npx prisma migrate reset` in the `backend` directory to drop and recreate the database before applying migrations. **This will delete all data in the database.**)*

### Backend Setup and Running

1.  Navigate to the `backend` directory in your terminal:
    ```bash
    cd backend
    ```
2.  Install backend dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory based on `.env.example` and configure the `DATABASE_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `YOUR_SESSION_SECRET`.
    ```dotenv
    DATABASE_URL="postgresql://user:password@localhost:5432/gpu_console"
    GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
    GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"
    YOUR_SESSION_SECRET="YOUR_RANDOM_SECRET_STRING"
    ```
    *(Replace placeholder values with your actual Google API credentials and a strong session secret.)*
4.  Start the backend server:
    ```bash
    npm start
    ```
    or
    ```bash
    node src/index.js
    ```
    The backend should start and listen on `http://localhost:3001`.

### Frontend Setup and Running

1.  Open a new terminal and navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install frontend dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The frontend should start and be accessible in your browser, typically at `http://localhost:5173/`.

### Google OAuth Configuration

1.  Go to the Google Cloud Console and set up OAuth 2.0 credentials for your project.
2.  Add `http://localhost:3001/auth/google/callback` as an authorized redirect URI.
3.  Update the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in your `backend/.env` file with the credentials from Google Cloud Console.

### Admin User Setup

To test admin-only features (like user approval), you will need to manually set the `isAdmin` field to `true` for a user in the database. You can do this using a database client or by adding a temporary backend endpoint for development purposes.

## Development

- Backend code is in the `backend/` directory.
- Frontend code is in the `frontend/` directory.
- Prisma schema is in `backend/prisma/schema.prisma`.
- Database migrations are in `backend/prisma/migrations/`.
- Use `npx prisma migrate dev` in the `backend` directory to create and apply new database migrations after schema changes.
- Use `npx prisma generate` in the `backend` directory to regenerate the Prisma client after schema changes.

## Code Review Summary and Future Improvements

A targeted code review was performed during the implementation process, focusing on key areas such as API error handling, authentication logic, Prisma queries, and frontend component structure and styling.

While the core functionality for the initial set of tasks has been implemented, here are some potential areas for future improvement and further development:

-   **Backend Input Validation:** Implement more robust validation for API inputs to ensure data integrity and prevent potential security vulnerabilities.
-   **Comprehensive Error Handling:** Enhance error handling on both the backend and frontend to provide more informative error messages to users and for debugging.
-   **Authentication Security:** Consider implementing a more secure authentication token mechanism (e.g., JWT with refresh tokens) instead of solely relying on session-based authentication, especially if the frontend and backend are hosted on different domains.
-   **User Registration:** Implement a user registration flow if users need to be able to create accounts directly with email and password.
-   **UI/UX Enhancements:** Further improve the frontend styling and user experience. This could involve using a UI component library, refining the layout, and adding more visual feedback.
-   **Complete GPU Card Management UI:** Implement the "Add/Edit GPU Card Form/Modal" placeholder in the `ServerGpuCards` component to allow adding and editing GPU cards from the frontend.
-   **Virtual Machine Management UI:** Develop the frontend UI components and logic for managing Virtual Machines, interacting with the backend `/vms` APIs.

Addressing these points would make the application more robust, secure, and user-friendly.

## License

(License information will be added later)
