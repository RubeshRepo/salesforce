import { LightningElement } from 'lwc';

export default class LifeCyclehookchild extends LightningElement {
    constructor(){
        super();
        // this.template can be used inside constructor
        console.log('constructor child called');
    }

    connectedCallback(){
        console.log('connectedCallback child called');
        throw new Error('error is coming form child component');

    }

    renderedCallback(){
        console.log('renderedcallback child called');
    }

    disconnectedCallback(){
        alert('child disconnected callback initiated!');
    }
}