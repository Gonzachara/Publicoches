

/*SERVER.listen(3000);*/

const http = require('http');
const server = http.createServer((request, response) => {
    const url = request.url;
    if(url === '/'){
        response.write('<html>');
        response.write('<head> <title> Apv 2021 </title> </head>');
        response.write(' <body> <h1>Ingrese su nombre </h1> <form action="/bienvenida.html" method="GET"> <input type="text" name="usuario"/> <button type="submit">Enviar</button> </body>');
        response.write('</html>');
        return response.end();
    }
});
server.listen(3000);