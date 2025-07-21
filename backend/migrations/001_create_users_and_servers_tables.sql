-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending_approval',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create the servers table
CREATE TABLE servers (
    id SERIAL PRIMARY KEY,
    name_label VARCHAR(255) NOT NULL,
    ip_address VARCHAR(255) UNIQUE NOT NULL,
    cpu_model VARCHAR(255),
    cpu_cores INTEGER,
    memory_gb INTEGER,
    disk_spec VARCHAR(255),
    os VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
