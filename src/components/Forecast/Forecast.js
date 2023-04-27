import { Card, CardContent, Typography } from "@mui/material";

const Forecast = props => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.city}
        </Typography>
        <Typography variant="h5" component="div">
          {props.temperature}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Real feel: {props.realFeel}
        </Typography>
        <Typography variant="body2">
            Description: {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Forecast;