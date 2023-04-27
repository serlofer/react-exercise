import Forecast from "./Forecast";

const ForecastList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no recent forecasts</h2>;
  }

  return (
    <div>
      {props.items.map((forecast) => (
        <Forecast
          id={forecast.id}
          city={forecast.city}
          temperature={forecast.temperature}
          realFeel={forecast.realFeel}
          description={forecast.description}
        />
      ))}
    </div>
  );
};

export default ForecastList;
