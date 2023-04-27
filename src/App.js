import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [enteredCity, setEnteredCity] = useState("");
  const key = "c07c21117a73eb80fa09cc6e1c31d33c";
  
  const getWeatherHandler = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        enteredCity +
        "&appid=" +
        key
    )
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

  const addForecastHandler = () => {};

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  return (
    <div>
      <MainHeader />
      <Box sx={{ my: 4 }}>
        <form onSubmit={addForecastHandler}>
          <label htmlFor="cityName">City Name:</label>
          <input
            type="text"
            id="cityName"
            placeholder="Type your city name here"
            value = {enteredCity}
            onChange={cityChangeHandler}
          />
        </form>

        <button onClick={getWeatherHandler}>Get current weather</button>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
        </Typography>
      </Box>

      <Footer />
    </div>
  );
}

export default App;
