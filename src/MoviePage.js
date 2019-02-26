import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

function TitleBlock(props) {
  return (
    <div {...props}>
      <img
        {...props}
        src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      />
    </div>
  );
}

const TitleBlockS = styled(TitleBlock)`
  width: 100%;
`;

function PageLayout(props) {
  return (
    <div {...props}>
      <Grid container spacing={16} justify={"flex-start"} direction="column">
        <TitleBlockS />
      </Grid>
    </div>
  );
}

const PageLayoutS = styled(PageLayout)`
  && {
    //margin: 0px;
    //overflow-x: hidden;
    padding: 8px; //https://material-ui.com/layout/grid/#limitations
  }
`;

function MoviePage(props) {
  // const {classes} = props;
  return (
    <div>
      <PageLayoutS />
    </div>
  );
}

MoviePage.propTypes = {
  classes: PropTypes.object.isRequired
};

MoviePage.defaultProps = {};
export default MoviePage;
