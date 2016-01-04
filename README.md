# React-Markdown-Area

An enhanced textarea control built with and for [React](http://facebook.github.io/react/index.html). Initially built for use in tuts-wanted.

## Installation

The easiest way to use `React-Markdown-Area` is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

```
npm install react-markdown-area --save
```
### Standalone

Use the standalone by including `dist/markedarea.js` or `dist/markedarea.min.js` in your page, as well as `dist/markedarea.css` or `dist/markedarea.min.css`.

You will need to make sure to have `React` and `marked` dependencies installed.

```HTML
<!-- Dependencies -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.min.js"></script>


<link rel="stylesheet" href="css/markedarea.min.css"/>
<script src="js/markedarea.min.js"></script>
```

### Browserify/WebPack

react-markedown-area is now bundled under the `UMD` classification, to reduce the need for dependencies and to simplify inclusion into your project.

for example:

```
npm install react react-dom marked
```

```javascript
var MarkedArea = require('react-markdown-area');
// Or import MarkedArea from 'react-markdown-area';
```

Because module loaders handle stylesheets differently, and there are a number of transforms out there,
you will then need to separately load the CSS file in the `lib` folder, by either copying, or using a transform, etc.  The CSS is minimal, around 40 lines of code.

<<<<<<< HEAD
## Basic Usage
=======

## Usage
>>>>>>> 96304af3a324e2c27ef19a48930eed5d66cce7d5

React-Markdown-Area generates two buttons for switching between live and edit mode, a textarea, and a preview pane.
The bundled package comes with a minimal and namespaced amount of CSS.  You can change the classnames of each element in use by modifying the `classNames` prop.

<<<<<<< HEAD
```javascript

=======
```
var MarkedArea = require('react-markdown-area');
// Or import MarkedArea from 'react-markdown-area';
>>>>>>> 96304af3a324e2c27ef19a48930eed5d66cce7d5

var MarkedArea = require('react-markdown-area').MarkedArea;

<MarkedArea />

```

### Props

	Property			|	Type		|	Description
:-----------------------|:--------------|:--------------------------------
	label       		|	string		|	text displayed in the `label` tag, default is an empty string.
	id      			|	string		|	unique DOM element ID, default is `mmc-marked-area`
	onChange     		|	string		|	function called on change, default is an internal function that updates state.
	defaultValue   		|	string		|	starting value, works similar to defaultValue for textarea
	value   		    |	string		|	value, works similar to any other form element value. default is `state.value`
	classNames 			|	object		|	classnames used for each element (see below)
	{...props}          |   object      |   All props are passed into the `textarea` and `preview` to give you more control.



```javascript

import { MarkedInput, MarkedPreview, Markedtoolbar } from 'react-markdown-area';

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



### Skinning

	ClassNames			|	Default		                |	Description
:-----------------------|:------------------------------|:-----------------
	root       		    |   marked-area                 |	The top-level wrapping element.
	header      		|   marked-area-header          |	The element that wraps the controls
	activeButton     	|   marked-area-button.active   |	Class used to indicate the active tab
	defaultButton       |   marked-area-button          |   Class used to indicate the inactive tab
	helpLink            |   marked-area-help-link       |   Class used for the help link
    textContainer	 	|   marked-area-text-container  |	Element that wraps the textarea or the preview.

## License

<<<<<<< HEAD

BSD Licensed. Copyright (c) Matt McFarland 2015-2016.

## Changelog:

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
=======
BSD Licensed. Copyright (c) Matt McFarland 2015.

## Changelog:

### v0.1.0:
 - Removed dependency inclusion, this dramatically reduced file size, but you will need to install dependencies for this to work.
 - You must now make sure to install marked as a dependency, `npm install marked`

### v0.0.0 to v0.0.9:

Initial Release.
>>>>>>> 96304af3a324e2c27ef19a48930eed5d66cce7d5
