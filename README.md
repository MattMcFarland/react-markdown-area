# React-Markdown-Area

An enhanced textarea control built with and
for [React](http://facebook.github.io/react/index.html).
Initially built for use in tuts-wanted.

## Installation

The easiest way to use `React-Markdown-Area` is to install it from NPM and
include it in your own React build process
(using [Browserify](http://browserify.org), etc).

It is made with ES7 but the install file is compiled to ES5 to be compatible
with more projects.

```
npm install react-markdown-area --save
```

## Basic Usage

React-Markdown-Area is made up of components and containers.   Components
are stateless, and the containers it comes with carry state.  The containers
are easy to use and great for beginners.  More advanced users will benefit
from creating their own containers that use the react-markdown-area components.
You can think of them as **helpers**


### MarkedArea
```javascript


var MarkedArea = require('react-markdown-area').MarkedArea;

<MarkedArea />

```

#### MarkedArea Props

react-markdown-area is really a suite of markdown text editing helper
components and fully working containers, you can also customize `<MarkedArea/>`:

<table>
<thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
<tbody>
  <tr><td>  label </td><td>string</td> <td>text displayed in the `label` tag,
  default is an empty string</td></tr>

  <tr><td>  id  </td><td>string</td> <td>unique DOM element ID, default is
  `mmc-marked-area`</td></tr>

  <tr><td>  onChange  </td> <td>string</td> <td>tfunction called on change,
  default is an internal function that updates state</td></tr>

  <tr><td>  classNames  </td> <td>string</td> <td>text displayed in the
   `label` tag, default is an empty string</td></tr>

  <tr><td> value </td> <td>string</td> <td>value, works similar like any other
  form element value.</td></tr>

</tbody>
</table>

> You can also use the `import` statement instead of `require`

### LiveMarkedArea

The helpers components explained later also make up a fully functional
live markdown editor with preview.  You can use this for inspiration, or
customize it, or make your own:

```javascript
 import { LiveMarkedArea } from 'react-markdown-area';
```

> LiveMarkedArea has similar props to MarkedArea. Not all props are listed
in this readme, to see them all, take a look at [the source](src/containers).


### Building your own with helpers.

Since version 0.2.0, react-markdown-area now lets you compose the
 text editor in *your own way* - allowing you to have more
 flexibility with the flow of state.


```javascript

import {
  MarkedInput,
  MarkedPreview,
  Markedtoolbar } from 'react-markdown-area';

// Here is a live preview editor


export class LiveMarkedArea extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue ? props.defaultValue : ''
    };
  }
  static defaultProps = {
    id: 'mmc-marked-area',
    label: '',
    classNames: {
      root: 'marked-area',
      header: 'marked-area-header',
      activeButton: 'marked-area-button active',
      defaultButton: 'marked-area-button',
      helpLink: 'marked-area-help-link',
      textContainer: 'marked-area-text-container',
      liveDivider: 'marked-area-live-divider'
    }
  };
  handleTextChange = (e) => {
    this.setState({value: e.target.value});
  };
  render() {
    let {id, label, classNames, placeholder} = this.props;
    let {value} = this.state;
    return (
    <section className={classNames.root}>

      <header className={classNames.header}>
        <label htmlFor={id}>{label}</label>
      </header>

        <MarkedInput
          placeholder={placeholder}
          classNames={classNames}
          onChange={this.handleTextChange}
          value={value} />

        <MarkedPreview classNames={classNames}
          value={value} />

    </section>
    );
  }
}





```

### classNames are required


<table>
<thead><tr><th>ClassNames</th><th>Default</th><th>Description</th></tr></thead>
<tbody>

  <tr> <td> root </td>
       <td> marked-area </td>
       <td> The top-level wrapping element. </td>
  </tr>

  <tr> <td> root </td>
       <td> marked-area-header  </td>
       <td> Heading element that wraps the controls </td>
  </tr>

  <tr> <td> root </td>
       <td> marked-area-button.active </td>
       <td> Used to indicate the active tab </td>
  </tr>

  <tr> <td> root </td>
       <td> marked-area-button </td>
       <td> text displayed in the `label` tag, default is an empty string </td>
  </tr>

  <tr> <td> root </td>
       <td> marked-area-help-link </td>
       <td> used for the help link </td>
  </tr>

  <tr> <td> root </td>
       <td> marked-area-text-container </td>
       <td> Wraps both preview and textarea </td>
  </tr>

</tbody>
</table>




## License

BSD Licensed. Copyright (c) Matt McFarland 2015-2016.

## Changelog:


### v0.3.1

#### Fixes:
 - add missing dependency for dev version.

### v0.3.0:

#### Features
 - Additional documentation
 - Code refactored to be more extensible
 - Code refactored to build to ES5 for more compatibility

### v0.2.1:

#### Fixes:
 - Merge issues

### v0.2.0:

#### Features:
 - Implementing TDD
 - Update Documentation
 - Improve component composition

#### Fixes:
 - Webpack and Browserify now both work.
 - DevOps refactored to build with babel first

#### Breaking Changes:

 - dependencies marked, react, and react-dom have been re-added.
 - standalone version have been **removed**
 - marked has been added back as a dependency.


### v0.1.0:
 - Removed dependency inclusion, this dramatically reduced file size, but you will need to install dependencies for this to work.

### v0.0.0 to v0.0.9:

Initial Release.
