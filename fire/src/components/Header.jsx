
import i18n from './../i18n';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  return (

    <header className="header">
      <div className="container">
        <div className="menu">
          <div className="logo">
            <a href="">
              <img src="./assets/logooo.svg" alt="" />
            </a>

            <ul>
              <li><a href="">{t("home")}</a></li>
              <li><a href="">{t("about")}</a></li>
              <li><a href="">{t("tickets")}</a></li>
              <li><a href="">{t("contacts")}</a></li>
            </ul>
          </div>

          <nav>
            <ul>
              <li><a href="">{t("phone")}</a></li>
              <button onClick={() => i18n.changeLanguage('am')}>AM</button>
              <button onClick={() => i18n.changeLanguage('en')}>En</button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}