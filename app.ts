import {Elysia} from "elysia";
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { logger } from '@grotto/logysia';
import { rateLimit } from 'elysia-rate-limit'
import MongoConnection from "./src/db/mongo.connections";
import { usersController } from "./src/controllers/users.controller";

export default class App{
    public elysia: Elysia
    private port: number

    constructor(controllers: Array<Elysia>, port: number){
        this.elysia = new Elysia()
        this.port = port
        this.intialiseDbConnection()
        this.initialisePlugins()
        this.intantiateControllers(controllers)
    }

    private intantiateControllers(controllers: Array<Elysia>){
        controllers.forEach((controller)=>{
            this.elysia.use(controller)
        })
    }
    private intialiseDbConnection(){
        MongoConnection.connect()
    }
    private initialisePlugins(){
        this.elysia.use(cors())
        this.elysia.use(swagger({
            documentation: {
              info: {
                title: 'Task Management API',
                version: '1.0'
              },
              tags: [
                { name: 'Tasks', description: 'Task management endpoints' },
                { name: 'Auth', description: 'Authentication endpoints' }
              ]
            },
            path: '/swagger'
          }))
          this.elysia.use(rateLimit({ duration: 50000, max: 25, responseMessage: 'Enhance your calm' }))
          this.elysia.use(logger({logIP: true}))
          this.elysia.use(usersController)

    }
    public listen() {
        this.elysia.listen(this.port, () => {
            console.log(`🦊 Elysia is running at port ${this.port}`);
        })
    }
}
