const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;
const router = express.Router();

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query})
    next()
})
// router.use(express.static(path.join(__dirname, '../public')));
// app.use('/static', express.static(path.join(__dirname, './static')));

router.get('/', (req, res) => {
  res.end('hello');
});

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);