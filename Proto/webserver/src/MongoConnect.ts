import mongoose from "mongoose";

export default function MongoConnect (mongoPath) {
    try {
        if ( mongoPath ) { 
            mongoose.connect( mongoPath )
            console.log('        Conectado ao MongoDb');
        }
        else throw 'Não foi possivel conectar ao MongoDB com o caminho atual'
    }
    catch ( err ) {
        console.log(err)
    }
}