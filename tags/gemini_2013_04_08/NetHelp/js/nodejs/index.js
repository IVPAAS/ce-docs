var server=require("./server"),router=require("./router"),requestHandlers=require("./requestHandlers"),settings=require(process.argv.length>2?process.argv[2]:"./settings.json"),handle={},key,obj;for(key in requestHandlers)obj=requestHandlers[key],typeof obj=="object"&&(obj.init&&obj.init(settings),handle[obj.name]=obj);server.start(router.route,handle,settings)