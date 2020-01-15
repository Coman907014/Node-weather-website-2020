
const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, './public');
const port = process.env.PORT || 3000
const getTemperature = require('./utils/transformUserInputIntoTemperature');
app.use(express.static(publicDirectoryPath));


app.get('/help', (req, res) => {
    res.send(`<h3>No help for you, buddy!</h3>`)
})
app.get('/json-help', (req, res) => {
    res.send({
        "type": "JSON format.",
        "help:": "Still no help for your, buddy!"
    })
})

app.get('/about', (req, res) => {
    res.send(`<h4>In three words I can sum up everything I've learned about life: it goes on.</h4>`)
})

app.get('/weather', async (req, res) => {
    if(!req.query.location) {
        return res.send({
            error: 'You must provide a search term.'
        })
    }
    const userInputLocation = req.query.location
    const weatherForecast = await getTemperature.transformUserInputIntoTemperature(userInputLocation)
    
    res.send(weatherForecast)
})

app.get('*', (req, res) => {
    res.send('My 404 page')
})


app.listen(port, () => {
    console.log(`Server is up on port ${ port }.`);
});
