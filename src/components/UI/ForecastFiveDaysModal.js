import {
  Button,
  Grid,
  Card,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";
import classes from "./ForecastFiveDaysModal.module.css";
import { useTranslation } from "react-i18next";

const ForecastFiveDaysModal = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{t('forecast.fiveDays')}{props.city}</h2>
        </header>
        <Container className={classes.content}>
          <Grid
            key={props.city}
            container
            spacing={2}
            className={classes.content}
          >
            {props.forecasts.map((forecast) => (
              <Grid key={forecast.dt} item xs={2.25} className={classes.item}>
                <Typography component="div">{forecast.main.temp}ºC</Typography>
                <Typography component="div">
                  Real feel:{forecast.main.feels_like}ºC
                </Typography>
                <p className={classes.overflow}>
                  {forecast.weather[0].description}
                </p>
                <CardMedia
                  className={classes.item}
                  component="img"
                  sx={{ width: "0 auto" }}
                  image={
                    "http://openweathermap.org/img/w/" +
                    forecast.weather[0].icon +
                    ".png"
                  }
                  alt="Forecast icon"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <footer>
          <Button
            variant="contained"
            onClick={props.onBackClick}
            className={classes.button}
            m={5}
          >
            Go back
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ForecastFiveDaysModal;
