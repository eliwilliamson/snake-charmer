import React, {Component} from "react";

export default class OneStopPreview extends Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const data = entry.get("data") ? entry.get("data").toJS() : {};

    return <div className="onestop preview">
      <a href={ data.linksto } className="onestop-tile featured">
        <div class="vert-center">
          { widgetFor("image") }
          <div class="tile-name">{ data.title }</div>
        </div>
      </a>
    </div>
  }
}
