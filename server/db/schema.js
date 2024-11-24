const {pool} = require('./dbConfig');

async function createTables() {
    try {
        // Users Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Users (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(100) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(20) DEFAULT 'customer',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Categories Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Categories (
                category_id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL UNIQUE,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Products Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Products (
                product_id SERIAL PRIMARY KEY,
                img_url VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                discount DECIMAL(5, 2) DEFAULT 0.00,
                category_id INT REFERENCES Categories(category_id) ON DELETE SET NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Cart Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Cart (
                cart_id SERIAL PRIMARY KEY,
                user_id INT UNIQUE REFERENCES Users(user_id) ON DELETE CASCADE,
                product_id INT REFERENCES Products(product_id) ON DELETE SET NULL,
                quantity INT NOT NULL CHECK (quantity > 0),
                unit_price DECIMAL(10, 2) NOT NULL,
                total_price DECIMAL(10, 2) NOT NULL,
                added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Orders Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Orders (
                order_id SERIAL PRIMARY KEY,
                user_id INT REFERENCES Users(user_id) ON DELETE SET NULL,
                product_id INT REFERENCES Products(product_id) ON DELETE SET NULL,
                quantity INT NOT NULL CHECK (quantity > 0),
                unit_price DECIMAL(10, 2) NOT NULL,
                total_price DECIMAL(10, 2) NOT NULL
            );
        `);

        // Payments Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Payments (
                payment_id SERIAL PRIMARY KEY,
                order_id INT REFERENCES Orders(order_id) ON DELETE SET NULL,
                amount DECIMAL(10, 2) NOT NULL,
                payment_method VARCHAR(50) NOT NULL,
                status VARCHAR(50) DEFAULT 'completed',
                transaction_id VARCHAR(255) UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // ProductReviews Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS ProductReviews (
                review_id SERIAL PRIMARY KEY,
                product_id INT REFERENCES Products(product_id) ON DELETE CASCADE,
                user_id INT REFERENCES Users(user_id) ON DELETE SET NULL,
                rating NUMERIC(2, 1) CHECK (rating >= 0 AND rating <= 5),
                comment TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("All tables created successfully.");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
}

module.exports = {createTables};
