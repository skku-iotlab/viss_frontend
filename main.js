var express = require('express')
var fs = require('fs');
const { start } = require('repl');

var app = express()
var port = 3000;

app.use(express.static('static'))

app.listen(port, function(){
    console.log('Server start, Port:' + port)
})

app.get('/read-success.html', function(req, res){
    fs.readFile('test_case/success/read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/read-failure.html', function(req, res){
    fs.readFile('test_case/failure/read-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/authorized-read-success.html', function(req, res){
    fs.readFile('test_case/success/authorized-read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-wildcard-success.html', function(req, res){
    fs.readFile('test_case/success/search-read-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-wildcard-failure.html', function(req, res){
    fs.readFile('test_case/failure/search-read-wildcard-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})


app.get('/search-read-no-wildcard-success.html', function(req, res){
    fs.readFile('test_case/success/search-read-no-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-no-wildcard-failure.html', function(req, res){
    fs.readFile('test_case/failure/search-read-no-wildcard-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-branch-wildcard-success.html', function(req, res){
    fs.readFile('test_case/success/search-read-branch-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-branch-wildcard-failure.html', function(req, res){
    fs.readFile('test_case/failure/search-read-branch-wildcard-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-branch-no-wildcard-success.html', function(req, res){
    fs.readFile('test_case/success/search-read-branch-no-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-branch-no-wildcard-failure.html', function(req, res){
    fs.readFile('test_case/failure/search-read-branch-no-wildcard-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/history-read-success.html', function(req, res){
    fs.readFile('test_case/success/history-read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/history-read-failure.html', function(req, res){
    fs.readFile('test_case/failure/history-read-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/service-discovery-read-success.html', function(req, res){
    fs.readFile('test_case/success/service-discovery-read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/service-discovery-read-failure.html', function(req, res){
    fs.readFile('test_case/failure/service-discovery-read-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})


app.get('/update-success.html', function(req, res){
    fs.readFile('test_case/success/update-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/update-failure.html', function(req, res){
    fs.readFile('test_case/failure/update-failure.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/read-success2.html', function(req, res){
    fs.readFile('test_case/success/read-success2.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})