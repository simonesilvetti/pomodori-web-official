import React from 'react'
import { v4 } from 'uuid'

class IngredientList extends React.Component {
    render() {
        const { data } = this.props
        return (<div className="tile is-parent">
            <div className="tile is-child box">
                    <p className="subtitle is-size-3 has-text-centered" style={{ fontFamily: 'Amatic SC' }}>{data.section}</p>
                        {data.ingredients.map((ingredient) => <div key={v4()} className="has-text-centered">{ingredient}</div>)}
            </div>
        </div>

        );
    }
}

export default IngredientList;
