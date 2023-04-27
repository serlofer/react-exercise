import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import { Button, TextField, Stack, Grid } from "@mui/material";
import { useState } from "react";
import ForecastList from "./components/Forecast/ForecastList";

const INITIAL_FORECASTS = [
  {
    id: "e1",
    city: "CityExample1",
    temperature: 23.6,
    realFeel: 24.2,
    description: "Scattered clouds",
  },
  {
    id: "e2",
    city: "CityExample2",
    temperature: 12.7,
    realFeel: 10.6,
    description: "Rain",
  },
];

function App() {
  const [forecasts, setForecasts] = useState(INITIAL_FORECASTS);
  const [enteredCity, setEnteredCity] = useState("");
  const [disabled, setDisabled] = useState(true);
  const key = "c07c21117a73eb80fa09cc6e1c31d33c";

  let petition =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    enteredCity +
    "&units=metric" +
    "&appid=" +
    key;

  const addForecastHandler = () => {
    //Reset field and button
    setEnteredCity("");
    setDisabled(true);

    fetch(petition)
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        setForecasts((prevForecasts) => {
          return [
            {
              id: Math.random().toString(),
              city: data.name,
              temperature: parseFloat(data.main.temp),
              realFeel: parseFloat(data.main.feels_like),
              description: data.weather[0].main,
            },
            ...prevForecasts,
          ];
        });
      })
      .catch(function () {
        console.log("There was an error while getting the response");
      });
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
    if (event.target.value.toString().trim().length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  };

  return (
    <div>
      <MainHeader />
      <Stack spacing={3}>
        <TextField
          variant="standard"
          type="text"
          id="cityName"
          placeholder="Type your city name or zip code here"
          value={enteredCity}
          onChange={cityChangeHandler}
        />

        <Button
          variant="contained"
          disabled={disabled}
          onClick={addForecastHandler}
        >
          Get current weather
        </Button>
        <ForecastList items={forecasts} />
      </Stack>


      <Footer />
    </div>
  );
}

export default App;
