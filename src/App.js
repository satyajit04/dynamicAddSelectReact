import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './App.css';
import FormDynamic from "./FormDynamic";
//import Default Library

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            //inital data after getting api
            stateDataType: [
                {type: "Morning", data: [{id: 0, name: "great"}, {id: 1, name: "ok"}, {id: 2, name: "bad"}]},
                {type: "Noon", data: [{id: 0, name: "bad"}, {id: 1, name: "worst"}, {id: 2, name: "tough"}]},
                {type: "Evening", data: [{id: 0, name: "worst"}, {id: 1, name: "tough"}, {id: 2, name: "died"}]},
            ],
            storedData: [],
        };
        this.setStateData = this.setStateData.bind(this);
        this.addForm = this.addForm.bind(this);
    }


    componentDidMount() {
        //loading first data
        this.addForm();
    }

    setStateData(data) {
        this.setState({
            data
        },()=>{
            console.log(data);
        });
    }

    addForm() {
        //adding this method to add button onclick to add new form
        const StoredDataLocal =  this.state.storedData;
        // id has to be unique in order to maintain uniqueness of data
        StoredDataLocal.push({id: StoredDataLocal.length > 0 ? StoredDataLocal[StoredDataLocal.length-1].id+1 : 0, type: this.state.stateDataType[0].type, type2: this.state.stateDataType[0].data[0].id+""});
        this.setState({
            storedData: StoredDataLocal,
        });
    }

  render() {
    return (
      <div className="App App-header">
          <div style={{overflowY: 'scroll', height: '80vh'}}>
              <FormDynamic
                  stateDataType = {this.state.stateDataType}
                  storedData={this.state.storedData}
                  setStateData={this.setStateData}/>
          </div>
          <br/>
          <Button color="primary" onClick={this.addForm}>Add new Component</Button>{' '}
      </div>
    );
  }
}

export default App;
