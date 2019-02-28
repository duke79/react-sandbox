import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import YTPlayer from "./YTPlayer";
import Divider from "@material-ui/core/Divider";
import { unstable_Box as Box } from "@material-ui/core/Box";

let S = {};

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

S.Card = styled(Card)``;

function MovieTitle(props) {
  return (
    <S.Card {...props}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          <Box textAlign="center">Cat Falling</Box>
        </Typography>
      </CardContent>
    </S.Card>
  );
}

S.MovieTitle = styled(MovieTitle)`
  && > div {
    padding-bottom: 0;
  }
`;

S.YTPlayer = styled(YTPlayer)`
  && {
    // height: 0;
    // padding-top: 56.25%; // 16:9
    // padding-top: 200px;
    // max-height: 600px;
    padding: 0;
    width: 100%;
    height: 200px;
  }
`;

S.Divider = styled(Divider)`
  && {
    padding-top: 15px;
    background-color: #f9f9f9;
  }
`;

function PageLayout(props) {
  return (
    <div {...props}>
      <Grid container spacing={16} justify={"flex-start"} direction="column">
        <S.YTPlayer>
          <S.YTPlayer />
        </S.YTPlayer>
        <S.MovieTitle />
        <S.Divider />
        <S.Card>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Overview
            </Typography>
            <Typography gutterBottom variant="p">
              This movie centers around teen hero Kim Possible and friends as
              they try to balance high school with saving the world everyday.
            </Typography>
          </CardContent>
        </S.Card>
        <S.Divider />
        <S.Card>
          <CardContent>
            <Typography gutterBottom variant="p">
              This movie centers around teen hero Kim Possible and friends as
              they try to balance high school with saving the world everyday.
            </Typography>
          </CardContent>
        </S.Card>
        <S.Divider />
      </Grid>
    </div>
  );
}

const PageLayoutS = styled(PageLayout)`
  && {
    //margin: 0px;
    //overflow-x: hidden;
    padding: 8px; //https://material-ui.com/layout/grid/#limitations;
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
