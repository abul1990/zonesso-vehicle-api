"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchShowroomWithVehicles = void 0;
const db_1 = __importDefault(require("../db"));
function fetchShowroomWithVehicles(location) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
        SELECT s.id AS showroom_id, s.name AS showroom_name, s.location AS showroom_location, 
               v.id AS vehicle_id, v.type AS vehicle_type, v.brand AS vehicle_brand, v.model AS vehicle_model, v.year AS vehicle_year, v.price AS vehicle_price, v.description AS vehicle_description, v.details AS vehicle_details
        FROM showroom s
        INNER JOIN vehicle v ON s.id = v.showroom_id
        WHERE s.location = $1;
      `;
            const { rows } = yield db_1.default.query(query, [location]);
            // Group vehicles by showroom ID
            const showroomMap = new Map();
            rows.forEach((row) => {
                var _a;
                const { showroom_id, showroom_name, showroom_location, vehicle_id, vehicle_type, vehicle_brand, vehicle_model, vehicle_year, vehicle_price, vehicle_details, vehicle_description } = row;
                if (!showroomMap.has(showroom_id)) {
                    showroomMap.set(showroom_id, {
                        id: showroom_id,
                        name: showroom_name,
                        location: showroom_location,
                        vehicles: [],
                    });
                }
                //@ts-ignore
                (_a = showroomMap.get(showroom_id)) === null || _a === void 0 ? void 0 : _a.vehicles.push({
                    id: vehicle_id,
                    type: vehicle_type,
                    brand: vehicle_brand,
                    model: vehicle_model,
                    year: vehicle_year,
                    price: vehicle_price,
                    details: vehicle_details,
                    description: vehicle_description
                });
            });
            // Convert Map values to array
            const showrooms = Array.from(showroomMap.values());
            return showrooms;
        }
        catch (err) {
            console.error('Error executing query', err);
            throw err;
        }
    });
}
exports.fetchShowroomWithVehicles = fetchShowroomWithVehicles;
