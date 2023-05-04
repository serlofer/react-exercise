import { Button, Grid, Card, Typography, CardMedia } from "@mui/material";
import classes from "./ForecastFiveDays.module.css";

const ForecastFiveDaysModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Forecast for five days in {props.city}</h2>
        </header>
        <div className={classes.content}>
          <Grid container spacing={5} >
            {props.forecasts.map((forecast) => (
              <Grid item xs="2.2">
                <Typography component="div">
                  Real feel: {forecast.main.feels_like}
                </Typography>
                <Typography component="div">{forecast.weather[0].description}</Typography>
                <CardMedia
                  className={classes.main}
                  component="img"
                  sx={{ width: "0 auto" }}
                  image={
                    "http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png"
                  }
                  alt="Forecast icon"
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <footer>
          <Button variant="contained" onClick={props.onBackClick}>
            Go back
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ForecastFiveDaysModal;
