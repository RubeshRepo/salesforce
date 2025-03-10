import { LightningElement } from 'lwc';

export default class LifeCyclehookParent extends LightningElement {
    
    
    isChildVisible;
    constructor(){
        super();
        // this.template can be used inside constructor
        console.log('constructor parent called');
    }

    connectedCallback(){
        console.log('connectedCallback parent called');

    }

    renderedCallback(){
        console.log('renderedcallback parent called');
    }
   handleChange(){
       this.isChildVisible == false ? this.isChildVisible = true : this.isChildVisible = false ;
    }

    errorCallback(error,stack){

        console.log(error.message);
        console.log(stack);
    }
    render(){
       return 'just render method has called';
     }

}