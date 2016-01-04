import React from 'react';

const marked = require('marked');

export const MarkedPreview = ({
  value,
  classNames
}) => (
  <div className={classNames.textContainer}>

    <div dangerouslySetInnerHTML = {{
      __html: marked(value.toString(), {sanitize: true})
    }} />

  </div>
);
