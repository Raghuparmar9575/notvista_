import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";

export default function SimpleSlider() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <h3 style={{ textAlign: "left", marginTop: "20px" }}>
        What students say about us{" "}
      </h3>

      <Slider {...settings}>
        <div className="card-container">
          <Card className="slick-card">
            <Card.Title>
              <img
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgn5xUSvlFoBNJksL5OxHH1bO1JPeR6f1DfuOMDDqMA&s"
                alt=""
              />
            </Card.Title>
            <Card.Body>
              {" "}
              Notevista offers an exceptional online experience! The website's
              intuitive navigation makes it effortless to find what I need.
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card className="slick-card">
            <Card.Title>
              <img
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgn5xUSvlFoBNJksL5OxHH1bO1JPeR6f1DfuOMDDqMA&s"
                alt=""
              />
            </Card.Title>
            <Card.Body>
              Notevista offers an exceptional online experience! The website's
              intuitive navigation makes it effortless to find what I need.
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card className="slick-card">
            <Card.Title>
              <img
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgn5xUSvlFoBNJksL5OxHH1bO1JPeR6f1DfuOMDDqMA&s"
                alt=""
              />
            </Card.Title>
            <Card.Body>
              Notevista offers an exceptional online experience! The website's
              intuitive navigation makes it effortless to find what I need.
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card className="slick-card">
            <Card.Title>
              <img
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgn5xUSvlFoBNJksL5OxHH1bO1JPeR6f1DfuOMDDqMA&s"
                alt=""
              />
            </Card.Title>
            <Card.Body>
              {" "}
              Notevista offers an exceptional online experience! The website's
              intuitive navigation makes it effortless to find what I need.
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card className="slick-card">
            <Card.Title>
              <img
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgn5xUSvlFoBNJksL5OxHH1bO1JPeR6f1DfuOMDDqMA&s"
                alt=""
              />
            </Card.Title>
            <Card.Body>
              Notevista offers an exceptional online experience! The website's
              intuitive navigation makes it effortless to find what I need.
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card className="slick-card">
            <Card.Title>
              <img
                width={50}
                height={50}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgn5xUSvlFoBNJksL5OxHH1bO1JPeR6f1DfuOMDDqMA&s"
                alt=""
              />
            </Card.Title>
            <Card.Body>
              Notevista offers an exceptional online experience! The website's
              intuitive navigation makes it effortless to find what I need.
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </>
  );
}
