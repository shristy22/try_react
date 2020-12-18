import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import {NativeSelect, FormControl} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';


import styles from './cards.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

const Cards= () => {
    const [fetchedCountry,setFetchedCountries,setSelectedOption ] = useState([]);    
    const [selectedOption] = useState('');

    

    useEffect(() => {
      const fetchAPI = async () => { 
        let result = await axios(
            'https://restcountries.eu/rest/v2/all',);
            setFetchedCountries (result.data);        
        }
      fetchAPI();
  }, [setFetchedCountries]);

   const handleChange = (selectedOption)=> {
    setSelectedOption({selectedOption})
   };

   let options = fetchedCountry.map(function (city) {
    return { value: city.name, label: city.name };
  });

    return (
    <div className="containers">
            <Grid container spacing={4} justify="center">
                <Grid item component={Card} xs={12} md={3} className="cardo">
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">wassup</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="cardo">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Hello</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className="cardo">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Hi</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Select
                name="form-field-name"
                value={this.state.value}
                onChange={this.handleChange}
                // clearable={this.state.clearable}
                // searchable={this.state.searchable}
                options={options}                  
            />
    </div>
    )
 }
export default Cards;
