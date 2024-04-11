exports.up = (pgm) => {
    // Create showroom table
    pgm.createTable('showroom', {
        id: { type: 'serial', primaryKey: true },
        name: { type: 'varchar(255)', notNull: true },
        location: { type: 'varchar(255)', notNull: true },
        description: { type: 'text', notNull: true } 
    });

    // Create vehicle table with foreign key constraint referencing showroom
    
    pgm.createTable('vehicle', {
        id: { type: 'serial', primaryKey: true },
        type: { type: 'varchar(255)', notNull: true },
        brand: { type: 'varchar(255)', notNull: true },
        model: { type: 'varchar(255)', notNull: true },
        year: { type: 'integer', notNull: true },
        details: { type: 'jsonb', notNull: true },
        description: { type: 'text', notNull: true },
        price: { type: 'decimal', notNull: true }, 
        showroom_id: {
            type: 'integer',
            notNull: true,
            references: 'showroom(id)',
            onDelete: 'cascade'
        }
    });

    pgm.sql(`
        INSERT INTO showroom (name, location, description) 
        VALUES 
            ('Kia Dubai', 'Dubai', 'Kia showroom in Dubai'),
            ('Toyota Dubai', 'Dubai', 'Toyota showroom in Dubai'),
            ('Honda Dubai', 'Dubai', 'Honda showroom in Dubai'),
            ('Nissan Dubai', 'Dubai', 'Nissan showroom in Dubai'),
            ('Ford Abu Dhabi', 'Abu Dhabi', 'Ford showroom in Abu Dhabi'),
            ('Hyundai Abu Dhabi', 'Abu Dhabi', 'Hyundai showroom in Abu Dhabi'),
            ('Mazda Sharjah', 'Sharjah', 'Mazda showroom in Sharjah'),
            ('Chevrolet Sharjah', 'Sharjah', 'Chevrolet showroom in Sharjah'),
            ('Mercedes-Benz Sharjah', 'Sharjah', 'Mercedes-Benz showroom in Sharjah'),
            ('BMW Sharjah', 'Sharjah', 'BMW showroom in Sharjah');
    `);
    
    pgm.sql(`
        INSERT INTO vehicle (type, brand, model, year, details, description, price, showroom_id) 
        VALUES 
            -- Kia Dubai
            ('SUV', 'Kia', 'Sportage', 2022, '{"kilometers": 1000, "doors": 4, "colors": ["red", "blue"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR', 50000, 1),
            ('Sedan', 'Kia', 'Cerato', 2021, '{"kilometers": 1500, "doors": 4, "colors": ["white", "black"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 570-4 SUPERLEGGERA | PEARL', 60000, 1),
            ('Hatchback', 'Kia', 'Rio', 2021, '{"kilometers": 2000, "doors": 5, "colors": ["silver", "green"], "engine": "V4", "transmission": "Automatic", "fuelType": "Diesel", "condition": "Used"}', 'HURACAN LP 580-2 | CARBON CERAMIC BRAKES', 55000, 1),
        
            -- Toyota Dubai
            ('SUV', 'Toyota', 'RAV4', 2022, '{"kilometers": 1200, "doors": 4, "colors": ["white", "black"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'HURACAN LP 610-4 | EXTERIOR MATTE', 70000, 2),
            ('Sedan', 'Toyota', 'Camry', 2021, '{"kilometers": 1800, "doors": 4, "colors": ["blue", "gray"], "engine": "V4", "transmission": "Automatic", "fuelType": "Hybrid", "condition": "New"}', 'HURACAN LP 610-4 | INTERIOR LEATHER', 65000, 2),
            ('Hatchback', 'Toyota', 'Yaris', 2021, '{"kilometers": 2200, "doors": 5, "colors": ["red", "yellow"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'HURACAN LP 610-4 SPYDER | CARBON CERAMIC BRAKES', 60000, 2),
        
            -- Honda Dubai
            ('SUV', 'Honda', 'CR-V', 2022, '{"kilometers": 1300, "doors": 4, "colors": ["black", "silver"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'AVENTADOR S ROADSTER | INTERIOR CARBON', 80000, 3),
            ('Sedan', 'Honda', 'Accord', 2021, '{"kilometers": 1700, "doors": 4, "colors": ["green", "white"], "engine": "V4", "transmission": "Automatic", "fuelType": "Hybrid", "condition": "New"}', 'GALLARDO LP 570-4 | INTERIOR LEATHER', 75000, 3),
            ('Hatchback', 'Honda', 'Civic', 2021, '{"kilometers": 2300, "doors": 5, "colors": ["blue", "red"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 560-4 | EXTERIOR MATTE', 70000, 3),
        
            -- Nissan Dubai
            ('SUV', 'Nissan', 'X-Trail', 2022, '{"kilometers": 1400, "doors": 4, "colors": ["gray", "red"], "engine": "V6", "transmission": "Automatic", "fuelType": "Diesel", "condition": "New"}', 'HURACAN LP 580-2 | EXTERIOR MATTE', 85000, 4),
            ('Sedan', 'Nissan', 'Altima', 2021, '{"kilometers": 1900, "doors": 4, "colors": ["yellow", "black"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 560-4 SPYDER | EXTERIOR MATTE', 90000, 4),
            ('Hatchback', 'Nissan', 'Micra', 2021, '{"kilometers": 2400, "doors": 5, "colors": ["green", "blue"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'HURACAN LP 610-4 SPYDER | INTERIOR LEATHER', 95000, 4),
        
            -- Ford Abu Dhabi
            ('SUV', 'Ford', 'Escape', 2022, '{"kilometers": 1100, "doors": 4, "colors": ["white", "silver"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'HURACAN LP 580-2 | EXTERIOR MATTE', 100000, 5),
            ('Sedan', 'Ford', 'Fusion', 2021, '{"kilometers": 1600, "doors": 4, "colors": ["black", "gray"], "engine": "V4", "transmission": "Automatic", "fuelType": "Hybrid", "condition": "Used"}', 'GALLARDO LP 560-4 | INTERIOR LEATHER', 105000, 5),
            ('Truck', 'Ford', 'Ranger', 2021, '{"kilometers": 2500, "doors": 2, "colors": ["blue", "red"], "engine": "V6", "transmission": "Manual", "fuelType": "Diesel", "condition": "Used"}', 'HURACAN LP 610-4 SPYDER | INTERIOR LEATHER', 110000, 5),
        
            -- Hyundai Abu Dhabi
            ('SUV', 'Hyundai', 'Tucson', 2022, '{"kilometers": 1400, "doors": 4, "colors": ["white", "black"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'HURACAN LP 580-2 | EXTERIOR MATTE', 115000, 6),
            ('Sedan', 'Hyundai', 'Elantra', 2021, '{"kilometers": 2000, "doors": 4, "colors": ["red", "blue"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'GALLARDO LP 560-4 | INTERIOR LEATHER', 120000, 6),
            ('Hatchback', 'Hyundai', 'i20', 2021, '{"kilometers": 2600, "doors": 5, "colors": ["green", "yellow"], "engine": "V4", "transmission": "Automatic", "fuelType": "Diesel", "condition": "Used"}', 'HURACAN LP 610-4 SPYDER | CARBON CERAMIC BRAKES', 125000, 6),
        
            -- Mazda Sharjah
            ('SUV', 'Mazda', 'CX-5', 2022, '{"kilometers": 1500, "doors": 4, "colors": ["black", "gray"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'AVENTADOR S ROADSTER | INTERIOR CARBON', 130000, 7),
            ('Sedan', 'Mazda', 'Mazda3', 2021, '{"kilometers": 2100, "doors": 4, "colors": ["red", "silver"], "engine": "V4", "transmission": "Automatic", "fuelType": "Hybrid", "condition": "Used"}', 'GALLARDO LP 570-4 | INTERIOR LEATHER', 135000, 7),
            ('Hatchback', 'Mazda', 'Mazda2', 2021, '{"kilometers": 2700, "doors": 5, "colors": ["blue", "white"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 560-4 | EXTERIOR MATTE', 140000, 7),
        
            -- Chevrolet Sharjah
            ('SUV', 'Chevrolet', 'Trax', 2022, '{"kilometers": 1600, "doors": 4, "colors": ["silver", "white"], "engine": "V6", "transmission": "Automatic", "fuelType": "Diesel", "condition": "New"}', 'HURACAN LP 580-2 | EXTERIOR MATTE', 145000, 8),
            ('Sedan', 'Chevrolet', 'Malibu', 2021, '{"kilometers": 2200, "doors": 4, "colors": ["gray", "black"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 560-4 SPYDER | EXTERIOR MATTE', 150000, 8),
            ('Hatchback', 'Chevrolet', 'Spark', 2021, '{"kilometers": 2800, "doors": 5, "colors": ["yellow", "red"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'HURACAN LP 610-4 SPYDER | INTERIOR LEATHER', 155000, 8),
        
            -- Mercedes-Benz Sharjah
            ('SUV', 'Mercedes-Benz', 'GLC', 2022, '{"kilometers": 1700, "doors": 4, "colors": ["black", "blue"], "engine": "V6", "transmission": "Automatic", "fuelType": "Diesel", "condition": "New"}', 'AVENTADOR S ROADSTER | INTERIOR CARBON', 160000, 9),
            ('Sedan', 'Mercedes-Benz', 'C-Class', 2021, '{"kilometers": 2300, "doors": 4, "colors": ["silver", "white"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 570-4 | INTERIOR LEATHER', 165000, 9),
            ('Coupe', 'Mercedes-Benz', 'E-Class Coupe', 2021, '{"kilometers": 2900, "doors": 2, "colors": ["red", "gray"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "New"}', 'HURACAN LP 610-4 SPYDER | CARBON CERAMIC BRAKES', 170000, 9),
        
            -- BMW Sharjah
            ('SUV', 'BMW', 'X5', 2022, '{"kilometers": 1800, "doors": 4, "colors": ["white", "black"], "engine": "V6", "transmission": "Automatic", "fuelType": "Diesel", "condition": "New"}', 'HURACAN LP 580-2 | EXTERIOR MATTE', 175000, 10),
            ('Sedan', 'BMW', '3 Series', 2021, '{"kilometers": 2400, "doors": 4, "colors": ["blue", "red"], "engine": "V4", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 560-4 | INTERIOR LEATHER', 180000, 10),
            ('Convertible', 'BMW', '4 Series Convertible', 2021, '{"kilometers": 3000, "doors": 2, "colors": ["black", "yellow"], "engine": "V6", "transmission": "Automatic", "fuelType": "Petrol", "condition": "Used"}', 'GALLARDO LP 570-4 SPYDER | EXTERIOR MATTE', 185000, 10);
    `);
    };
    
exports.down = (pgm) => {
    pgm.dropTable('vehicle');
};


