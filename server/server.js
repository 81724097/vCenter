import koa from "koa"
import cors from "koa-cors"
import router from "./router"



const app = new koa();

/* CORS */
app.use(cors({
    origin:"http://localhost:8080",
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

/* router */
app.use(router.routes());
/* router Method */
app.use(router.allowedMethods()); 



export default app.callback();