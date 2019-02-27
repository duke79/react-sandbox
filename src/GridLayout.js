import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

import SimpleMediaCard from "./SimpleMediaCard";

const theme = createMuiTheme({
  // palette: {
  //   primary: blue
  // }
});

// const styles = {
//   grid: {
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {}
//   }
// };

const styles = theme => ({
  // container: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(12, 1fr)",
  //   gridGap: `${theme.spacing.unit * 3}px`
  // },
  // paper: {
  //   padding: theme.spacing.unit,
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   whiteSpace: "nowrap",
  //   marginBottom: theme.spacing.unit
  // },
  // divider: {
  //   margin: `${theme.spacing.unit * 2}px 0`
  // }
});

function GridLayout(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={24}>
        {props.elems.map(function(elem) {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <SimpleMediaCard title={elem} detail="" buttons="" />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

GridLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

GridLayout.defaultProps = {
  elems: [0, 1, 2, 3]
};

const StyledGridLayout = styled(GridLayout)``;
// export default withStyles(styles)(GridLayout);
export default StyledGridLayout;
