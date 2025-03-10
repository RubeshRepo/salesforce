public with sharing class SalesforceOrg {
    
    @AuraEnabled(cacheable=true)
    public static void createdoc(String content){
        Document doc = new Document();
        doc.Body = Blob.valueOf(content);
        doc.ContentType='text/plain';
        doc.Type = 'txt';
        doc.FolderId='a022w00000hcyLNAAY';
        doc.Name = 'Note_' + System.now().format('yyyy_MM_dd_hh_mm_ss') + '.txt';
        insert doc;
        
    }
    
    @AuraEnabled
    public static void createTemplate(String content,Id recordId){ 
        system.debug('inside createtemplate');
        system.debug('recordId'+ recordId);
        Attachment att=new Attachment();
        att.Body=Blob.valueOf(content);
        att.Name='Note_' + System.now().format('yyyy_MM_dd_hh_mm_ss')+'.txt';
        att.parentId= recordId;
        att.ContentType='TEXT';
        insert att;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> retrieveDataForHomePage(){
        return [Select count(Id),Salesforce_Exam_Category_Detail__r.Name from Salesforce_Exam_Question_detail__c Group by Salesforce_Exam_Category_Detail__r.Name];
    }  
    
    @AuraEnabled(cacheable=true)
    public static List<Salesforce_Exam_Question_detail__c> getExamQuestionDetail(){
        return [SELECT Name, Total_Questions_Records__c,CreateDateCustomFormat__c FROM Salesforce_Exam_Question_detail__c order by CreatedDate desc limit 20];
    }    
    
    @AuraEnabled(cacheable=true)
    public static List<Salesforce_Exam_Category_Detail__c> getTopExamCategories(){
        return [SELECT Name, Exam_Code__c FROM Salesforce_Exam_Category_Detail__c where Top__c=true];
    }
    
    
}