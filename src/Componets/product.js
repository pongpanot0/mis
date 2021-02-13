  
import React, { Component } from 'react'
import data from '../data';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <div  class = "text-black" ><Row>
                {
                    
                    data.products.map(itme =>
                        <Col md={3}>
                            <Card>
                                <CardImg  src={itme.pic}/> 
                                <CardBody>
                           <CardTitle> {itme.name} </CardTitle>
                                    <CardSubtitle>{itme.herf}</CardSubtitle>
                                   <CardSubtitle  tag={Link} to= "./en">  {itme.stock}</CardSubtitle>
                    </CardBody>
                            </Card>
                        </Col>
                    )



                }
          </Row>  </div>
        )
    }
}