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
import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase';



const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
   buttonStyle: {
     padding:20
   }
});




class FormTwo extends React.Component {
  state = {
    open: false,
    question: ""

  };

handleChange = event => {
  this.setState({ question: event.target.value });
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




  render() {
    const { classes } = this.props;
    const { open } = this.state;


    return (
    <Grid item xs={12}>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            What do you need?
          </Typography>
          <Grid item xs={12} align='center'>
          <Grid item xs={6} className={classes.buttonStyle} >
            <Button variant="contained" color="primary" className={classes.button} fullWidth>
              Give Help
            </Button>
           </Grid>
           </Grid>
           <Grid item xs={12} align='center'>
           <Grid item xs={6} className={classes.buttonStyle}>
             <Button variant="contained" color="primary" className={classes.button} fullWidth>
               Need Help
             </Button>
            </Grid>
            </Grid>
      </Grid>
</Grid>


    );
  }
}

FormTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(FormTwo));
