import React from 'react'
import advantage1 from "../../../design/images/advantage-1.png";
import advantage2 from "../../../design/images/advantage-2.png";
import advantage3 from "../../../design/images/advantage-3.png";

const Advantages = () => {
  return (
    <div className='advantages'>
        <div className="container">
            <div className="advantages-inner">
                <div className="advantage">
                    <img src={advantage1} alt="advantageImage" />
                    <h4>Çatdırılma</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
                <div className="advantage">
                    <img src={advantage2} alt="advantageImage" />
                    <h4>Kredit</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
                <div className="advantage">
                    <img src={advantage3} alt="advantageImage" />
                    <h4>Zəmanət</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages