import React from "React";
import Contactfrom from "./Contactform"
import { Jumbotron, Button } from 'reactstrap';

const Contact =()=>{
    return (
        <>     

<div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
<div className = "row">
<div className ="c01-ad-5">
<Contactfrom/>
</div>
</div>
<div className = "col md 7">
<div> list of contact </div>
</div>
    </>
);
};
export default Contact;