http=require("http")
port=8080
const fs=require("fs")
const server=http.createServer(function (req,res)
{
	
	res.writeHead(200,{'Content-Type':'text/html'})
	fs.readFile('index.html',function(error,data)
	{
		if(error)
		{
			res.writeHead(404)
			res.write('Error:FileNot Found')
		}
		else
		{
			  res.write(data)
		}
		res.end()
	})
	
})

server.listen(port,function(error){
	if(error)
	{
		console.log('Somthing went wrong',error)
	}
	else
	{
		console.log("server is listning on port"+port)
	}
	
})
