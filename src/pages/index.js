import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';


//Components
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import FormThree from './FormThree'



const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  formControl: {
  margin: theme.spacing.unit,
  minWidth: 120,
},
selectEmpty: {
  marginTop: theme.spacing.unit * 2,
},
button: {
  margin: theme.spacing.unit,
},
});

class Index extends React.Component {
  state = {
    open: false,
    step: 1,
  };

handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  showStep  = () => {
    switch (this.state.step) {
      case 1:
        return <FormOne />
      case 2:
        return <FormTwo />
      case 3:
        return <FormThree />
    }
  }

  stepUp = () => {

    this.setState({
      step: this.state.step + 1
    })
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>

        <Grid container spacing={24}>

         {
           this.showStep()
         }

      <Grid item xs={12}>
        <Button variant="outlined" className={classes.button} onClick={this.stepUp}>
         Next
       </Button>
      </Grid>
      </Grid>


      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};
console.log('#someButton was clicked');
export default withRoot(withStyles(styles)(Index));
