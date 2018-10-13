import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';


import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
   buttonStyle: {
     padding:20
   }
});




class FormFour extends React.Component {
  state = {
     checked: [],
   };

componentWillUnmount() {
  console.log(this.state.checked)
}
   handleToggle = value => () => {
     console.log(value)
     const { checked } = this.state;
     const currentIndex = checked.indexOf(value);
     const newChecked = [...checked];

    if (currentIndex === -1) {
       newChecked.push(value);
     } else if (this.state.checked[0] == undefined){
       newChecked.push(value);
     } else{
       newChecked.splice(currentIndex, 1);
     }

     this.setState({
       checked: newChecked,
     });
            console.log(this.state.checked)
   };




  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const needsList = ["Legal", "Medical", "Food", "School", "Transportation", "Recreation", "Housing", "Utilities", "ESL"]


    return (
    <Grid item xs={12} align='center'>

        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            Categories
          </Typography>
          <List>
          {[0, 1, 2, 3,4,5,6,7,8].map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.state.checked.includes(value)}
                tabIndex={-1}
                disableRipple
              />
            <ListItemText primary={needsList[value]} />
            </ListItem>
          ))}
        </List>

      </Grid>
</Grid>


    );
  }
}

FormFour.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRoot(withStyles(styles)(FormFour));
