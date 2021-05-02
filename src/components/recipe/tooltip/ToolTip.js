import React from 'react'
import VeganToolTip from "./VeganToolTip"
import VegetarianToolTip from "./VegetarianToolTip"

function getToolTipFromTags(tags) {
    if (isVegan(tags)) {
        return <VeganToolTip />
    }
    else if (isVegetarian(tags)) {
        return <VegetarianToolTip />
    }
    return <div></div>
}

function isVegan(tags) {
    return tags.includes("vegano");
}
function isVegetarian(tags) {
    return tags.includes("vegetariano");
}

export { getToolTipFromTags }