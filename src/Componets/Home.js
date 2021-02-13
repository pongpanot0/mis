import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Slider from './Slider'
import Ac from './Ac'
import En from './En'
const Example = (props) => {
  return (
    <div>
      <Slider />
      <br></br><br></br> <br></br><br></br> <br></br><br></br>
      <h1 align='center'>     <h1 class="display-1">แผนกฝึกอบรม</h1> </h1>
      <br></br>
      <hr width="1200" color="white" size="270" />
      <br></br>   <br></br>
      <h2 align = 'center' >  &nbsp; &nbsp; &nbsp;เพื่อพัฒนาพนักงานให้สามารถปฎิบัติหน้าที่ได้อย่างมีประสิทธิภาพ สนองความต้องการของลูกค้า 
        <br/> ตามนโยบายคุณภาพของบริษัทฯพร้อมทั้งปรับปรุงพัฒนาให้สอดคล้องกับกฎหมาย </h2>
      <br></br>   <br></br>
    </div>
  );
};

export default Example;