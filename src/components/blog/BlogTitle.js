import React from 'react';
const InfoodTitle = ({ title }) => <> <span className="infood-title" >[INFooD] </span> {title} </>;
const DefaultTitle = ({ title }) => <>{title}</>;
export const isInfoodPost = tags => tags.includes("infood");
const BlogTitle = ({ title, tags }) => {
    if (isInfoodPost(tags)) {
        return <InfoodTitle title={title} />;
    } else {
        return <DefaultTitle title={title} />;
    }
};

export default BlogTitle;