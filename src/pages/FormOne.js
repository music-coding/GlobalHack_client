import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react";
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
import { view ,store} from 'react-easy-state'


import Store from '../stores/store'


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

class FormOne extends React.Component {
  state = {
    open: false,
	  name: '',
    city: '',
    language:'',
  };

handleChangeName = event => {
  Store.name = event.target.value
  console.log(Store.name)
};

handleChangeCity = event => {
  Store.city =event.target.value

};

handleChangeLanguage = event => {
  Store.language = event.target.value
};

  handleClose = () => {
    this.setState({
      open: false,
    });
	console.log("aattestttt");
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  componentWillUnmount() {
  console.log("Success")
}



	componentWillMount() {
		console.log("ttestttt");
		/*client({method: 'GET', path: '/api/immigrants'}).done(response => {
			this.setState({immigrants: response.entity._embedded.immigrants});
		});*/
	};
		componentWillUnmount() {
		console.log("unmountting");

			fetch('http://ehi-gh7.ddns.net:8080/api/immigrants', {
	  method: 'POST',
	  mode: 'cors',
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		name: Store.name,
		city: Store.city,
		language: Store.language,
	  })
	});
	/*	client({method: 'GET', path: '/api/immigrants'}).done(response => {
			this.setState({immigrants: response.entity._embedded.immigrants});
		});*/
	}

handleNameChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
	    <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Find Answers
          </Typography>

		<Grid item xs={12}>
			<FormControl  className={classes.formControl}>
		  <TextField
          label="Name"
          className={classes.textField}
		      onChange={this.handleChangeName}
          value= {Store.name}
          margin="normal"
        />
		</FormControl>
      </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">City</InputLabel>
          <Select
            value= {Store.city}
            onChange={this.handleChangeCity}
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
            value={Store.language}
            onChange={this.handleChangeLanguage}
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

FormOne.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(view(FormOne)));
