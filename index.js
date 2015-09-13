import React from 'react';
import marked from 'marked';

export default class MarkedArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreview: false,
      value: props.defaultValue ? props.defaultValue : ''
    }
  }
  static displayName = 'MarkedArea';
  static propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    classNames: React.PropTypes.object,
    onChange: React.PropTypes.func
  };
  static defaultProps = {
    id: "mmc-marked-area",
    label: "",
    onChange: this._onChange,
    classNames: {
      root: "marked-area",
      header: "marked-area-header",
      activeButton: "marked-area-button active",
      defaultButton: "marked-area-button",
      helpLink: "marked-area-help-link",
      textContainer: "marked-area-text-container"
    }
  };

  get parsed () {
    return (
      <div {...this.props} dangerouslySetInnerHTML={{__html: marked(this.state.value.toString(), {sanitize: true}) }} />
    );
  }

  get raw () {
    return (
      <textarea {...this.props} id={this.props.id} onChange={this._onChange} value={this.state.value}/>
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
        <header className={this.props.classNames.header}>
          <label htmlFor={this.props.id}>{this.props.label}</label>
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
        </header>
        <div className={this.props.classNames.textContainer}>
          {this.state.isPreview ? this.parsed : this.raw}
        </div>
        {this.props.children}
      </div>
    )
  }
}
