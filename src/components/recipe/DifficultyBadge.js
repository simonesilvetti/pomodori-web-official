import React from 'react'
import PropTypes from 'prop-types'
import { GiTomato } from "react-icons/gi";
import { v4 } from 'uuid'



const DifficultyBadge = ({ level }) => (
    <p className="pt-10">DIFFICOLTA:
        {[1,2].map(_ =>
            <GiTomato key={v4()} style={{ fill: '#DE3E2D' }} />
        )}
        {[1].map(_ =>
                <GiTomato key={v4()} style={{ fill: '#DE3E2D7D' }} />
            )
            }
    </p>
)

DifficultyBadge.propTypes = {
    level: PropTypes.number.isRequired
}


export default DifficultyBadge