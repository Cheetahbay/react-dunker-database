import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Dunker = ({ dunker, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <ul className="list-group">
          {dunker.map((dunk) => (
            <Row>
              <li key={dunk.Name} className="list-group-item">
                  <Col>{dunk.Name}</Col>
                  <Col>{dunk.League}</Col>
              </li>
            </Row>
          ))}
        </ul>
        <p>{dunker.Name}</p>
        <p>{dunker.Location}</p>
        <p>{dunker.League}</p>
      </div>
    );
  }
};

export default Dunker;
