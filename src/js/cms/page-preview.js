import React, {Component} from "react";

export default class PagePreview extends Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const data = entry.get("data") ? entry.get("data").toJS() : {};

    return <div className="cms-interior page">
      <div className="interior">
        <header>
          <div className="contained">
            <a href="#" className="home">
              <img className="logo" src="/img/global/logo.png"/>
            </a>
            <div className="slicknav_menu">
              <a className="slicknav_btn slicknav_collapsed"><span className="slicknav_menutxt"></span><span className="slicknav_icon slicknav_no-text"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></a>
            </div>
          </div>
        </header>
        <section className="simple-hero full-width">
          <div className="bg-img" style={{
            backgroundImage: data.backgroundimg && `url('${getAsset(data.backgroundimg).toString()}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}></div>
          <div className="contained">
            <h1>{ data.title }</h1>
          </div>
        </section>
        <div className="contained clearfix">
          <div className="content">
            { widgetFor("body") }
          </div>
          <aside className='sidebar'>
            <a href="#" className='btn-primary'>{ data.primaryCTA }</a>
            <div className="sidebar-links">
              { data.sidebarlinks && data.sidebarlinks.map((sidebarlink) => <a className="btn-secondary sidebar-link" href="#" key={ sidebarlink.toString() }>{ sidebarlink[0] }</a>)}
            </div>
          </aside>
        </div>
      </div>
    </div>
  }
}
