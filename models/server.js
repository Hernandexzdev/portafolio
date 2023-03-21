import express from "express";
import cors from "cors";
import morgan from "morgan";


export class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middleware();

    }

    middleware() {

        this.app.use( express.static('public'));
        this.app.use( cors() );
        this.app.use( morgan('dev') );
    }

    lister() {
        this.app.listen(this.port, () => console.log(`Servidor en puerto ${this.port}!`))
    }

}