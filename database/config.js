import mongoose from 'mongoose';

const dbConection = async() => {
    try {
        await mongoose.connect(process.env.MONGOB_CNX, {
            //se utilisan para  para ocultar guarnis generado 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false

        });
        console.log('Base de datso Online ');
    } catch (error) {
        throw new Error('Error al inicir la base de datos')
    }
}
export default dbConection