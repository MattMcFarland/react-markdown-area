/*
  Import React
*/
import React from 'react';

/*
  Import Components
*/
import {
  MarkedToolbar,
  MarkedPreview,
  MarkedInput
} from '../components';

/*
  MarkedArea Container Class
*/
export class MarkedArea extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      isPreview: props.isPreview ? props.isPreview : false,
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
  handleEnablePreview = () => {
    this.setState({isPreview: true});
  };
  handleDisablePreview = () => {
    this.setState({isPreview: false});
  };
  handleTextChange = (e) => {
    this.setState({value: e.target.value});
  };
  render() {
    let {id, label, classNames, placeholder} = this.props;
    let {isPreview, value} = this.state;
    return (
    <section className={classNames.root}>

      <header className={classNames.header}>

        <label htmlFor={id}>{label}</label>

        <MarkedToolbar
          onEnablePreview={this.handleEnablePreview}
          onDisablePreview={this.handleDisablePreview}
          isPreview={isPreview}
          {...this.props} />

      </header>

        {this.state.isPreview ?
          <MarkedPreview value={this.state.value} classNames={classNames} /> :

            <MarkedInput
              classNames={classNames}
              placeholder={placeholder}
              onChange={this.handleTextChange}
              value={this.state.value} />}


    </section>
    );
  }
}
