import { Paper, CardMedia, Typography, Grid } from "@mui/material";
import classes from "./Forecast.module.css";

const Forecast = (props) => {
  const iconLink = "http://openweathermap.org/img/w/" + props.icon + ".png";
  return (
    <Paper elevation={12}>
      <Grid container>
        <Grid item xs="8">
          <Typography component="div">{props.city}</Typography>
          <Typography component="div" variant="h5">
            {props.temperature}
          </Typography>
          <Typography component="div">Real feel: {props.realFeel}</Typography>
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
  );
};

export default Forecast;
