import { api, LightningElement, wire } from 'lwc';
import retrieveDataForHomePage from '@salesforce/apex/SalesforceOrg.retrieveDataForHomePage';
import getExamQuestionDetail from '@salesforce/apex/SalesforceOrg.getExamQuestionDetail';
import getTopExamCategories from '@salesforce/apex/SalesforceOrg.getTopExamCategories';
import { getRecord } from 'lightning/uiRecordApi';

export default class CreateQuestionTemplate extends LightningElement {

objectDetails;
examCategoryDetailsstringify;
examCategoryDetails;
htmlTemplate;
categorytableContent;
getdata;
recentExamQuestions;
recentExamQuestCont;
getdataForrecentExamQuestions;
preQuestionTemp;
getPreQuesttemp;
topExamCategories;
topExamCategoriesCont;

@api recordId;
@api objectApiName;
@wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
questiontemplateHandler({data}){
  if(data){
    this.objectDetails = data;
    console.log(data);
    if(data.apiName =='Salesforce_Quiz_Home_Page__c'){

        retrieveDataForHomePage()
        .then(result =>{
            // this.examCategoryDetailsstringify = JSON.stringify(result);
            // console.log('this.examCategoryDetailsstringify '+this.examCategoryDetailsstringify);
            // this.examCategoryDetails = JSON.parse(this.examCategoryDetailsstringify);
            // console.log('result data'+result[0].Name);
            // console.log('this.examCategoryDetails'+ this.examCategoryDetails[0].Name);
            this.examCategoryDetails = result;
            console.log('this.examCategoryDetails '+this.examCategoryDetails);
        })
        .catch(error=>{
            console.error(error);
        })

        getExamQuestionDetail()
        .then(result =>{
            this.recentExamQuestions = result;
        })
        .catch(error =>{
            console.error(error);
        })

    //   this.htmlTemplate =`<!DOCTYPE html>
    //   <html lang="en">
    //       <head>
    //           <title>Bootstrap Example</title>
    //           <meta charset="utf-8" />
    //           <meta name="viewport" content="width=device-width, initial-scale=1" />
    //           <!-- meta tags starts here-->
    //           <meta name="title" content="dasdfas" />
    //           <meta name="keywords" content="Free salesforce exam questions and answers,salesforce dumps free,Practice for salesforce certification exams,free Salesforce exam dumps" />
    //           <meta
    //               name="description"
    //               content="Get the free Salesforce Exam questions and answers. All contents of Salesforce exam study materials are compiled by professional experts with validity and reliability to help you overcome real exam difficulties and pass Salesforce certification exams easily."
    //           />
      
    //           <meta property="og:locale" content="en_US" />
    //           <meta property="og:type" content="article" />
    //           <meta property="og:title" content="Free Salesforce Admin Practice Exam (with Answers) | Salesforce Ben" />
    //           <meta property="og:description" content="Get the free Salesforce Practice exam questions with answers. Pass the Salesforce Certification Exams quickly with www.freecram.net for free by practice." />
    //           <meta property="og:url" content="https://www.salesforceben.com/salesforce-admin-practice-exam/" />
    //           <meta property="og:site_name" content="Salesforce Ben" />
    //           <meta property="article:modified_time" content="2022-10-12T08:16:41+00:00" />
    //           <meta property="og:image" content="https://www.salesforceben.com/wp-content/uploads/2021/03/SFB_title_Advanced-Admin-Certification-_-Admin-mock-exams.png" />
    //           <meta property="og:image:width" content="560" />
    //           <meta property="og:image:height" content="315" />
    //           <meta property="og:image:type" content="image/png" />
    //           <meta name="twitter:card" content="summary_large_image" />
      
    //           <meta name="robots" content="index, follow" />
    //           <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    //           <meta name="language" content="English" />
    //           <meta name="revisit-after" content="1 days" />
    //           <meta name="author" content="dafasf" />
      
    //           <!-- meta tags end here-->
    //           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      
    //           <style>
    //               /*css for home page -- start*/
      
    //                       /* Set anchor tag color */
    //               a{
    //                   color: #4a5f74;
    //               }
    //               .text-secondary{
    //                   color: #24292e!important;
    //               }
      
    //               /* Remove the navbar's default margin-bottom and rounded borders */
    //               .navbar {
    //                   margin-bottom: 0;
    //                   border-radius: 0;
    //               }
      
    //               /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    //               .row.content {
    //                   height: 450px;
    //               }
      
    //               /* Set gray background color and 100% height */
    //               .sidenav {
    //                   padding-top: 47px;
    //                   background-color: #f1f1f1;
    //                   height: 100%;
    //               }
      
    //               /* Set black background color, white text and some padding */
    //               footer {
    //                   background-color: #343a40;
    //                   color: white;
    //                   padding: 15px;
    //               }
      
    //               /* On small screens, set height to 'auto' for sidenav and grid */
    //               @media screen and (max-width: 767px) {
    //                   .sidenav {
    //                       height: auto;
    //                       padding: 15px;
    //                   }
    //                   .row.content {
    //                       height: auto;
    //                   }
    //               }
      
    //               caption {
    //                   caption-side: top !important;
    //               }
      
    //               body {
    //                   padding-top: 60px;
    //                   background-color: #f1f1f1;
    //               }
      
    //               .table-responsive {
    //                   padding: 2% !important;
    //               }
      
    //               /*css for home page -- end*/
    //               /*css for question page -- start*/
    //               .card-header span {
    //                   display: inline-block;
    //                   line-height: 37px;
    //                   padding: 0 10px;
    //               }
      
    //               .showans {
    //                   line-height: 37px;
    //                   padding: 0 10px;
    //                   font-weight: 600;
    //                   font-size: 23px;
    //                   color: #4beb0c;
    //                   /*
    //     border: #007bff;
    //     background: #007bff;
    //     */
    //               }
      
    //               .form-check label {
    //                   display: block;
    //                   padding: 6px;
    //                   border-radius: 6px;
    //                   border: solid 1px #dde7e8;
    //                   font-weight: 400;
    //                   font-size: 13px;
    //                   cursor: pointer;
    //                   font-family: Arial, sans-serif;
    //               }
      
    //               .answerList {
    //                   margin-bottom: 10px;
    //               }
    //               /*
    //   ol,
    //   ul {
    //     list-style: none;
    //   }
    //   */
    //               .answerList li:first-child {
    //                   border-top-width: 0;
    //               }
      
    //               .answerList div {
    //                   padding: 3px 0;
    //               }
    //               .answerList label {
    //                   display: block;
    //                   padding: 6px;
    //                   border-radius: 6px;
    //                   border: solid 1.5px #dde7e8;
    //                   font-weight: 450;
    //                   font-size: 15px;
    //                   cursor: pointer;
    //               }
    //               input[type="checkbox"],
    //               input[type="radio"] {
    //                   margin: 4px 0 0;
    //                   margin-top: 1px;
    //                   line-height: normal;
    //               }
      
    //               .bg-success {
    //                   background-color: #dff0d8 !important;
    //               }
      
    //               .bg-danger {
    //                   background-color: #f2dede !important;
    //               }
      
    //               .breadcrumb {
    //                   background-color: #f1f1f1 !important;
    //                   margin-bottom: 0rem !important;
    //               }
      
    //               .righttable {
    //                   padding: 2px;
    //                   border: solid 1px #dde7e8;
    //                   font-weight: 400;
    //                   font-size: 13px;
    //                   cursor: pointer;
    //                   font-family: Arial, sans-serif;
    //                   max-height: 550px;
    //               }
      
    //               .righttable::-webkit-scrollbar {
    //                   width: 4px;
    //                   background-color: #f5f5f5;
    //               }
      
    //               .righttable::-webkit-scrollbar-track {
    //                   box-shadow: inset 0 0 6px rgba(104, 140, 240, 0.3);
    //               }
      
    //               .righttable::-webkit-scrollbar-thumb {
    //                   background-color: lightblue;
    //                   outline: 1px solid slategrey;
    //               }
      
    //               .categoriesheader {
    //                   display: inline-block;
    //                   line-height: 40px;
    //                   padding: 10px 10px;
    //                   color: #fff;
    //               }
      
    //               .categoriesbody {
    //                   padding: 0.5px 0.5px;
    //               } 
    //               .category{
    //                 padding-bottom: 25px;
    //               }
                  
      
      
      
    //               /*css for question page -- end*/
    //           </style>
    //       </head>
    //       <body>
    //           <!-- #Default body content start-->
      
    //           <!-- #container region -->
    //           <div class="container-fluid text-center">
    //               <!-- #nav region -->
      
      
                                                  
    //           <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-4">
    //                   <a class="navbar-brand" href="#">Navbar</a>
    //                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //                       <span class="navbar-toggler-icon"></span>
    //                   </button>
      
    //                   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    //                       <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    //                           <li class="nav-item active">
    //                               <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //                           </li>
    //                           <li class="nav-item">
    //                               <a class="nav-link" href="#">Exam Categories</a>
    //                           </li>
    //                           <li class="nav-item">
    //                               <a class="nav-link" href="#">About</a>
    //                           </li>
    //                           <li class="nav-item">
    //                               <a class="nav-link" href="#">Contact</a>
    //                           </li>
    //                       </ul>
    //                       <form class="form-inline my-2 my-lg-0">
    //                           <input class="form-control mr-sm-2" type="search" placeholder="Input your exam code.." />
    //                           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //                       </form>
    //                   </div>
    //               </nav>
      
      
      
      
    //               <!-- #nav endregion -->
      
    //               <div class="row content h-100">
    //                   <!-- #container left region -->
    //                   <!-- <div class="col-md-12 col-lg-12 col-xl-1 col-sm-12 sidenav h-100">
    //                        <div class="well">
    //                           <p>ADS</p>
    //                       </div>
    //                       <div class="well">
    //                           <p>ADS</p>
    //                       </div> 
    //                   </div> -->
    //                   <!-- #container left endregion -->
    //                   <!-- #container middle region -->
    //                   <div class="col-md-12 col-lg-12 col-xl-9 col-sm-12 text-left h-100">
    //                       <div class="container">
    //                           <div class="table-responsive table-light mt-5">
    //                               <table class="table table-sm">
    //                               <caption><h4 class="text-secondary"><strong>Categories</strong></h4> 
    //                               </caption>
    //                               ${this.categorytable()}   
    //                               </table>
    //                               </div> 
    //                               <div class="table-responsive table-light mt-5">
    //                               <table class="table table-hover table-sm">
    //                               <caption><h4 class="text-secondary"><strong>Recent Exams Questions</strong></h4> 
    //                               </caption>
    //                               <thead class="thead-light">
    //                               <tr>
    //                               <th scope="col">Exam Info</th>
    //                               <th scope="col">Questions</th>
    //                               <th scope="col">Publish Date</th>
    //                               </tr>
    //                               </thead>
    //                               <tbody class="table-light">
    //                               <tr >
    //                               <td><a href="#"><strong>CRT-211</strong></td>
    //                               <td>Otto</td>
    //                               <td>@mdo</td>
    //                               </tr>
    //                               <tr>
    //                               <td><a href="#"><strong>CRT-211</strong></td>
    //                               <td>Thornton</td>
    //                               <td>@fat</td>
    //                               </tr>
    //                               </tbody>
    //                               </table>            
    //                               </div>
    //                               <div class="table-responsive table-light mt-5">
    //                               <table class="table table-hover table-sm">
    //                               <caption><h4 class="text-secondary"><strong>Recent Exams Questions</strong></h4> 
    //                               </caption>
    //                               <thead class="thead-light">
    //                               <tr>
    //                               <th scope="col">Exam Info</th>
    //                               <th scope="col">Questions</th>
    //                               <th scope="col">Publish Date</th>
    //                               </tr>
    //                               </thead>
    //                               <tbody class="table-light">
    //                               <tr >
    //                               <td><a href="#"><strong>CRT-211</strong></td>
    //                               <td>Otto</td>
    //                               <td>@mdo</td>
    //                               </tr>
    //                               <tr>
    //                               <td><a href="#"><strong>CRT-211</strong></td>
    //                               <td>Thornton</td>
    //                               <td>@fat</td>
    //                               </tr>
    //                               </tbody>
    //                               </table>            
    //                               </div>
    //                       </div>
    //                   </div>
    //                   <!-- #container middle endregion -->
    //                   <!-- #container right region -->
    //                   <div class="col-md-12 col-lg-12 col-xl-3 col-sm-12 sidenav h-100">
    //                     <div class="container category">
    //                       <div class="card bg-white">
    //                         <div class="card-header categoriesheader">
    //                             <h6 class="text-secondary"><strong>Salesforce Top Exam Categories</strong></h6>
    //                         </div>
    //                         <div class="card-body categoriesbody">
    //                             <div class="righttable table-light table-responsive">
    //                                 <table class="table table-sm table-hover">
    //                                     <tbody>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                     </tbody>
    //                                 </table>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     </div>  
    //                     <div class="container category">
    //                       <div class="card bg-white">
    //                         <div class="card-header categoriesheader">
    //                             <h6 class="text-secondary"><strong>Salesforce Top Exam Categories</strong></h6>
    //                         </div>
    //                         <div class="card-body categoriesbody">
    //                             <div class="righttable table-light table-responsive">
    //                                 <table class="table table-sm table-hover">
    //                                     <tbody>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Salesforce Financial Services Cloud (FSC) Accredited Professional</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Salesforce Certified B2B Solution Architect Exam</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Trailhead Virtual Bootcamp for New Admins</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Essentials for New Lightning Experience Administrators</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                         <tr class="text-left">
    //                                             <td>
    //                                                 <a href="#"><strong>Exam Code:</strong></a>
    //                                             </td>
    //                                         </tr>
    //                                     </tbody>
    //                                 </table>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     </div>
      
    //                   </div>
    //                   <!-- #container right endregion -->
    //               </div>
    //               <div class="row bg-dark text-white text-center bg-info text-center text-lg-start">
    //                   <!-- #container disclaimer region -->
    //                   <div class="col-12 mt-2 p-4">
    //                       <!-- Grid container -->
    //                       <div class="row">
    //                           <!--Grid column-->
    //                           <div class="col-md-12 col-lg-12 col-xl-9 col-sm-12 mb-6 mb-md-0">
    //                               <div class="float-left p-3">
    //                                   <h6 class="text-white text-left">Disclaimer:</h6>
    //                                   <div class="text-white text-left">
    //                                       www.freecram.net doesn't offer Real GIAC Exam Questions. www.freecram.net doesn't offer Real SAP Exam Questions. www.freecram.net doesn't offer Real (ISC)² Exam Questions. www.freecram.net doesn't offer
    //                                       Real CompTIA Exam Questions. Oracle and Java are registered trademarks of Oracle and/or its affiliates www.freecram.net material do not contain actual actual Oracle Exam Questions or material.
    //                                       www.freecram.net doesn't offer Real Microsoft Exam Questions. Microsoft®, Azure®, Windows®, Windows Vista®, and the Windows logo are registered trademarks of Microsoft Corporation www.freecram.net
    //                                       Materials do not contain actual questions and answers from Cisco's Certification Exams. The brand Cisco is a registered trademark of CISCO, Inc
    //                                   </div>
    //                               </div>
    //                           </div>
    //                           <!--Grid column-->
      
    //                           <!--Grid column-->
    //                           <div class="col-md-12 col-lg-12 col-xl-3 col-sm-12 mb-6 mb-md-0 d-flex">
    //                               <div class="p-3">
    //                                   <ul class="list-unstyled text-left">
    //                                       <li>
    //                                           <a href="#!" class="text-white">Home</a>
    //                                       </li>
    //                                       <li>
    //                                           <a href="#!" class="text-white">Exam Categories</a>
    //                                       </li>
    //                                       <li>
    //                                           <a href="#!" class="text-white">About</a>
    //                                       </li>
    //                                       <li>
    //                                           <a href="#!" class="text-white">Contact</a>
    //                                       </li>
    //                                   </ul>
    //                               </div>
    //                           </div>
    //                           <!--Grid column-->
    //                       </div>
      
    //                       <!-- Grid container -->
    //                   </div>
    //                   <!-- #container disclaimer endregion -->
    //                   <!-- #container footer region -->
    //                   <div class="col-sm-12 col-md-12 text-white text-center text-lg-start bg-secondary p-3">
    //                       © 2020 Copyright:
    //                       <a class="text-white" href="#">MDBootstrap.com</a>
    //                   </div>
    //                   <!-- #container footer endregion -->
    //               </div>
    //           </div>
      
    //           <!-- #container endregion -->
      
    //           <!-- Optional JavaScript -->
    //           <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    //           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    //           <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    //           <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    //           <!-- #Default body end-->
    //       </body>
    //   </html>
    //   `;
    }
  }
}

@wire(getTopExamCategories)
getTopExamCategoriesHandler({error,data}){

    if(data){
        this.topExamCategories = data;
    }else if(error){
        console.error(error);
    }

}

genTemplate(){
console.log(this.objectDetails.apiName);
if(this.objectDetails.apiName =='Salesforce_Quiz_Home_Page__c'){
    console.log('this.recordId'+this.recordId);
    // retrieveDataForHomePage({getRecordId:this.recordId})
    // .then(result =>{
    //     this.examCategoryDetailsstringify = JSON.stringify(result);
    //     console.log('this.examCategoryDetailsstringify '+this.examCategoryDetailsstringify);
    //     this.examCategoryDetails = JSON.parse(this.examCategoryDetailsstringify);
    //     console.log('result data'+result[0].Name);
    //     console.log('this.examCategoryDetails'+ this.examCategoryDetails[0].Name);
    // })
    // .catch(error=>{
    //     console.error(error);
    // })
    console.log('this.htmlTemplate '+ this.htmlTemplate);
    this.getdata = this.categorytable();
    console.log('getdata'+this.getdata);
    this.getdataForrecentExamQuestions = this.recentExamTable();
    console.log('this.getdataForrecentExamQuestions'+ this.getdataForrecentExamQuestions);
    this.getdataForTopExam = this.topExamCategoriestable();
    console.log('this.getdataForTopExam'+ this.getdataForTopExam);
    // this.htmlTemplate =`<!DOCTYPE html>
    // <html lang="en">
    //     <head>
    //         <title>Bootstrap Example</title>
    //         <meta charset="utf-8" />
    //         <meta name="viewport" content="width=device-width, initial-scale=1" />
    //         <!-- meta tags starts here-->
    //         <meta name="title" content="dasdfas" />
    //         <meta name="keywords" content="Free salesforce exam questions and answers,salesforce dumps free,Practice for salesforce certification exams,free Salesforce exam dumps" />
    //         <meta
    //             name="description"
    //             content="Get the free Salesforce Exam questions and answers. All contents of Salesforce exam study materials are compiled by professional experts with validity and reliability to help you overcome real exam difficulties and pass Salesforce certification exams easily."
    //         />
    
    //         <meta property="og:locale" content="en_US" />
    //         <meta property="og:type" content="article" />
    //         <meta property="og:title" content="Free Salesforce Admin Practice Exam (with Answers) | Salesforce Ben" />
    //         <meta property="og:description" content="Get the free Salesforce Practice exam questions with answers. Pass the Salesforce Certification Exams quickly with www.freecram.net for free by practice." />
    //         <meta property="og:url" content="https://www.salesforceben.com/salesforce-admin-practice-exam/" />
    //         <meta property="og:site_name" content="Salesforce Ben" />
    //         <meta property="article:modified_time" content="2022-10-12T08:16:41+00:00" />
    //         <meta property="og:image" content="https://www.salesforceben.com/wp-content/uploads/2021/03/SFB_title_Advanced-Admin-Certification-_-Admin-mock-exams.png" />
    //         <meta property="og:image:width" content="560" />
    //         <meta property="og:image:height" content="315" />
    //         <meta property="og:image:type" content="image/png" />
    //         <meta name="twitter:card" content="summary_large_image" />
    
    //         <meta name="robots" content="index, follow" />
    //         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    //         <meta name="language" content="English" />
    //         <meta name="revisit-after" content="1 days" />
    //         <meta name="author" content="dafasf" />
    
    //         <!-- meta tags end here-->
    //         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    
    //         <style>
    //             /*css for home page -- start*/
    
    //                     /* Set anchor tag color */
    //             a{
    //                 color: #4a5f74;
    //             }
    //             .text-secondary{
    //                 color: #24292e!important;
    //             }
    
    //             /* Remove the navbar's default margin-bottom and rounded borders */
    //             .navbar {
    //                 margin-bottom: 0;
    //                 border-radius: 0;
    //             }
    
    //             /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    //             .row.content {
    //                 height: 450px;
    //             }
    
    //             /* Set gray background color and 100% height */
    //             .sidenav {
    //                 padding-top: 47px;
    //                 background-color: #f1f1f1;
    //                 height: 100%;
    //             }
    
    //             /* Set black background color, white text and some padding */
    //             footer {
    //                 background-color: #343a40;
    //                 color: white;
    //                 padding: 15px;
    //             }
    
    //             /* On small screens, set height to 'auto' for sidenav and grid */
    //             @media screen and (max-width: 767px) {
    //                 .sidenav {
    //                     height: auto;
    //                     padding: 15px;
    //                 }
    //                 .row.content {
    //                     height: auto;
    //                 }
    //             }
    
    //             caption {
    //                 caption-side: top !important;
    //             }
    
    //             body {
    //                 padding-top: 60px;
    //                 background-color: #f1f1f1;
    //             }
    
    //             .table-responsive {
    //                 padding: 2% !important;
    //             }
    
    //             /*css for home page -- end*/
    //             /*css for question page -- start*/
    //             .card-header span {
    //                 display: inline-block;
    //                 line-height: 37px;
    //                 padding: 0 10px;
    //             }
    
    //             .showans {
    //                 line-height: 37px;
    //                 padding: 0 10px;
    //                 font-weight: 600;
    //                 font-size: 23px;
    //                 color: #4beb0c;
    //                 /*
    //   border: #007bff;
    //   background: #007bff;
    //   */
    //             }
    
    //             .form-check label {
    //                 display: block;
    //                 padding: 6px;
    //                 border-radius: 6px;
    //                 border: solid 1px #dde7e8;
    //                 font-weight: 400;
    //                 font-size: 13px;
    //                 cursor: pointer;
    //                 font-family: Arial, sans-serif;
    //             }
    
    //             .answerList {
    //                 margin-bottom: 10px;
    //             }
    //             /*
    // ol,
    // ul {
    //   list-style: none;
    // }
    // */
    //             .answerList li:first-child {
    //                 border-top-width: 0;
    //             }
    
    //             .answerList div {
    //                 padding: 3px 0;
    //             }
    //             .answerList label {
    //                 display: block;
    //                 padding: 6px;
    //                 border-radius: 6px;
    //                 border: solid 1.5px #dde7e8;
    //                 font-weight: 450;
    //                 font-size: 15px;
    //                 cursor: pointer;
    //             }
    //             input[type="checkbox"],
    //             input[type="radio"] {
    //                 margin: 4px 0 0;
    //                 margin-top: 1px;
    //                 line-height: normal;
    //             }
    
    //             .bg-success {
    //                 background-color: #dff0d8 !important;
    //             }
    
    //             .bg-danger {
    //                 background-color: #f2dede !important;
    //             }
    
    //             .breadcrumb {
    //                 background-color: #f1f1f1 !important;
    //                 margin-bottom: 0rem !important;
    //             }
    
    //             .righttable {
    //                 padding: 2px;
    //                 border: solid 1px #dde7e8;
    //                 font-weight: 400;
    //                 font-size: 13px;
    //                 cursor: pointer;
    //                 font-family: Arial, sans-serif;
    //                 max-height: 550px;
    //             }
    
    //             .righttable::-webkit-scrollbar {
    //                 width: 4px;
    //                 background-color: #f5f5f5;
    //             }
    
    //             .righttable::-webkit-scrollbar-track {
    //                 box-shadow: inset 0 0 6px rgba(104, 140, 240, 0.3);
    //             }
    
    //             .righttable::-webkit-scrollbar-thumb {
    //                 background-color: lightblue;
    //                 outline: 1px solid slategrey;
    //             }
    
    //             .categoriesheader {
    //                 display: inline-block;
    //                 line-height: 40px;
    //                 padding: 10px 10px;
    //                 color: #fff;
    //             }
    
    //             .categoriesbody {
    //                 padding: 0.5px 0.5px;
    //             } 
    //             .category{
    //               padding-bottom: 25px;
    //             }
                
    
    
    
    //             /*css for question page -- end*/
    //         </style>
    //     </head>
    //     <body>
    //         <!-- #Default body content start-->
    
    //         <!-- #container region -->
    //         <div class="container-fluid text-center">
    //             <!-- #nav region -->
    
    
                                                
    //         <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-4">
    //                 <a class="navbar-brand" href="#">Navbar</a>
    //                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span class="navbar-toggler-icon"></span>
    //                 </button>
    
    //                 <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    //                     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    //                         <li class="nav-item active">
    //                             <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //                         </li>
    //                         <li class="nav-item">
    //                             <a class="nav-link" href="#">Exam Categories</a>
    //                         </li>
    //                         <li class="nav-item">
    //                             <a class="nav-link" href="#">About</a>
    //                         </li>
    //                         <li class="nav-item">
    //                             <a class="nav-link" href="#">Contact</a>
    //                         </li>
    //                     </ul>
    //                     <form class="form-inline my-2 my-lg-0">
    //                         <input class="form-control mr-sm-2" type="search" placeholder="Input your exam code.." />
    //                         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //                     </form>
    //                 </div>
    //             </nav>
    
    
    
    
    //             <!-- #nav endregion -->
    
    //             <div class="row content h-100">
    //                 <!-- #container left region -->
    //                 <!-- <div class="col-md-12 col-lg-12 col-xl-1 col-sm-12 sidenav h-100">
    //                      <div class="well">
    //                         <p>ADS</p>
    //                     </div>
    //                     <div class="well">
    //                         <p>ADS</p>
    //                     </div> 
    //                 </div> -->
    //                 <!-- #container left endregion -->
    //                 <!-- #container middle region -->
    //                 <div class="col-md-12 col-lg-12 col-xl-9 col-sm-12 text-left h-100">
    //                     <div class="container">
    //                         <div class="table-responsive table-light mt-5">
    //                             <table class="table table-sm">
    //                             <caption><h4 class="text-secondary"><strong>Categories</strong></h4> 
    //                             </caption>
    //                             </table>
    //                             </div> 
    //                             <div class="table-responsive table-light mt-5">
    //                             <table class="table table-hover table-sm">
    //                             <caption><h4 class="text-secondary"><strong>Recent Exams Questions</strong></h4> 
    //                             </caption>
    //                             <thead class="thead-light">
    //                             <tr>
    //                             <th scope="col">Exam Info</th>
    //                             <th scope="col">Questions</th>
    //                             <th scope="col">Publish Date</th>
    //                             </tr>
    //                             </thead>
    //                             <tbody class="table-light">
    //                             <tr >
    //                             <td><a href="#"><strong>CRT-211</strong></td>
    //                             <td>Otto</td>
    //                             <td>@mdo</td>
    //                             </tr>
    //                             <tr>
    //                             <td><a href="#"><strong>CRT-211</strong></td>
    //                             <td>Thornton</td>
    //                             <td>@fat</td>
    //                             </tr>
    //                             </tbody>
    //                             </table>            
    //                             </div>
    //                             <div class="table-responsive table-light mt-5">
    //                             <table class="table table-hover table-sm">
    //                             <caption><h4 class="text-secondary"><strong>Recent Exams Questions</strong></h4> 
    //                             </caption>
    //                             <thead class="thead-light">
    //                             <tr>
    //                             <th scope="col">Exam Info</th>
    //                             <th scope="col">Questions</th>
    //                             <th scope="col">Publish Date</th>
    //                             </tr>
    //                             </thead>
    //                             <tbody class="table-light">
    //                             <tr >
    //                             <td><a href="#"><strong>CRT-211</strong></td>
    //                             <td>Otto</td>
    //                             <td>@mdo</td>
    //                             </tr>
    //                             <tr>
    //                             <td><a href="#"><strong>CRT-211</strong></td>
    //                             <td>Thornton</td>
    //                             <td>@fat</td>
    //                             </tr>
    //                             </tbody>
    //                             </table>            
    //                             </div>
    //                     </div>
    //                 </div>
    //                 <!-- #container middle endregion -->
    //                 <!-- #container right region -->
    //                 <div class="col-md-12 col-lg-12 col-xl-3 col-sm-12 sidenav h-100">
    //                   <div class="container category">
    //                     <div class="card bg-white">
    //                       <div class="card-header categoriesheader">
    //                           <h6 class="text-secondary"><strong>Salesforce Top Exam Categories</strong></h6>
    //                       </div>
    //                       <div class="card-body categoriesbody">
    //                           <div class="righttable table-light table-responsive">
    //                               <table class="table table-sm table-hover">
    //                                   <tbody>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                   </tbody>
    //                               </table>
    //                           </div>
    //                       </div>
    //                   </div>
    //                   </div>  
    //                   <div class="container category">
    //                     <div class="card bg-white">
    //                       <div class="card-header categoriesheader">
    //                           <h6 class="text-secondary"><strong>Salesforce Top Exam Categories</strong></h6>
    //                       </div>
    //                       <div class="card-body categoriesbody">
    //                           <div class="righttable table-light table-responsive">
    //                               <table class="table table-sm table-hover">
    //                                   <tbody>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Salesforce Financial Services Cloud (FSC) Accredited Professional</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Salesforce Certified B2B Solution Architect Exam</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Trailhead Virtual Bootcamp for New Admins</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Essentials for New Lightning Experience Administrators</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr class="text-left">
    //                                           <td>
    //                                               <a href="#"><strong>Exam Code:</strong></a>
    //                                           </td>
    //                                       </tr>
    //                                   </tbody>
    //                               </table>
    //                           </div>
    //                       </div>
    //                   </div>
    //                   </div>
    
    //                 </div>
    //                 <!-- #container right endregion -->
    //             </div>
    //             <div class="row bg-dark text-white text-center bg-info text-center text-lg-start">
    //                 <!-- #container disclaimer region -->
    //                 <div class="col-12 mt-2 p-4">
    //                     <!-- Grid container -->
    //                     <div class="row">
    //                         <!--Grid column-->
    //                         <div class="col-md-12 col-lg-12 col-xl-9 col-sm-12 mb-6 mb-md-0">
    //                             <div class="float-left p-3">
    //                                 <h6 class="text-white text-left">Disclaimer:</h6>
    //                                 <div class="text-white text-left">
    //                                     www.freecram.net doesn't offer Real GIAC Exam Questions. www.freecram.net doesn't offer Real SAP Exam Questions. www.freecram.net doesn't offer Real (ISC)² Exam Questions. www.freecram.net doesn't offer
    //                                     Real CompTIA Exam Questions. Oracle and Java are registered trademarks of Oracle and/or its affiliates www.freecram.net material do not contain actual actual Oracle Exam Questions or material.
    //                                     www.freecram.net doesn't offer Real Microsoft Exam Questions. Microsoft®, Azure®, Windows®, Windows Vista®, and the Windows logo are registered trademarks of Microsoft Corporation www.freecram.net
    //                                     Materials do not contain actual questions and answers from Cisco's Certification Exams. The brand Cisco is a registered trademark of CISCO, Inc
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <!--Grid column-->
    
    //                         <!--Grid column-->
    //                         <div class="col-md-12 col-lg-12 col-xl-3 col-sm-12 mb-6 mb-md-0 d-flex">
    //                             <div class="p-3">
    //                                 <ul class="list-unstyled text-left">
    //                                     <li>
    //                                         <a href="#!" class="text-white">Home</a>
    //                                     </li>
    //                                     <li>
    //                                         <a href="#!" class="text-white">Exam Categories</a>
    //                                     </li>
    //                                     <li>
    //                                         <a href="#!" class="text-white">About</a>
    //                                     </li>
    //                                     <li>
    //                                         <a href="#!" class="text-white">Contact</a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                         <!--Grid column-->
    //                     </div>
    
    //                     <!-- Grid container -->
    //                 </div>
    //                 <!-- #container disclaimer endregion -->
    //                 <!-- #container footer region -->
    //                 <div class="col-sm-12 col-md-12 text-white text-center text-lg-start bg-secondary p-3">
    //                     © 2020 Copyright:
    //                     <a class="text-white" href="#">MDBootstrap.com</a>
    //                 </div>
    //                 <!-- #container footer endregion -->
    //             </div>
    //         </div>
    
    //         <!-- #container endregion -->
    
    //         <!-- Optional JavaScript -->
    //         <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    //         <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    //         <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    //         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    //         <!-- #Default body end-->
    //     </body>
    // </html>
    // `;

    // console.log('this.htmlTemplate '+ this.htmlTemplate);
    // this.template.querySelector('c-create-question-template-child-component').genTemplateFromChild({getHtmlTemplate:this.htmlTemplate});
}
else if(this.objectDetails.apiName =='Salesforce_Exam_Question_detail__c'){
this.getPreQuesttemp=this.prequestionTemplate();
console.log('this.getPreQuesttemp '+this.getPreQuesttemp);
}
else{
    this.template.querySelector('c-create-question-template-child-component').genTemplateFromChild();
}


}
//this method is to create category table data
categorytable(){

    if(this.examCategoryDetails != null && this.examCategoryDetails != undefined){

        console.log('this.examCategoryDetails stringfy'+ JSON.stringify(this.examCategoryDetails));
        this.categorytableContent = `<tbody class="table-light">
        <tr>
        `;
        console.log('this.categorytableContent '+ this.categorytableContent);
        this.examCategoryDetails.forEach(item =>{

            console.log('item'+ item.Name);
            console.log('Salesforce_Exam_Category_Detail__r.Name'+ item.Name);
            console.log('Salesforce_Exam_Category_Detail__r.Name'+ item.Name);
            console.log('Salesforce_Exam_Category_Detail__r.expr0'+ item.expr0);
            if(item.Name =="Salesforce Certified Administrator"){
                this.categorytableContent += `<td><strong class="pr-2"><a href="#">${item.Name}</a></strong><span class="badge badge-pill badge-info">${item.expr0}</span></td>`;
            }
               
     
             })
             this.categorytableContent +=`<td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             <td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             </tr>
             <tr>
             <td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             <td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             <td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             </tr>
             <tr>
             <td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             <td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             <td><strong class="pr-2"><a href="#">Mark</a></strong><span class="badge badge-pill badge-info">999</span></td>
             </tr>
             </tbody>`;
             return this.categorytableContent;

            }else{
                return null;
            }
}

//this method to generate html content to create recent exam
recentExamTable(){
    if(this.recentExamQuestions != null && this.recentExamQuestions != undefined){
        console.log(JSON.stringify(this.recentExamQuestions));
        this.recentExamQuestCont =`
        <tbody class="table-light">       
        `;
        this.recentExamQuestions.map(item =>{
            this.recentExamQuestCont +=`
            <tr >
            <td><a href="#"><strong>${item.Name}</strong></td>
            <td>${item.Total_Questions_Records__c}</td>
            <td>${item.CreateDateCustomFormat__c}</td>
            </tr>
            `;           
        });

        this.recentExamQuestCont +=`
        </tbody>
        `;

        return this.recentExamQuestCont;
    }else{
        return null;
    }
}

//this method to is to generate html content for before question template

prequestionTemplate(){
    if(this.objectDetails != null && this.objectDetails != undefined){
        console.log('this.objectDetails '+ this.objectDetails);
        this.preQuestionTemp =`
        <table class="table table-hover">
        <caption><h3><strong>Access Free ${this.objectDetails.fields.Exam_Code__c.value} Exam Questions</strong></h3> 
        </caption>
        <tbody class="table-light">
            <tr><td><strong>Exam Code:</strong></td><td>${this.objectDetails.fields.Exam_Code__c.value}</td></tr>
            <tr><td><strong>Exam Name:</strong></td><td>${this.objectDetails.fields.Salesforce_Exam_Category_Detail__r.displayValue}</td></tr>
            <tr><td><strong>Certification Provider:</strong></td><td>Salesforce</td></tr>
            <tr><td><strong>No of Questions:</strong></td><td>${this.objectDetails.fields.Total_Questions_Records__c.value}</td></tr>
            <tr><td><strong>Version:</strong></td><td>v${this.objectDetails.fields.CreateDateCustomFormat__c.value}</td></tr>
            <tr class="mt-2">
              <td colspan="2" class="text-center"><a href="#" class="btn btn-lg btn-success">Go To ${this.objectDetails.fields.Exam_Code__c.value} Questions</a></td>
            </tr>
            </tbody>
          </table>  
        `;

        return this.preQuestionTemp;
    }else{
        return null;
    }

}

// this method is to create html content for top exam categories

topExamCategoriestable(){
    this.topExamCategoriesCont =`
    <tbody>
    `;
    if(this.topExamCategories != null && this.topExamCategories != undefined){

        this.topExamCategories.map(item =>{
            this.topExamCategoriesCont +=`
            <tr class="text-left">
            <td>
                <a href="#"><strong>${item.Name} ${item.Exam_Code__c}</strong></a>
            </td>
            </tr>            
            `;
        });

        this.topExamCategoriesCont +=`
        </tbody>
        `;
        return this.topExamCategoriesCont;

    }else{
        return null;
    }
}

}