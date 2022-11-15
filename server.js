const express = require('express');
const app = express();
const session = require('express-session')

app.use(session({secret: 'codingdojorocks'}));
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (request, response) => {
    if(!request.session.counter){
        request.session.counter = 1;
        // console.log('if')
    } else {
        // console.log('else', request.session.counter)
        request.session.counter++;
    }
    response.render('index', {counter: request.session.counter})
})

app.get('/incrementar', (request, response) => {
    if(request.session.counter){
        request.session.counter += 2;
        // console.log('if')
    }
    response.render('index', {counter: request.session.counter})
})


app.get('/resetear', (request, response) => {
    if(request.session.counter){
        request.session.counter = 1;
        // console.log('if')
    }
    response.render('index', {counter: request.session.counter})
})


let port = 8000

app.listen(port);
console.log(`server is listening on port ${port}`)
