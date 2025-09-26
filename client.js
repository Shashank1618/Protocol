import net from 'net';
/*
const client = net.createConnection({
    host: 'localhost',
    port: 4000,
});

const message=  "Hello from the client";

client.write(Buffer.from(message));
client.end();
*/

class MyProtocol {
    constructor(){
        this.client= net.createConnection ({
            host: "localhost",
            port: 4000,
        });

        console.log("Conncetion Established....");
        this.client.on('end',()=>{
            console.log("Retry conncetion 3-4 times");
        });
    }
    send(data){
            const payload= `\n[SOF]\n${data}\n[EOF]`;
            this.client.write(Buffer.from(payload));
            
        }
}

const c= new MyProtocol();
c.send("Hello from the client");
