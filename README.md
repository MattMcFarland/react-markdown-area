# React-Markdown-Area

An enhanced textarea control built with and for [React](http://facebook.github.io/react/index.html). Initially built for use in tuts-wanted.

## Demo & Examples

Live demo: [mattmcfarland.github.io/react-markdown-area]( http://mattmcfarland.github.io/react-markdown-area/examples)

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

You can also use the standalone build by including `dist/markedarea.js` in your page. The standalone build contains all the dependencies, so for less bloat its better to use NPM.

## Usage

React-Markdown-Area generates two buttons for switching between live and edit mode, a textarea, and a preview pane.
The bundled package comes with a minimal and namespaced amount of CSS.  You can change the classnames of each element in use by modifying the `classNames` prop.

```
var MarkedArea = require('react-markdown-area');
// Or import {MarkedArea} from 'react-markdown-area';

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