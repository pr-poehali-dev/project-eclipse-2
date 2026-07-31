CREATE TABLE print_orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    file_url TEXT,
    file_name VARCHAR(500),
    material VARCHAR(100),
    color VARCHAR(100),
    quantity INTEGER DEFAULT 1,
    comment TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'new',
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE scan_orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    address TEXT NOT NULL,
    preferred_date VARCHAR(100),
    comment TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'new',
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_print_orders_created ON print_orders(created_at DESC);
CREATE INDEX idx_scan_orders_created ON scan_orders(created_at DESC);
