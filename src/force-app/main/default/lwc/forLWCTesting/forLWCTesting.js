import CaseNumber from '@salesforce/schema/Case.CaseNumber';
import { getDataConnectorSourceFields } from 'lightning/analyticsWaveApi';
import { LightningElement } from 'lwc';

export default class ForLWCTesting extends LightningElement {


    selected = {};

    nameList =['rubesh','kumar','lesnar'];

    countryCapitals =[
        {
            Id:1,
            name: "India",
            capital:"delhi"
        },
        {
            Id:2,
            name:"Australia",
            capital:"canbra"
        },
        {
            Id:3,
            name:"Pakistan",
            capital:"Islamabad"
        },
        {
            Id:4,
            name:"Bangladesh",
            capital:"Dhaka"
        }
    ];

    handleChange(event){
        console.log(this.selected);
        const {name,value} = event.target;
        console.log(event.target);
        console.log(name,value);

        this.selected = {...this.selected,[name]:value}
        console.log(this.selected);
    }
}