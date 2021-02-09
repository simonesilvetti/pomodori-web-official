import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import DifficultyBadge from './DifficultyBadge'
import { v4 } from 'uuid'
import IngredientList from './IngredientList'



class RecipeInfo extends React.Component {
    render() {
        const data = this.props
        return (
            <div>
                <div className="tile is-child" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <h1 className="title is-size-1" style={{ fontFamily: 'Amatic SC' }} >{data.title}</h1>
                        <div className="subtitle is-4" style={{ fontFamily: 'Amatic SC' }}>di {data.blogger}</div>
                    </div>
                    <button className="button is-rounded">Salva la ricetta</button>
                </div>
                <br></br>
                <DifficultyBadge className="tile is-child" level={data.difficulty} />
                <div className="tile is-child">TEMPO:  {data.time}</div>
                <br></br>
                <div className="tile is-child has-text-centered	">Dosi per {data.dose} persone</div>
                    <div className="tile is-child">
                    <div className="tile">
                        {data.ingredients.map((ingredient) =>
                            <IngredientList key={v4()} data={ingredient} />)}
                    </div>
                    </div>
            
                {/* <p className="pt-10">{data.ingredients}</p> */}

            </div>
        );
    }
}

export default RecipeInfo;