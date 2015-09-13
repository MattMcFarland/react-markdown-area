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
    onChange: React.PropTypes.func
  };
  static defaultProps = {
    onChange: this._onChange
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
      <div className="marked-area">
        <header className="marked-area-controls">
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <menu className="marked-area-toolbar btn-group">
            <button
              className={this.state.isPreview ? "btn btn-default" : "btn btn-primary"}
              onClick={this.disablePreview}
              >
              <Glyph opacity={0.6} icon="edit"/>&nbsp;
              <span className="marked-area-toolbar-button-label">Edit</span>
            </button>
            <button
              className={this.state.isPreview ? "btn btn-primary" : "btn btn-default"}
              onClick={this.enablePreview}
              data-action="preview">
              <Glyph icon="preview"/>
              <span className="marked-area-toolbar-button-label">Preview</span>
            </button>
            <a
              target="_blank"
              className="btn btn-link"
              href="//help.github.com/articles/github-flavored-markdown/"
              title="learn more about github flavored markdown"
              >
              Help&nbsp;<Glyph size="10px" icon="new-window"/>
            </a>
          </menu>
        </header>
        {this.state.isPreview ? this.parsed : this.raw}
      </div>
    )
  }
}
