import React from 'react'
import { RiLeafLine } from "react-icons/ri"

const VeganToolTip = () => (
  <div className="tooltip">
    <RiLeafLine className="vegetarian-leaf" size={27} color="#508b41" />
    <span className="tooltiptext subtitle is-5">vegano</span>
  </div>
)

export default VeganToolTip