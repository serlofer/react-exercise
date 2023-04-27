import background from '../../background.png';
import classes from './MainHeader.module.css';
import { TextField } from '@mui/material';

const MainHeader = props => {
    return (
        <header className={classes.main}>
        <img src={background} className={classes.images} alt="background" />
        <h1>
          Forecast provider
        </h1>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </header>
    );
};

export default MainHeader;