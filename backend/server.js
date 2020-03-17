const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
// const http = require('http').createServer(app);


const commentRoutes = require('./api/comment/comment.routes')


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

app.use(bodyParser.json());
app.use('/api/comment', commentRoutes)

app.use(express.static('public'));

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})


const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});
