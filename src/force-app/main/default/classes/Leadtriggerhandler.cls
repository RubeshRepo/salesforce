@RestResource(urlMapping='/lead/retrievedata')
global class Leadtriggerhandler {

   
    @HttpGet
    global static List<Lead> getLeads(){
        return [select Id,Name from Lead];
    }
    
    
}