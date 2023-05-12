import Forecast from "./Forecast";
import { Grid } from "@mui/material";
import classes from "./ForecastList.module.css";
import { useTranslation } from "react-i18next";

const ForecastList = (props) => {
  const {t} = useTranslation();

  if (props.items.length === 0) {
    return (
      <Grid container m={5} justifyContent={"center"}>
        <h2>{t('result.empty')}</h2>
      </Grid>
    );
  }

  return (
    <Grid container className={classes.main} mb={3} mt={3}>
      {props.items.map((forecast) => (
        <Grid item xs={4} key={forecast.id} minWidth={230}>
          <Forecast
            city={forecast.city}
            temperature={forecast.temperature + " ºC"}
            realFeel={forecast.realFeel + " ºC"}
            description={forecast.description}
            icon={forecast.icon}
            lang={props.lang}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ForecastList;
