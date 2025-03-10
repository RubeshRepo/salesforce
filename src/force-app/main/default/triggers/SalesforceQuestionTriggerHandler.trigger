trigger SalesforceQuestionTriggerHandler on Salesforce_Question__c (after insert) {
    
    if(Trigger.isAfter && Trigger.isInsert){
        Id salesforceQMaster;
        for(Salesforce_Question__c obj: Trigger.New){
            salesforceQMaster = obj.Salesforce_Exam_Question_detail__c;
        }
        
        if(salesforceQMaster != null){
            SalesforceQuestionTriggerHelper.updateSalesforceExamQuestiondetail(salesforceQMaster);
        }
    }

}