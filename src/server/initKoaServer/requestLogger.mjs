export default async (ctx, next) => {
    const startTime = Date.now();

    const result = await next();

    const processTime = Date.now() - startTime;

    console.log(`Request ${ctx.host}${ctx.url} process in ${processTime} ms`);

    return result;
};
