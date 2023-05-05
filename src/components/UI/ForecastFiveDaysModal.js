import { Button, Grid, Card, Typography, CardMedia, Container } from "@mui/material";
import classes from "./ForecastFiveDaysModal.module.css";

const ForecastFiveDaysModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Forecast for five days in {props.city}</h2>
        </header>
        <Container className={classes.content}>
          <Grid key={props.city} container spacing={2} className={classes.content}>
            {props.forecasts.map((forecast) => (
              <Grid key={forecast.dt} item xs={2.2} className={classes.item}>
                <Typography component="div">  
                  {forecast.main.temp}ºC
                </Typography>
                <Typography component="div">
                  Real feel:{forecast.main.feels_like}ºC
                </Typography>
                <Typography component="div">{forecast.weather[0].description}</Typography>
                <CardMedia
                  className={classes.item}
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
        </Container>
        <footer>
          <Button variant="contained" onClick={props.onBackClick} className={classes.button}>
            Go back
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ForecastFiveDaysModal;
