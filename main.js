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
    fs.readFile('test_case/read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/authorized-read-success.html', function(req, res){
    fs.readFile('test_case/authorized-read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-wildcard-success.html', function(req, res){
    fs.readFile('test_case/search-read-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-no-wildcard-success.html', function(req, res){
    fs.readFile('test_case/search-read-no-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-branch-wildcard-success.html', function(req, res){
    fs.readFile('test_case/search-read-branch-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/search-read-branch-no-wildcard-success.html', function(req, res){
    fs.readFile('test_case/search-read-branch-no-wildcard-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/history-read-success.html', function(req, res){
    fs.readFile('test_case/history-read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/service-discovery-read-success.html', function(req, res){
    fs.readFile('test_case/service-discovery-read-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/update-success.html', function(req, res){
    fs.readFile('test_case/update-success.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})

app.get('/read-success2.html', function(req, res){
    fs.readFile('test_case/read-success2.html', function(error, data){
        if(error) {
            console.log(error)
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
})