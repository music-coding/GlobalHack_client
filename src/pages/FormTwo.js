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

class FormTwo extends React.Component {
  state = {
    open: false,
    city: '',
    language:'',
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



  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
    <Grid item xs={12}>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            What do you need?
          </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">City</InputLabel>
          <Select
            value={this.state.city}
            onChange={this.handleChange}
            input={<Input name="city" id="age-helper" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="St Louis">St Louis</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
        <MenuItem value="Atlanta">Atlanta</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">Language</InputLabel>
          <Select
            value={this.state.language}
            onChange={this.handleChange}
            input={<Input name="language" id="age-helper" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        <MenuItem value="Bosnian">Bosnian</MenuItem>
          </Select>
        </FormControl>
      </Grid>
</Grid>


    );
  }
}

FormTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(FormTwo));
