trigger AccountHandler on Account (after insert, after update) {
    /*
    if (Trigger.isAfter) {
        
        try {
            Set<String> billingPostCodes = new Set<String>();
            Map<String, List<Territory__c>> territoryMap = new Map<String, List<Territory__c>>();
            List<Account> accountsToUpdate = new List<Account>();
            
            
            for (Account acc : Trigger.new) {
                if (!String.isEmpty(acc.BillingPostalCode)) {
                    billingPostCodes.add(acc.BillingPostalCode);
                }
            }
            
            
            if (!billingPostCodes.isEmpty()) {
                for (Territory__c territory : [ SELECT Id, Name, Owner__c FROM Territory__c WHERE Name IN :billingPostCodes]) {
                    if (!territoryMap.containsKey(territory.Name)) {
                        territoryMap.put(territory.Name, new List<Territory__c>());
                    }
                    territoryMap.get(territory.Name).add(territory);
                }
            }
            
            
            for (Account acc : Trigger.new) {
                if (!String.isEmpty(acc.BillingPostalCode) && territoryMap.containsKey(acc.BillingPostalCode)) {
                    List<Territory__c> territories = territoryMap.get(acc.BillingPostalCode);
                    
                    
                    Integer index = TerritoryAssignmentTracker.getIndex(acc.BillingPostalCode, territories.size());
                    Territory__c assignedTerritory = territories[index];
                    
                    
                    acc.OwnerId = assignedTerritory.Owner__c;
                    accountsToUpdate.add(acc);
                }
            }
            
            
            if (!accountsToUpdate.isEmpty()) {
                update accountsToUpdate;
            }
        } catch (Exception ex) {
            System.debug('Exception: ' + ex.getMessage());
        }
         */
        
        // Only execute when the BillingPostalCode field is updated
        if (Trigger.isUpdate) {
            List<Account> accRecord = new List<Account>();
            
            for (Account acc : Trigger.new) {
                // Check if BillingPostalCode is changed and is not null
                if (acc.BillingPostalCode != Trigger.oldMap.get(acc.Id).BillingPostalCode) {
                    accRecord.add(acc);
                }
            }
            
            if (!accRecord.isEmpty()) {
                // Call handler class method to process round robin assignment
                TerritoryAssignmentTracker.assignAccountsEvenly(accRecord);
            }
        }        
        
        
        
        
    }