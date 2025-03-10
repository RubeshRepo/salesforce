public without sharing class LeadTriggerHelper {
    
    
    public static void checkForDuplicates(List<Lead> leadInfo){
        
        Set<String> emailId = new Set<String>();        
        Map<String,Id> existingRecord = new Map<String,Id>();
        List<Lead> newRecord = leadInfo;
        Boolean isUpdated = false;
        
        for(Lead obj: leadInfo){
            if(obj.Email != null){
            emailId.add(obj.Email);                
            }
        }
        
        if(emailId.size() > 0){            
            for(Lead exLead: [select Id,Email from Lead where Email IN: emailId]){
               existingRecord.put(exLead.Email,exLead.Id);
            }
            
            if(existingRecord.size() > 0){
                isUpdated = true;
                for(Lead obj: leadInfo){
                    if(existingRecord.containsKey(obj.Email)){
                       obj.Id = existingRecord.get(obj.Email);           
                    }
                }
                                                
                
                update leadInfo;
            }



        }
        
        if(isUpdated){
            for(Lead obj: leadInfo){
                obj.Email.addError('Email Id Already exists!');
                
            }
        }
        
    }

    @AuraEnabled(cacheable=true)
    public static void sample(){
        
    }
    
}