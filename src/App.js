import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import { Container, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import ForecastList from "./components/Forecast/ForecastList";
import classes from "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { buttonActions } from "./store/searchButton";
import { useTranslation } from "react-i18next";

function App() {
  const {t} = useTranslation();
  const [weather, setWeather] = useState([]);
  const [enteredCity, setEnteredCity] = useState("");
  const key = "c07c21117a73eb80fa09cc6e1c31d33c";
  const buttonState = useSelector(state => state.searchButton.isDisabled);
  const dispatch = useDispatch();

  let weatherPetition =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    enteredCity +
    "&units=metric" +
    "&lang=" + t('lang') + 
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
    // cityChangeHandler();
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
    dispatch(
      buttonActions.checkToActivate(event.target.value.toString().trim().length)
    );
  };

  return (
    <Container maxWidth="md">
      <MainHeader />
      <Grid container className={classes.input} mt={3}>
        <Grid item xs={4} />
        <Grid item xs={3}>
          <TextField
            variant="standard"
            type="text"
            id="cityName"
            placeholder={t('input.placeholder')}
            value={enteredCity}
            onChange={cityChangeHandler}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            disabled={buttonState}
            onClick={addForecastHandler}
          >
            {t('input.buttonText')}
          </Button>
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <Container>
        <ForecastList lang={t('lang')} items={weather} apiKey={key} />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
