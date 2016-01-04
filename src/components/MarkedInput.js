import React from 'react';

export const MarkedInput = ({
  value,
  onChange,
  id,
  classNames
}) => (
  <div className={classNames.textContainer}>
    <textarea
      id={id}
      onChange={onChange}
      value={value} />
  </div>
);
