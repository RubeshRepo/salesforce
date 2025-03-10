import { LightningElement,api} from 'lwc';
import createTemplate from '@salesforce/apex/SalesforceOrg.createTemplate';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class CreateQuestionTemplateChildComponent extends LightningElement {


    @api getRecordId;
    @api getHtmlTemplate;
    @api getObjectAPIName;
    
    @api genTemplateFromChild(getHtmlTemplate){
    createTemplate({content:getHtmlTemplate,recordId:this.getRecordId})
    .then(result =>{

      const event = new ShowToastEvent({
        title: 'HTML Created',
        message: 'HTML template created!',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(event);
    }).catch(error =>{
      const evt = new ShowToastEvent({
        title: 'Toast Error',
        message: 'Some unexpected error',
        variant: 'error',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
    })
}
}