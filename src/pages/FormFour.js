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

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { view} from 'react-easy-state'


import Store from '../stores/store'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  card: {
    minWidth: 275,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  CardContent: {
    padding: 10
  }
});




class FormFour extends React.Component {
  state = {
     checked: [],
   };

componentDidMount(){
  const isHelper = Store.isNeedHelp == true ? "helpers" : "immigrants";

     console.log(Store.needsList)
     Store.needsList.map(
       apiCall => {
         fetch(apiCall + "/users", {
           method: 'GET',
           mode: 'cors',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           }
         }).then(response => response.json())
           .then(data =>
             { if(data._embedded[isHelper] != undefined){
             data._embedded[isHelper].map(res => {if(res.city === Store.city && res.language === Store.language && Store.usersAlreadyPushed.includes(res._links.needs.href) != true)  {
             Store.usersAlreadyPushed.push(res._links.needs.href)
             // res.categories = this.getCategories(res._links.needs.href)

             console.log(res)
             Store.userMatchList.push(res)

           }

         }) }
       Store.loading = false

       })
       }

     )







// Store.userMatchList.push(res._embedded.helpers)
       console.log(Store.userMatchList)
   }


   getCategories(href){
     var Categories = []
     fetch(href, {
       method: 'GET',
       mode: 'cors',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       }
     }).then(response => response.json())
     .then(data => {
              console.log(data)
       Categories.push(data._embedded.needs.description)

     })
     console.log(Categories)
     return Categories
   }


   removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
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



    return (
    <Grid item xs={12} align='center'>

        <Grid item xs={4}>
          <Typography variant="h4" gutterBottom>
            People
          </Typography>
          <List>
            { Store.loading === true ? "" : Store.userMatchList.map(user =>
              <Grid className={classes.CardContent}>
              <Card className={classes.card}
                key={user._links.self.href}>
              <CardContent >
                <Typography variant="h5" component="h2">
                    {user.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Contact: {user.email}</Button>
              </CardActions>
            </Card>
            </Grid>

            )}

        </List>

      </Grid>
</Grid>


    );
  }
}

FormFour.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRoot(withStyles(styles)(view(FormFour)));
