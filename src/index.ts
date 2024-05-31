import {initServer} from './app/index'

const startServer=async()=>{
    const app=await initServer();

    app.listen('8000',()=>{
        console.log('listening on 8000');
    })
}

startServer();