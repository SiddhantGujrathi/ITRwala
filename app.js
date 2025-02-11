const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use("/fa", express.static(path.join(__dirname, "node_modules/@fortawesome/fontawesome-free")));



// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Business Registration Routes
app.get('/proprietorship', (req, res) => {
    res.render('BusinessRegistration/proprietorship');
});

app.get('/partnership', (req, res) => {
    res.render('BusinessRegistration/partnership');
});

app.get('/llp', (req, res) => {
    res.render('BusinessRegistration/llp');
});

app.get('/private-limited', (req, res) => {
    res.render('BusinessRegistration/private-limited');
});

app.get('/opc', (req, res) => {
    res.render('BusinessRegistration/opc');
});

app.get('/startup-registration', (req, res) => {
    res.render('BusinessRegistration/startup-registration');
});

app.get('/ngo', (req, res) => {
    res.render('BusinessRegistration/ngo');
});

app.get('/public-company', (req, res) => {
    res.render('BusinessRegistration/public-company');
});

// Income Tax Routes
app.get('/income-tax/itr-filing', (req, res) => {
    res.render('IncomeTax/itr-filing');
});

app.get('/income-tax/tax-planning', (req, res) => {
    res.render('IncomeTax/tax-planning');
});

// GST Routes
app.get('/gst/registration', (req, res) => {
    res.render('GST/registration');
});

app.get('/gst/filing', (req, res) => {
    res.render('GST/filing');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});