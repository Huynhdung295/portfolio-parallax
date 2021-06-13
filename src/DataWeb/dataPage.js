import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";



const dataPage = [
  {
    page: "Home",
    url: "https://source.unsplash.com/Im7lZjxeLhg" ,
    id: "home",
    content: <Home />,
  },
  {
    page: "About",
    url: "https://source.unsplash.com/cckf4TsHAuw",
    id: "about",
    content: <About />,
  },
  {
    page: "Portfolio",
    url: "https://source.unsplash.com/aOC7TSLb1o8",
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
