import background from '../../background.png';
import classes from './MainHeader.module.css';

const MainHeader = props => {
    return (
        <header className={classes.main}>
        <img src={background} className={classes.images} alt="background" />
        <h1>
          Forecast provider
        </h1>
      </header>
    );
};

export default MainHeader;