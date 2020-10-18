const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

const openPage = function (folder, documentType, res, req) {
    fs.readFile(folder, null, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(err.message);
            console.log(req.url);
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", documentType);
            res.write(data);
            res.end();
            console.log(req.url);
        }
    });
};

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        openPage("./client/pages/index.html", "text/html", res, req);
    }

    else {
        var type = req.url.split('.')[1];
        var documentType = "";
        var folder = "";
        var documentName = req.url.split('/').slice(-1)[0];

        if (type === "html") {
            documentType = "text/html";
            folder = "./client/pages/" + documentName;
        }
        else if (type === "png") {
            documentType = "image/png";
            folder = "./client/images/" + documentName;
        }
        else if (type === "jpg") {
            documentType = "image/jpg";
            folder = "./client/images/" + documentName;
        }
        else if (type === "css") {
            documentType = "text/css";
            folder = "./client/css/" + documentName;
        }
        else if (type === "js") {
            documentType = "text/javascript";
            folder = "./server/scripts/" + documentName;
        }
        else {
            res.statusCode = 404;
            res.end("Document type not implemented");
        }

        openPage(folder, documentType, res, req);

    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
