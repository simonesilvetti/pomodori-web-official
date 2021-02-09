import React from 'react'
import PropTypes from 'prop-types'
import { GiTomato } from "react-icons/gi";
import { v4 } from 'uuid'



const DifficultyBadge = ({ level }) => (
    <div><span>DIFFICOLTA:  </span>
        {[...Array(level)].map(_ =>
            <GiTomato key={v4()} style={{ fill: '#D62F05' }} />
        )}
        {[...Array(3 - level)].map(_ =>
            <GiTomato key={v4()} style={{ fill: '#DE3E2D7D' }} />
        )
        }
    </div>
)

DifficultyBadge.propTypes = {
    level: PropTypes.number.isRequired
}


export default DifficultyBadge