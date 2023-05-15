import classes from './Footer.module.css';
import { useTranslation } from "react-i18next";


const Footer = props => {
    const {t} = useTranslation();
    return (
        <footer className={classes.main}>{t('footer.text')}</footer>
    );
};

export default Footer;