import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import VegetarianToolTip from './recipe/VegetarianToolTip'
import TagList from './TagList'
import { Link } from 'gatsby'

const RecipeCardList = ({ card }) => {
    return (
        <div className="is-parent column is-12" key={card.id}>
            <article
                className='blog-list-item tile is-parent box'
            >
                <div className="tile is-child is-2">
                    {card.featuredimage ? (
                        <div>
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: card.featuredimage,
                                    alt: `featured image thumbnail for post ${card.title}`,
                                }}
                                style={{ maxHeight: '170px', maxWidth: '170px' }}
                            />
                        </div>
                    ) : null}
                </div>
                <div className="tile is-child is-10">
                    <div className="tile is-parent" >
                        <div className="tile is-child" >
                            <div className="post-meta">
                                <Link
                                    className="subtitle has-text-black is-size-3"
                                    to={card.slug}
                                >
                                    {card.title}{card.tags.includes("vegetariano") ? <VegetarianToolTip /> : null}
                                </Link>
                            </div>
                            <div className="tile is-child" >
                                {card.excerpt}
                            </div>
                            <div className="tile is-child" >
                                <TagList tags={card.tags} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>
        <Link className="button" to={post.fields.slug}>
          Continua a leggere →
        </Link>
      </p> */}
            </article>
        </div>
    );
}

export default RecipeCardList;