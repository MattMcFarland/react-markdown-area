import React from 'react';

export const MarkedToolbar = ({
  isPreview,
  onDisablePreview,
  onEnablePreview,
  classNames
}) => (
  <menu>

    <button
      className={isPreview ?
        classNames.defaultButton :
          classNames.activeButton}
      onClick={onDisablePreview} >
      <span>Edit</span>
    </button>

    <button
      className={isPreview ?
        classNames.activeButton :
          classNames.defaultButton}
      onClick={onEnablePreview} >
      <span>Preview</span>
    </button>

    <a target='_blank'
       href='//help.github.com/articles/github-flavored-markdown/'
       title='learn more about github flavored markdown'
       className={classNames.helpLink} >
         <span>Help</span>
    </a>

  </menu>
);
