import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import { Button, TextField, Stack } from "@mui/material";
import { useState } from "react";

function App() {
  const [enteredCity, setEnteredCity] = useState("");
  const [disabled, setDisabled] = useState(true);
  const key = "c07c21117a73eb80fa09cc6e1c31d33c";

  let petition =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    enteredCity +
    "&units=metric" +
    "&appid=" +
    key;

  const getWeatherHandler = () => {
    if (enteredCity.trim().length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    //Reset field and button
    setEnteredCity("");
    setDisabled(true);

    fetch(petition)
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        console.log(data);
      })
      .catch(function () {
        console.log("There was an error while getting the response");
      });
  };

  // const addForecastHandler = (event) => {
  //   event.preventDefault();
  // };

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
          onClick={getWeatherHandler}
        >
          Get current weather
        </Button>
      </Stack>

      <Footer />
    </div>
  );
}

export default App;
