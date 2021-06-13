import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";

const dataPage = [
  {
    page: "Home",
    url: "https://source.unsplash.com/Im7lZjxeLhg/1600x900",
    id: "home",
    content: <Home />,
  },
  {
    page: "About",
    url: "https://source.unsplash.com/cckf4TsHAuw/1600x900",
    id: "about",
    content: <About />,
  },
  {
    page: "Portfolio",
    url: "https://source.unsplash.com/aOC7TSLb1o8/1600x900",
    id: "portfolio",
    content: "",
  },
  {
    page: "Contact",
    url: "https://source.unsplash.com/HONJP8DyiSM",
    id: "contact",
    content: <Contact />,
  },
];

export default dataPage;
