import React, {Component} from 'react';
import { Label, Input } from 'reactstrap';

class FormDynamic extends Component {



    handleChange(e,elem) {
        const storedDataLocal = this.props.storedData;

        storedDataLocal.map((evt)=>{
            if(evt.id === elem.id) {
                evt.type = e;
            }
            return evt;
        });

       this.props.setStateData(storedDataLocal);
    }

    handleChange2(e,elem) {
        const storedDataLocal = this.props.storedData;

        storedDataLocal.map((evt)=>{
            if(evt.id === elem.id) {
                evt.type2 = e;
            }
            return evt;
        });

        this.props.setStateData(storedDataLocal);

    }
    //value changes on change function based on elems id for uniqueness, data stored in this.props.storedData
    render() {
        return(
            <div >
                {this.props.storedData.length > 0 ?
                    this.props.storedData.map((elem,i)=>
                        <div key={i} style={{padding: 14, border: '1px dashed lightblue', borderRadius: 15, marginBottom: 10}}>
                            <Label for="select1">Select Mood</Label>
                            <Input type="select" value={elem.type} onChange={(e)=>this.handleChange(e.target.value,elem)} style={{width: '300px'}}>
                                {this.props.stateDataType.length > 0 && this.props.stateDataType.map((elem2,j)=>
                                    <option key={j} value={elem2.type}>{elem2.type}</option>
                                )}
                            </Input>
                            <Label for="select2">Select second one</Label>
                            <Input type="select" value={elem.type2} onChange={(e)=>this.handleChange2(e.target.value,elem)} style={{width: '300px'}}>
                                {this.props.stateDataType.length > 0 && this.props.stateDataType.map((elem2)=> elem2.type === elem.type ?
                                    elem2.data.map((eleme2select,k)=>
                                        <option key={k} value={eleme2select.id}>{eleme2select.name}</option>
                                    )
                                    : ''
                                )}
                            </Input>
                        </div>
                    )
                : ''}
            </div>
        )
    }
}
export default FormDynamic;
