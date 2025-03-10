import { api, LightningElement, track } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    
 @track inputValue;
    countryList =[
        {
            name:"india",
            capital:"delhi"
        },
        {
            name:"bangladesh",
            capital:"dhaka"
        },
        {
            name:"pakistan",
            capital:"islamabad"
        }
    ]

    handleChange(event){
        this.inputValue = event.target.value ; 
    }

    resetAge(){
        this.template.querySelector('c-p2c-child-component').resetAge();
    }
}