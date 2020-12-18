import React from 'react';
import {Cards} from './components';
import {Login} from './components';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(props)
      {
      super(props);
      this.state={
        counter: 0,
        country_loading:0,
        // text: "hello world",
        country: '',
        country_name:[],
        countriesList:[],
      };
}
  

  increase = ()=>{
    this.setState({
      counter: this.state.counter+1
    })
      this.setState({
        country: this.state.countriesList[this.state.counter].name
      })
      // console.log(this.state.countriesList[this.state.counter].name);

  }
  
  decrease=()=>{
    this.setState({
      counter: this.state.counter-1  
    }) 
    this.setState({
      country: this.state.countriesList[this.state.counter].name
    })
    // console.log(this.state.countriesList[this.state.counter].name);

  }
  countryName=()=>{
    this.setState({
      country_name: this.state.countriesList
     })
   }

  async componentDidMount(){
    try{
      let p= await axios.get('https://restcountries.eu/rest/v2/all');  
      let a=1;  
      this.setState({ 
        countriesList: p.data,
        country_loading:1,
        country: p.data[0].name,
        // country_name: p.data,
      })
    }
    catch(err){
      console.log(err);
    }
  }
  render(){
    const {country_name, country, counter} = this.state;

    if(this.state.country_loading==0) {
      return(     
        <div>Loading</div>
        )
    }
    else {
      return (
        <div className="container">
           <Cards/>
           <div style={{marginTop: '20px'}}>
            <button onClick={this.increase}>Increase</button>
           
            <button onClick={this.countryName}>Country Name</button>

            {country_name.map(a=>(
               <div style={{ backgroundColor: 'green', color: 'white', marginTop: '5px', display: 'flex' , justifyContent: 'left'}}>
               <p>{a.name}</p>
             </div>
            ))}
            <p>{country}</p>
            <p>{counter}</p>
            <button onClick={this.decrease}>Decrease</button>
              <Login/>
            </div>
       </div>
      )
    }
  }
}
export default App;
