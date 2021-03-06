import React from 'react'
import { ImLeaf } from "react-icons/im"

const VegetarianToolTip = () => (
  <div className="tooltip">
    <ImLeaf className="vegetarian-leaf" size={25} color="#508b41" />
    <span className="tooltiptext subtitle is-5">vegetariano</span>
  </div>
)

export default VegetarianToolTip