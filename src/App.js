import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import { Container, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import ForecastList from "./components/Forecast/ForecastList";
import classes from "./App.css";

const INITIAL_FORECASTS = [];

function App() {
  const [weather, setWeather] = useState(INITIAL_FORECASTS);
  const [enteredCity, setEnteredCity] = useState("");
  const [disabled, setDisabled] = useState(true);
  const key = "c07c21117a73eb80fa09cc6e1c31d33c";

  let weatherPetition =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    enteredCity +
    "&units=metric" +
    "&lang=ES" +
    "&appid=" +
    key;

  const addForecastHandler = () => {
    fetch(weatherPetition)
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        setWeather((prevWeather) => {
          return [
            {
              id: Math.random().toString(),
              city: data.name,
              temperature: parseFloat(data.main.temp).toFixed(1),
              realFeel: parseFloat(data.main.feels_like).toFixed(1),
              description: data.weather[0].description,
              icon: data.weather[0].icon,
            },
            ...prevWeather,
          ];
        });
      })
      .catch(function () {
        console.log("There was an error while getting the response");
      });

    //Reset field and button
    setEnteredCity("");
    setDisabled(true);
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
    if (event.target.value.toString().trim().length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  };

  return (
    <Container maxWidth="md">
      <MainHeader />
      <Grid container className={classes.input} mt={3}>
        <Grid item xs={2} />
        <Grid item xs={4}>
          <TextField
            variant="standard"
            type="text"
            id="cityName"
            placeholder="City name / zip code"
            value={enteredCity}
            onChange={cityChangeHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            disabled={disabled}
            onClick={addForecastHandler}
          >
            Get current weather
          </Button>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
      <Container>
        <ForecastList items={weather} apiKey={key} />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
