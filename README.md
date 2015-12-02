# React-Markdown-Area

An enhanced textarea control built with and for [React](http://facebook.github.io/react/index.html). Initially built for use in tuts-wanted.

## Demo & Examples

Live demo: [mattmcfarland.github.io/react-markdown-area]( http://mattmcfarland.github.io/react-markdown-area)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## Installation

The easiest way to use React--Markdown-Area is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

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


## Usage

React-Markdown-Area generates two buttons for switching between live and edit mode, a textarea, and a preview pane.
The bundled package comes with a minimal and namespaced amount of CSS.  You can change the classnames of each element in use by modifying the `classNames` prop.

```
var MarkedArea = require('react-markdown-area');
// Or import MarkedArea from 'react-markdown-area';

<MarkedArea label="Enter your markdown text" placeholder="Type in here"/>

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

### props.classNames

	ClassNames			|	Default		                |	Description
:-----------------------|:------------------------------|:-----------------
	root       		    |   marked-area                 |	The top-level wrapping element.
	header      		|   marked-area-header          |	The element that wraps the controls
	activeButton     	|   marked-area-button.active   |	Class used to indicate the active tab
	defaultButton       |   marked-area-button          |   Class used to indicate the inactive tab
	helpLink            |   marked-area-help-link       |   Class used for the help link
    textContainer	 	|   marked-area-text-container  |	Element that wraps the textarea or the preview.

## License

BSD Licensed. Copyright (c) Matt McFarland 2015.

## Changelog:

### v0.1.0:
 - Removed dependency inclusion, this dramatically reduced file size, but you will need to install dependencies for this to work.
 - You must now make sure to install marked as a dependency, `npm install marked`

### v0.0.0 to v0.0.9:

Initial Release.
