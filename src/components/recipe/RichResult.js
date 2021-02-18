import React from 'react'
import useSiteMetadata from '../SiteMetadata'

export default (recipe) => {
    const { siteUrl } = useSiteMetadata()
    let featuredImage = [recipe.featuredimage.childImageSharp.fluid.src]
    let otherImages = recipe.images ? recipe.images.map(element => element.image.childImageSharp.fluid.src) : []
    let images = featuredImage.concat(otherImages).map(address => siteUrl + address)
    let data = {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": recipe.title,
        "image": images,
        "author": {
            "@type": "Person",
            "name": recipe.blogger
        },
        "datePublished": recipe.date,
        "description": recipe.description,
        // "prepTime": "PT20M",
        // "cookTime": "PT30M",
        // "totalTime": "PT50M",
        "keywords": recipe.tags.toString(),
        //"recipeYield": "10",
        //"recipeCategory": "Dessert",
        "recipeCuisine": "Italian",
        // "nutrition": {
        //     "@type": "NutritionInformation",
        //     "calories": "270 calories"
        // },
        // "recipeIngredient": recipe.ingredients,
        // "recipeInstructions": [
        //     {
        //         "@type": "HowToStep",
        //         "name": "Preheat",
        //         "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",
        //         "url": "https://example.com/party-coffee-cake#step1",
        //         "image": "https://example.com/photos/party-coffee-cake/step1.jpg"
        //     },
        //     {
        //         "@type": "HowToStep",
        //         "name": "Mix dry ingredients",
        //         "text": "In a large bowl, combine flour, sugar, baking powder, and salt.",
        //         "url": "https://example.com/party-coffee-cake#step2",
        //         "image": "https://example.com/photos/party-coffee-cake/step2.jpg"
        //     },
        //     {
        //         "@type": "HowToStep",
        //         "name": "Add wet ingredients",
        //         "text": "Mix in the butter, eggs, and milk.",
        //         "url": "https://example.com/party-coffee-cake#step3",
        //         "image": "https://example.com/photos/party-coffee-cake/step3.jpg"
        //     },
        //     {
        //         "@type": "HowToStep",
        //         "name": "Spread into pan",
        //         "text": "Spread into the prepared pan.",
        //         "url": "https://example.com/party-coffee-cake#step4",
        //         "image": "https://example.com/photos/party-coffee-cake/step4.jpg"
        //     },
        //     {
        //         "@type": "HowToStep",
        //         "name": "Bake",
        //         "text": "Bake for 30 to 35 minutes, or until firm.",
        //         "url": "https://example.com/party-coffee-cake#step5",
        //         "image": "https://example.com/photos/party-coffee-cake/step5.jpg"
        //     },
        //     {
        //         "@type": "HowToStep",
        //         "name": "Enjoy",
        //         "text": "Allow to cool and enjoy.",
        //         "url": "https://example.com/party-coffee-cake#step6",
        //         "image": "https://example.com/photos/party-coffee-cake/step6.jpg"
        //     }
        // ],
        // "aggregateRating": {
        //     "@type": "AggregateRating",
        //     "ratingValue": "5",
        //     "ratingCount": "18"
        // },
        // "video": {
        //     "@type": "VideoObject",
        //     "name": "How to make a Party Coffee Cake",
        //     "description": "This is how you make a Party Coffee Cake.",
        //     "thumbnailUrl": [
        //         "https://example.com/photos/1x1/photo.jpg",
        //         "https://example.com/photos/4x3/photo.jpg",
        //         "https://example.com/photos/16x9/photo.jpg"
        //     ],
        //     "contentUrl": "http://www.example.com/video123.mp4",
        //     "embedUrl": "http://www.example.com/videoplayer?video=123",
        //     "uploadDate": "2018-02-05T08:00:00+08:00",
        //     "duration": "PT1M33S",
        //     "interactionStatistic": {
        //         "@type": "InteractionCounter",
        //         "interactionType": { "@type": "http://schema.org/WatchAction" },
        //         "userInteractionCount": 2347
        //     },
        //     "expires": "2019-02-05T08:00:00+08:00"
        // }
    }

    // // brand
    // if (prod['brand']) {
    //     data['mpn'] = prod['brand'];
    //     data['brand'] = {
    //         "@type": "Thing",
    //         "name": `${prod['brand']}`
    //     };
    // }

    // // logo
    // if (prod['logo']) {
    //     data['logo'] = imgPath + prod['logo'];
    // }

    return (
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>)
};