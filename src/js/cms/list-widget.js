import React, { Component } from 'react';
import { List, fromJS } from 'immutable';

// This is the editing component for an individual Link. It's just two
// side-by-side inputs.
class LinkControl extends Component {
  constructor(props) {
    super(props);

    this.changeName = this.changeName.bind(this);
    this.changeLink = this.changeLink.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // This method changes the name
  changeName(e) {
    const { value, onChange } = this.props;
    const newValue = List([e.target.value, value.get(1)]);
    onChange(newValue);
  }

  changeLink(e) {
    const { value, onChange } = this.props;
    const newValue = List([value.get(0), e.target.value]);
    onChange(newValue);
  }

  handleKeyPress(e) {
    const { onNewLink } = this.props;
    if (e.key === "Enter") {
      onNewLink();
    }
  }

  render() {
    const name = this.props.value.get(0);
    const link = this.props.value.get(1);
    return (<div className="linkContainer">
      <input
        className="linkName"
        placeholder="Link Name"
        value={name || ""}
        onChange={this.changeName}
        onKeyPress={this.handleKeyPress}
      />
      <input
        className="linkLink"
        placeholder="Link URL"
        value={link || ""}
        onChange={this.changeLink}
        onKeyPress={this.handleKeyPress}
      />
    </div>);
  }
}

// This is the container which implements the list functionality. Once
// my work on repeatable widgets is done, this should no longer be
// required.
export default class LinksControl extends React.Component {

  // This function creates a change handler for a given link, which
  // itself takes the new value and calls the change handler with the
  // new list of links.
  getChangeHandler(i) { return newValue => {
    const { onChange, value } = this.props;
    if (value) {
      onChange(value.set(i, newValue))
    } else {
      onChange(List([newValue]));
    }
  }}

  // Just adds a new item
  getNewLinkHandler(i) {return () => {
    const { onChange, value } = this.props;
    if (value) {
      this.props.onChange(this.props.value.insert(i + 1, List(["", ""])));
    } else {
      onChange(List(["", ""]));
    }
  }}

  render() {
    const value = this.props.value ? this.props.value : fromJS([["", ""]]);
    return (<div>
      {value.map((val, i) => <LinkControl
        key={i}
        value={val}
        onChange={this.getChangeHandler(i)}
        onNewLink={this.getNewLinkHandler(i)}
      />)}
    </div>);
  }
}