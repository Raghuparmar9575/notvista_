import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Cards";
import { useContext, useEffect } from "react";
import { useGlobalContext } from "../Context";
import Notes from "../Components/Notes";
import Secondnotes from "../Components/Secondnotes";
import Shopsection from "../Components/ShopSection";
import Ads from "../Components/Ads";
import First from "../Components/First";
import SecGrid from "../Components/SecGrid";
import SimpleSlider from "../Components/Slick";

const Home = () => {
  const { NotesSection } = useGlobalContext();
  useEffect(() => {
    NotesSection();
  }, []);
  return (
    <>
      <First />
      <Container className="mt-5">
        <img width={"100%"} height={400} src="images/Bg1.jpg" alt="" />
      </Container>
      <Notes />
      <Ads />
      <Secondnotes />
      <SecGrid />
      <Shopsection />
      <Ads />
      <SimpleSlider />
    </>
  );
};

export default Home;
