import React from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";

function MainView({ viewType, featured, new_release, genres, loading }) {
  let view;
  if (viewType === "featured" && featured.length) {
    view = featured.map((item, i) => {
      return (
        <li className="view-item" key={i}>
          <div className="view-content-container">
          <div className="view-image">
            <img
              alt={"image"}
              src={item.icons ? item.icons[0].url : item.images[0].url}
            />
          </div>
          <div className="view-detail">
          <h4 className="view-name">{item.name}</h4>
          </div>

          </div>
         
        </li>
      );
    });
  }

  if (viewType === "latest" && new_release.length) {
    view = new_release.map((item, i) => {
      return (
        <li className="view-item" key={i}>
          <div className="view-content-container">
          <div className="view-image">
            <img
              alt={"image"}
              src={item.icons ? item.icons[0].url : item.images[0].url}
            />
          </div>
          <div className="view-detail">
          <h4 className="view-name">{item.name}</h4>
          <sub>{item.artists[0].name}</sub>

          </div>

          </div>
         
        </li>
      );
    });
  }
 

  if (viewType === "genres" && genres.length) {
    view = genres.map((item, i) => {
      return (

        <li className="view-item" key={i}>
        <div className="view-content-container">
        <div className="view-image">
          <img
            alt={"image"}
            src={item.icons ? item.icons[0].url : item.images[0].url}
          />
        </div>
        <div className="view-detail">
        <p className="view-name">{item.name}</p>
        </div>
      
        </div>
       
      </li>
      );
    });
  }

  return <ul className="view-list-container">{view}</ul>;
}

// MainView.propTypes = {};

const mapStateToProp = (state) => ({
  viewType: state.uiReducer.viewType,
  featured: state.fetchData.featured,
  new_release: state.fetchData.new_release,
  genres: state.fetchData.genres,
  loading: state.fetchData.loading,
});

export default connect(mapStateToProp)(MainView);
