public class SalesforceQuestionTriggerHelper {
    
    public static void updateSalesforceExamQuestiondetail(Id questionMasteId){
        Salesforce_Exam_Question_detail__c getItem = [Select Id,Total_Questions_Records__c from Salesforce_Exam_Question_detail__c where Id=:questionMasteId limit 1]; 
        Salesforce_Exam_Question_detail__c updateItem = new Salesforce_Exam_Question_detail__c();
        updateItem.Id = getItem.Id;
        updateItem.RollUpSummaryCount__c = getItem.Total_Questions_Records__c+1; 
        update updateItem;

    }
}