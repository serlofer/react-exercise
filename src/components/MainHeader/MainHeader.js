import background from "../../background.png";
import classes from "./MainHeader.module.css";
import { useTranslation } from "react-i18next";

const languages = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
  de: { nativeName: "Deutsch" },
};

const MainHeader = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <header className={classes.main}>
      <div className={classes.lang}>
        {Object.keys(languages).map((lng) => (
          <button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {languages[lng].nativeName}
        </button>
        ))}
      </div>
      <img src={background} className={classes.images} alt="background" />
      <h1>{t("header.title")}</h1>
    </header>
  );
};

export default MainHeader;
