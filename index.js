const jsonServer=require('json-server')

const mpServer=jsonServer.create()

const middleware=jsonServer.defaults()

const routes=jsonServer.router('db.json')

mpServer.use(middleware)
mpServer.use(routes)

const PORT=3000 || process.env.PORT

mpServer.listen(PORT,()=>{
    console.log('Server is running at:'+PORT)
})