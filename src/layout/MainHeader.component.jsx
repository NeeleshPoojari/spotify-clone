import React from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";

//actions
import { updateView } from "../actions/uiActions";
import {
  fetchGenres,
  fetchFeatured,
  fetchNewRelease,
} from "../actions/fetchData";

const MainHeader = ({
  updateView,
  token,
  fetchGenres,
  fetchNewRelease,
  fetchFeatured,
  viewType,
}) => {
  return (
    <div className="main-header-container">
      <h2 className="main-title">Browse</h2>

        <ul className="Header-items">
          <li>
            <span
              className={viewType === "featured" ? "active" : ""}
              onClick={() => {
                updateView("featured");
                fetchFeatured(token);
              }}
            >
              Featured
            </span>
          </li>
          <li>
            <span
              className={viewType === "latest" ? "active" : ""}
              onClick={() => {
                updateView("latest");
                fetchNewRelease(token);
              }}
            >
              Latest
            </span>
          </li>
          <li>
            <span
              className={viewType === "genres" ? "active" : ""}
              onClick={() => {
                updateView("genres");
                fetchGenres(token);
              }}
            >
              Genres
            </span>
          </li>
        </ul>
    </div>
  );
};

//MainHeader.propTypes = {};

const mapStateToProps = (state) => ({
  viewType: state.uiReducer.viewType,
  token: state.auth.token,
});

export default connect(mapStateToProps, {
  updateView,
  fetchGenres,
  fetchNewRelease,
  fetchFeatured,
})(MainHeader);
