import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  }
}));

function NewsCard({ image = null }) {
  const classes = styles();

  return (
    <Card>
      <div className={classes.overlay} />
      <img className={classes.image} src={image} />
    </Card>
  )
}

export default NewsCard;
