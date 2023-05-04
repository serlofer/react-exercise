import { Paper, CardMedia, Typography, Grid, Button } from "@mui/material";
import classes from "./Forecast.module.css";
import { useState } from "react";
import ForecastFiveDaysModal from "../UI/ForecastFiveDaysModal";

const Forecast = (props) => {
  const iconLink = "http://openweathermap.org/img/w/" + props.icon + ".png";
  const [fiveDaysModal, setFiveDaysModal] = useState(false);
  const [forecast, setForecast] = useState([]);
  const key = "c07c21117a73eb80fa09cc6e1c31d33c";

  let forecastPetition =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    props.city +
    "&units=metric" +
    "&lang=ES" +
    "&appid=" +
    key;

  const showFiveDaysModalHandler = () => {
    fetch(forecastPetition)
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {        
        const res = data.list.slice(0,5);
        setForecast(res);
      })
      .catch(function () {
        console.log("There was an error while getting the forecast response");
      });
    //Modal visible
    setFiveDaysModal(true);
  };

  const hideFiveDaysModalHandler = () => {
    setFiveDaysModal(false);
  };

  return (
    <div>
      {fiveDaysModal && (
        <ForecastFiveDaysModal
          city={props.city}
          onBackClick={hideFiveDaysModalHandler}
          forecasts={forecast}
        />
      )}
      <Button onClick={showFiveDaysModalHandler}>
        <Paper elevation={12}>
          <Grid container>
            <Grid item xs="8">
              <Typography component="div">{props.city}</Typography>
              <Typography component="div" variant="h5">
                {props.temperature}
              </Typography>
              <Typography component="div">
                Real feel: {props.realFeel}
              </Typography>
              <Typography component="div">{props.description}</Typography>
            </Grid>
            <Grid item xs="4">
              <CardMedia
                className={classes.main}
                component="img"
                sx={{ width: "0 auto" }}
                image={iconLink}
                alt="Forecast icon"
              />
            </Grid>
          </Grid>
        </Paper>
      </Button>
    </div>
  );
};

export default Forecast;
