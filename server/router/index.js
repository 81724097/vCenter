import koaRouter from "koa-router"

let router = new koaRouter();

router.get("/",async (ctx,next)=>{
    ctx.body = "hello World"
});




export default router;