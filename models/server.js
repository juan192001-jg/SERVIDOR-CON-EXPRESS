import express from 'express';
import cors from 'cors';
import dbConection from '../database/config.js';
import categoria from '../routes/categoria.js';
import usuario from '../routes/usuario.js';
import articulo from '../routes/articulo.js';
import Persona from '../routes/persona.js';
import compra from '../routes/compras.js';
import Ventas from '../routes/ventas.js';

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
        this.routes();
    }
    routes() {
        this.app.use('/api/categoria', categoria);
        this.app.use('/api/usuario', usuario);
        this.app.use('/api/articulo', articulo);
        this.app.use('/api/persona', Persona);
        this.app.use('/api/ingreso', compra);
        this.app.use('/api/venta', Ventas)

    }
    async conectarDB() {
        await dbConection();
    }
    middlewars() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }
    listen() {
        // esta parte es para que es servidor quede escuchando 
        this.app.listen(this.port, () => {
            console.log(`servidor coriendo en el puerto ${this.port}`);
        });
    }
}
export default server