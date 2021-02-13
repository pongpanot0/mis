import React, {useState,useEffect} from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Contactfrom =()=>{
    const initialFieldValues ={
        fullName : '',
        images : '',
    }
    var [values,setValues] = useState (initialFieldValues)
    return (
        <div>
        <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>

 <div>display from </div>
</Form>
</div>
);
} ;
export default Contactfrom;