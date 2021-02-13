import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
const Ac = (props) => {
  return (
    <CardDeck>
      <Card>
      < CardImg  tag={Link} to="Ac2"   > < img src="./images/cou/ปั้มน้ำดี.jpg"  width="495" height="257" / ></CardImg>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
        </CardBody>
      </Card>
      <Card>
      < CardImg  tag={Link} to="Ac2"   > < img src="./images/AccessControl.pdf"  width="495" height="257" / ></CardImg>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

        </CardBody>
      </Card>
      <Card>
      < CardImg  tag={Link} to="Ac2"   > < img src="./images/cou/ปั้มน้ำดี.jpg"  width="495" height="257" / ></CardImg>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Ac;