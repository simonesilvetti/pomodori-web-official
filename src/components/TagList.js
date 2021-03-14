import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const TagList = ({ tags }) => {
    return (
        <ul className="taglist">
            {tags.map((tag) => (
                <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>
                        <div className="tag is-medium ">
                            {tag}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default TagList;
