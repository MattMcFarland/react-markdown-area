import React from 'react';
import marked from 'marked';
require('../style/markedarea.scss');


class MarkedArea extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isPreview: props.isPreview ? props.isPreview : false,
      value: props.defaultValue ? props.defaultValue : ''
    };

    this._onChange = this._onChange.bind(this);
    this.enablePreview = this.enablePreview.bind(this);
    this.disablePreview = this.disablePreview.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  get parsed () {
    return (
      <div dangerouslySetInnerHTML={ { __html: marked(this.state.value.toString(), { sanitize: true }) } } />
    );
  }
  get raw () {
    return (
          <textarea
        {...this.props}
        id={this.props.id}
        onChange={this.props.onChange || this._onChange}
        value={this.state.value}
        onKeyDown = {this.onKeyDown}
        />
    );
  }
  get tabbedToolbar () {
    return (
      <menu>
        <button
          className={this.state.isPreview ? this.props.classNames.defaultButton : this.props.classNames.activeButton }
          onClick={this.disablePreview}
          >
          <span>Edit</span>
        </button>
        <button
          className={this.state.isPreview ? this.props.classNames.activeButton : this.props.classNames.defaultButton }
          onClick={this.enablePreview}
          >
          <span>Preview</span>
        </button>
        <a
          target="_blank"
          href="//help.github.com/articles/github-flavored-markdown/"
          title="learn more about github flavored markdown"
          className={this.props.classNames.helpLink}
          >
          <span>Help</span>
        </a>
      </menu>
    );
  }
  get tabbedMode () {
    return (
      <section>
        <header className={this.props.classNames.header}>
          <label htmlFor={this.props.id}>{this.props.label}</label>
         {this.tabbedToolbar}
        </header>
        <div className={this.props.classNames.textContainer}>
          {this.state.isPreview ? this.parsed : this.raw}
        </div>
      </section>
    );
  }
  get liveMode () {
    return (
      <section>
        <header className={this.props.classNames.header}>
          <label htmlFor={this.props.id}>{this.props.label}</label>
        </header>
        <div className={this.props.classNames.textContainer}>
          {this.raw}
          <h5 className={this.props.classNames.liveDivider}>Preview:</h5>
          {this.parsed}
        </div>
      </section>
    );
  }

  _onChange (e)  {
    this.setState({ value: e.target.value });
  };
  disablePreview () {
    this.setState({ isPreview: false });
  };
  enablePreview () {
    this.setState({ isPreview: true });
  };
   onKeyDown(e){

    if (e.key === "Tab"){
      e.preventDefault();
      var is_shift = e.shiftKey;
      var index = e.target.selectionStart;
      var val = e.target.value;
      var i = index;

      for(; i >= 0; i--){
        if (val[i] === '\n')
          break;
      }

      var line_length = index - i - 1;
      var tab_offset = line_length % 4;

      var start = val.substring(0, index);
      var end = val.substring(index);

      var cat = "";
      console.log(is_shift, val.substring(i + 1, index).trim());

      if (!is_shift){
        console.log("first char: ", val[i], val[i+1]);

        var space_len = 4 - tab_offset;
        var spaces = "    ".substr(0, space_len);
        console.log("pos", index);

        cat = start + spaces + end;
        e.target.value = cat;
        e.target.selectionStart = index + space_len;
        e.target.selectionEnd = index + space_len;
        this.setState({ value: e.target.value });

      }else if (val.substring(i + 1, index).trim().length === 0){
        console.log("all whitespace");

        var spaces_to_remove = tab_offset;

        if (spaces_to_remove === 0 && line_length >= 4){
          spaces_to_remove = 4;
        }

        cat = start.substr(0, start.length - spaces_to_remove) + end;

        e.target.value = cat;
        e.target.selectionStart = index - spaces_to_remove;
        e.target.selectionEnd = index - spaces_to_remove;
        this.setState({ value: e.target.value });
      }
      
      
    }
  };

  render () {

    return (
      <div className={ this.props.classNames.root }>
      { this.props.mode === "live" ? this.liveMode : this.tabbedMode }
        { this.props.children }
      </div>
    );
  }
}

MarkedArea.defaultProps = {
  id: "mmc-marked-area",
  label: "",
  mode: "tabbed",
  classNames: {
    root: "marked-area",
    header: "marked-area-header",
    activeButton: "marked-area-button active",
    defaultButton: "marked-area-button",
    helpLink: "marked-area-help-link",
    textContainer: "marked-area-text-container",
    liveDivider: "marked-area-live-divider"
  }
};

MarkedArea.propTypes = {
  children: React.PropTypes.any,
  classNames: React.PropTypes.shape({
    root: React.PropTypes.string,
    header: React.PropTypes.string,
    activeButton: React.PropTypes.string,
    defaultButton: React.PropTypes.string,
    helpLink: React.PropTypes.string,
    textContainer: React.PropTypes.string,
    liveDivider: React.PropTypes.string
  }),
  defaultValue: React.PropTypes.string,
  id: React.PropTypes.string,
  isPreview: React.PropTypes.bool,
  label: React.PropTypes.string,
  mode: React.PropTypes.string,
  onChange: React.PropTypes.func
};

MarkedArea.displayName = "MarkedArea";

module.exports = MarkedArea;
