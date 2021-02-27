import express from 'express';
import cors from 'cors';
import dbConection from '../database/config.js';

class server {
    constructor() {
        this.port = process.env.PORT;
        // crea servidor
        this.app = express();
        // coneta a la base de datos 
        this.conectarDB();
        // darle a conoser a servidor tosdos miligurs
        this.middlewars();
        // rutas que rotes 
        this.rostes();
    }
    rostes() {

    }
    async conectarDB() {
        await dbConection();
    }
    middlewars() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
    }
    listen() {
        // esta parte es para que es servidor quede escuchando 
        this.app.listen(this.port, () => {
            console.log(`servidor coriendo en el puerto ${this.port}`);
        });
    }
}
export default server