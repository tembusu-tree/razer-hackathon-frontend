import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useLanguage from '../../utils/hooks/useLanguage';

const styles = makeStyles(() => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));

function ServiceCard({
  image = null,
  title = '',
  description = '',
}) {
  const classes = styles();
  const { t } = useLanguage();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">
          <b>{title}</b>
        </Typography>
        <Typography variant="h5">
          {description}
        </Typography>
        <div className={classes.buttonContainer}>
          <Button color="primary">
            {t('home.learn_more')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceCard;
