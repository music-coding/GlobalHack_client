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


import Store from '../stores/store'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
   buttonStyle: {
     padding:20
   }
});




class FormThree extends React.Component {

  constructor(props) {
	super(props);
    this.state = {needs: [], checked: []};
  }

   componentDidMount() {
    fetch('http://ehi-gh7.ddns.net:8080/api/needs')
      .then(response => response.json())
      .then(data => this.setState({ needs: data._embedded.needs }));
  }

componentWillUnmount() {
  Store.needsChecked = this.state.checked;
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
    //const needsList = ["Legal", "Medical", "Food", "School", "Transportation", "Recreation", "Housing", "Utilities", "ESL"]


    return (
    <Grid item xs={12} align='center'>

        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            Categories
          </Typography>
          <List>
          {this.state.needs.map(need => (
            <ListItem
              key={need._links.self.href}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(need._links.self.href)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.state.checked.includes(need._links.self.href)}
                tabIndex={-1}
                disableRipple
              />
            <ListItemText primary={need.description} />
            </ListItem>
          ))}
        </List>

      </Grid>
</Grid>


    );
  }
}

FormThree.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRoot(withStyles(styles)(view(FormThree)));
