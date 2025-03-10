// Helper class to track round-robin assignment indexes
public class TerritoryAssignmentTracker {
    
     public static void assignAccountsEvenly(List<Account> accountRec) {
        try {
            // Collect all unique postal codes from the accounts to be processed
            Set<String> billingPostCodes = new Set<String>();
            for (Account acc : accountRec) {
                if (!String.isEmpty(acc.BillingPostalCode)) {
                    billingPostCodes.add(acc.BillingPostalCode);
                }
            }

            // Fetch Territory records associated with the postal codes
            List<Territory__c> territories = [SELECT Id, Name, Owner__c FROM Territory__c WHERE Name IN :billingPostCodes];
            system.debug('territories size'+territories.size());
            // Map to store the sales reps for each territory (zip code)
            Map<String, List<String>> territorySalesReps = new Map<String, List<String>>();

            for (Territory__c territory : territories) {
                // Fetch the sales reps for each territory
                if (!territorySalesReps.containsKey(territory.Name)) {
                    territorySalesReps.put(territory.Name, new List<String>());
                }

                // Assuming the Owner__c is the User representing the sales rep for that territory
                territorySalesReps.get(territory.Name).add(territory.Owner__c);
            }
            system.debug('territorySalesReps size'+territorySalesReps.size());
            // Fetch Account records associated with the postal codes
            List<Account> accountsToAssign = [Select Id,OwnerId,BillingPostalCode from Account where BillingPostalCode IN:billingPostCodes order by CreatedDate];
            system.debug('accountsToAssign size'+accountsToAssign.size());

            // Round-robin assignment
            Map<String, Integer> lastAssignedIndex = new Map<String, Integer>(); // To track last assigned rep
            for (Account acc : accountsToAssign) {
                List<String> salesReps = territorySalesReps.get(acc.BillingPostalCode);

                if (salesReps != null && !salesReps.isEmpty()) {
                    Integer lastIndex = lastAssignedIndex.get(acc.BillingPostalCode);
                    if (lastIndex == null) {
                        lastIndex = 0;
                    }

                    // Assign the next available sales rep in round-robin manner
                    acc.OwnerId = salesReps[lastIndex];

                    // Update the index for round-robin (circular list)
                    lastAssignedIndex.put(acc.BillingPostalCode, math.mod((lastIndex + 1),salesReps.size()));
                }
            }

            // Perform DML operation to update account owners
            update accountsToAssign;
        } catch (Exception e) {
            System.debug('Error during account assignment: ' + e.getMessage());
        }
    }
    
    
    
    
    
    
    private static Map<String, Integer> territoryIndexMap = new Map<String, Integer>();

    public static Integer getIndex(String zipCode, Integer territoryCount) {
        if (!territoryIndexMap.containsKey(zipCode)) {
            territoryIndexMap.put(zipCode, 0);
        } else {
            // Increment the index and wrap it around using modulo operator
            Integer currentIndex = territoryIndexMap.get(zipCode);
            currentIndex = math.mod((currentIndex + 1),territoryCount); // Modulo operator is valid here
            territoryIndexMap.put(zipCode, currentIndex);
        }
        return territoryIndexMap.get(zipCode);
    }
}