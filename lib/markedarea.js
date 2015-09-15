import React from 'react';
import marked from 'marked';
export default class MarkedArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreview: props.isPreview ? props.isPreview : false,
      value: props.defaultValue ? props.defaultValue : ''
    }
  }
  static styleguide = {
    // Component to use for generating additional examples
    exampleComponent: MarkedArea,
    category: "elements",
    title: "MarkedArea"
  };

  static displayName = 'MarkedArea';

  static propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    classNames: React.PropTypes.object,
    onChange: React.PropTypes.func,
    mode: React.PropTypes.string
  };

  static defaultProps = {
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

  get parsed () {
    return (
      <div dangerouslySetInnerHTML={{__html: marked(this.state.value.toString(), {sanitize: true}) }} />
    );
  }
  get raw () {
    return (
      <textarea {...this.props} id={this.props.id} onChange={this.props.onChange || this._onChange} value={this.state.value}/>
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
  _onChange = (e) => {
    this.setState({value: e.target.value});
  };
  disablePreview = () => {
    this.setState({isPreview:false});
  };
  enablePreview = () => {
    this.setState({isPreview:true});
  };

  render () {

    return (
      <div className={this.props.classNames.root}>
      {this.props.mode === "live" ? this.liveMode : this.tabbedMode}
        {this.props.children}
      </div>
    )
  }
}
