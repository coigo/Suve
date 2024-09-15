import mongoose from "mongoose";


export default async function MongoConnect (mongoPath, config) {
    try {
        if ( mongoPath ) { 
            console.log('>> Connecting to mongoDb');
            
            await mongoose.connect('mongodb://localhost:27017/vive')
            console.log('>> Connection established');
        }
        else throw 'Não foi possivel conectar ao MongoDB com o caminho atual'
    }
    catch ( err ) {
        console.log(err)
        process.exit()
    }
}