import React, { useState } from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const arr = [];

function Card() {
    const[range, setRange] = useState(50);
    const[allocatedList, setAllocatedList] = useState([2, 8, 10]);
    const emptySlots = [];

    for(let i=1; i<=range; i++){
      if(allocatedList.includes(i) == true){
        arr[i] = {'id' : i, 'title' : 'Slot ' + i, 'freestatus' : true};
      }
      else if(allocatedList.includes(i) == false){
        arr[i] = {'id' : i, 'title' : 'Slot ' + i, 'fressstatus' : false};
      }
    }

    const addMore = () => {
      setRange(range + 10)
    }
    
    const fillSlot = (num) => {
      const index = emptySlots.indexOf(num)
      console.log('the index is' + index);
      setAllocatedList(allocatedList => [...allocatedList, num])
    }

    const popover = (data) => (
        <Popover id="popover-basic">
        <Popover.Header as="h3">Menu</Popover.Header>
        <Popover.Body>
            {data.freestatus==true ? 'Already Allocated' : 
            <button
            on onClick={()=>{fillSlot(data.id)}}>Free Up</button>
            }
        </Popover.Body>
        </Popover>
    )

    return (
        <div className="container my-3">
            <div className="row">
              <h3 style={{textAlign: 'center', margin:"20px", color:"black"}}>Packing Management System</h3>
            </div>
            <div className="row">
              {
                arr.map((car, index) => {
                  return(
                    <div className="col" style={{marginTop:"10px"}} md={2} key={index}>
                      <div className="border top text-center">
                          { car.title }
                          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover(car)}>
                            <button variant="success">Book a Slot</button>
                          </OverlayTrigger> 
                      </div>
                    </div>
                  )
                })
              }
            </div>
        <button variant="primary" style={{marginTop:"6rem", color: "red", border: "2px solid red", borderRadius: "20px"}} onClick={addMore}>Add More</button>
        </div>
    );
}

export default Card;