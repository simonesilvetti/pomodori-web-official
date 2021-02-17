import React from 'react'
import DifficultyBadge from './DifficultyBadge'
import { v4 } from 'uuid'
import IngredientList from './IngredientList'
import ShareBadge from '../ShareBadge'
import VegetarianToolTip from './VegetarianToolTip'


class RecipeInfo extends React.Component {
    render() {
        const data = this.props
        const url = typeof window !== 'undefined' ? window.location.href : 'https://pomodorialsole.com/';
        return (
            <div>
                <div className="tile is-child" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <h1 className="title is-size-1" >{data.title} {data.vegetarian ? <VegetarianToolTip /> : null}</h1>
                        <div className="subtitle is-4">di {data.blogger}</div>
                    </div>
                    <ShareBadge url={url} content={data.title} />
                </div>
                <br></br>
                <DifficultyBadge className="tile is-child" level={data.difficulty} />
                <div className="tile is-child">TEMPO:  {data.time}</div>
                <br></br>
                <div className="tile is-child has-text-centered	">Dosi per {data.dose}</div>
                <div className="tile is-child">
                    <div className="tile">
                        {data.ingredients.map((ingredient) =>
                            <IngredientList key={v4()} data={ingredient} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeInfo;

