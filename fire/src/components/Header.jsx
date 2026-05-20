import logo from "../assets/logooo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="menu">
          <div className="logo">
            <a href="">
              <img src={logo} alt="" />
            </a>

            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">TICKETS</a></li>
              <li><a href="">CONTACTS</a></li>
            </ul>
          </div>

          <nav>
            <ul>
              <li><a href="">+1 893 839-23-64</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}