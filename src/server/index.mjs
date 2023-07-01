import express, { json } from 'express';
import axios from 'axios';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

connect('mongodb+srv://ukasikcioglu:Cimbom26@cluster0.8o1ybzy.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to the database');
})
.catch(err => {
  console.error('Could not connect to the database', err);
});

const TimeSchema = new Schema({
  city: String,
  time: String
});

const Time = model('Time', TimeSchema);

app.get('/time/:city', async (req, res) => {
  const city = req.params.city;

  const options = {
    method: 'GET',
    url: `https://weatherapi-com.p.rapidapi.com/timezone.json?q=${city}`,
    headers: {
        'X-RapidAPI-Key': 'c55e9f5723mshe6f389fcc331afbp1b9a59jsnd2ce51970788',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios(options);
    const timeData = response.data;
    
    res.json(timeData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching time' });
  }
});

app.post('/saveTime', async (req, res) => {
  const timeData = req.body;

  try {
    const time = new Time(timeData);
    await time.save();
    
    res.json({ status: 'Time data saved' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving time data' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
