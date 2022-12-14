import { Button, Container, Form, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import { search } from "../../services/unsplashService";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "../mappedCards/Cards";

const MainNav = () => {
  const [formData, setFormData] = useState("");
  const [cardsArr, setCards] = useState([]);

  const onSearchFromChange = (e) => {
    setFormData(e.target.value);
  };

  const onSearchClick = (e) => {
    let query = formData;

    if (localStorage.getItem(`${query}`) === null) {
      search(query).then(onSearchSuccess).catch(onSearchError);
    } else {
      let retrieveKey = JSON.parse(localStorage.getItem(`${query}`));
      console.log("NO API CALL GETTING FROM LOCAL STORAGE -->", retrieveKey);
      setCards(retrieveKey);
      retrieveKey.map((card) => {
        return <Cards card={card} key={"Card-" + card.id} />;
      });
    }
  };
  const onSearchSuccess = (response) => {
    console.log("onSearchSuccess is firing");
    let result = response.data?.results;
    let key = formData;
    localStorage.setItem(`${key}`, JSON.stringify(result));

    setCards(() => {
      return result;
    });
  };

  const mapCards = (card) => {
    return <Cards card={card} key={"Card-" + card.id} />;
  };

  const onSearchError = (response) => {
    console.error({ error: response });
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="nav-all">
        <Container fluid className="justify-content-center">
          <Form className="d-flex">
            <Form.Control
              type="search"
              onChange={onSearchFromChange}
              value={formData}
              id="search-box"
              name="search-value"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              className="search-btn"
              variant="outline-success"
              onClick={onSearchClick}
            >
              Search Images
            </Button>
          </Form>
        </Container>
      </Navbar>

      <div className="container">
        <div className="row">{cardsArr.map(mapCards)}</div>
      </div>
    </>
  );
};

export default MainNav;
