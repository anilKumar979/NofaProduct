import axios from 'axios';
import authHeader from './Header';
const API_URL_TEST = `${process.env.REACT_APP_URL}`+'api/test/';
const API_URL = `${process.env.REACT_APP_URL}`+'api/';
const API_LOCAL = 'localhost:8080/api/'
//const API_URL = 'http://10.8.0.5:8080/superNofaApi/api/test/';
const user = JSON.parse(sessionStorage.getItem('user'));
class UserService {

  createApplication(datavalue){
    return axios
    .post(API_URL + "submissions",  datavalue ,{ headers: authHeader()   })
    .then(response => {
        return response.data;
    });
  }
  /*********step 0********** */
  updatepreScreening(sid,uid,tabid,value ){
    return axios
    .put(API_URL + "submissions/"+ sid +'/uid/'+uid+ '/preScreening/'+tabid,  value ,{ headers: authHeader()   })
    .then(response => {
        return response.data;
    });
  }
    /*********step 1********** */
  updateprogramSelection(sid,uid,tabid,value ){
    return axios
    .put(API_URL + "submissions/"+ sid +'/uid/'+uid+ '/programSelection/'+tabid,  value ,{ headers: authHeader()   })
    .then(response => {
        return response.data;
    });
  }
    /*********step 2********** */
  updateprojectInformation(sid,uid,tabid,value ){
    return axios
    .put(API_URL + "submissions/"+ sid +'/uid/'+uid+ '/projectInformation/'+tabid,  value ,{ headers: authHeader()   })
    .then(response => {
        return response.data;
    });
  }
  updateoverviewDocuments(sid,tabid,value ){
    return axios
    .put(API_URL + "submissions/"+ sid +'/overviewDocuments/'+tabid,  value ,
    { headers:  { 
      
      Authorization: 'Bearer ' + user.accessToken,
      "Content-Type": "multipart/form-data"
   }   })
    .then(response => {
        return response.data;
    });
  }
  allSubmissionList(){

    return axios.get(API_URL + "submissions" , { headers:authHeader() });
  }
  completeGridList(uid,draftvalue){

    return axios.get(API_URL + "submissions_join/user/"+uid+"/draft/"+draftvalue , { headers:authHeader() });
  }
  inCompleteGridList(uid,draftvalue){

    return axios.get(API_URL + "submissions_join/user/"+uid+"/draft/"+draftvalue , { headers:authHeader() });
  }
  drafttoComplete(datavalue,a){
    return axios
    .post(API_URL + "submissions/"+datavalue+"/drafttocomplete" ,a,{ headers: authHeader()   })
    .then(response => {
        return response.data;
    });
  }
  submissionLocked(datavalue,a){
    return axios
    .post(API_URL + "submissions/"+datavalue+"/locked" ,a,{ headers: authHeader()   })
    .then(response => {
        return response.data;
    });
  }
  // drafttoComplete(sid) {
   
  //   return axios.post(API_URL + "submissions/" + sid + "/drafttocomplete", { headers:authHeader() });
    
  // }
  deleteDraftListData(sid){

    return axios.delete(API_URL + "submissions/"+sid , { headers:authHeader() });
  } 
  fileUploader = () => {
    const fd = new FormData();
    fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
    return axios.post('api/path', fd)
  }

  draftValues = () => {
    return axios.get("http://localhost:8080/api/draft/72")
  }
  updateFormData(sid,filedname,value ){
    return axios
    .post(API_URL + "submission/id/"+ sid +'/fieldname/'+filedname,  value , { headers:authHeader() } )
    .then(response => {
        return response.data;
    });
  }
  updateFile(sid,filedname,value ){
    return axios
    .post(API_URL_TEST + "sid/"+ sid +'/'+filedname,  value )
    .then(response => {
        return response.data;
    });
  }
  getFiles(sid) {
   
    return axios.get(API_URL + "submissions/" + sid + "/joinDataResponse", { headers:authHeader() })
    
  }
  getFilesOnly(sid) {
   
    return axios.get(API_URL + "submissions/" + sid + "/joinFilesDataResponse", { headers:authHeader() })
    
  }
  // downloadFiles(sid,namefield,value) {
   
  //   return axios.get(API_URL + "files/" + sid + "/"+ namefield+ "/"+ value , { headers:authHeader() })
    
  // }
    downloadFiles(sid,namefield,value) {
   
    return axios({
      url: API_URL + "files/" + sid + "/"+ namefield+ "/"+ value, //your url
      method: 'GET',
      responseType: 'blob',
      headers: authHeader(), // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', value); //or any other extension
      document.body.appendChild(link);
      link.click();
  });
    
  }
  deleteFiles(sid,value,filename,a) {
   
    return axios.post(API_URL + "sid/" + sid + "/delete/fieldname/"+ value+"/file/"+filename ,a, { headers:authHeader() })
    
  }
  createOrganization(oid,value) {
   
    return axios.put(API_URL_TEST + "organizations/"+oid ,value)
    
  }
  getOrganization(uid) {
      return axios.get(API_URL_TEST + "org_req/user/" + uid )
    
  }
  deleteOrg(id) {
   
    return axios.delete(API_URL_TEST + "organization/" + id )
    
  }
  getOrganizationFile(orgid) {
   
    return axios.get(API_URL_TEST + "organization/" + orgid + "/joinFilesDataResponse", { headers:authHeader() })
    
  }
  downloadOrgFiles(orgid,namefield,value) {
   
    return axios({
      url: API_URL_TEST + "org_files/" + orgid + "/"+ namefield+ "/"+ value, //your url
      method: 'GET',
      responseType: 'blob',
     // headers: authHeader(), // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', value); //or any other extension
      document.body.appendChild(link);
      link.click();
  });
    
  }
  elligibleProjectType() {
    return axios.get(API_URL_TEST + "eligibility/eligible_project_type")
  }
  postProgram(sid,fieldname,val) {
    return axios.post(API_URL + "submission/id/"+sid+"/fieldname/"+fieldname,val, { headers:authHeader() })
  }
  sendEligibleType(sid,ans,val) {
    return axios.post(API_URL_TEST + "eligibility/submission_eligibility_responses/sid/"+sid+"/aid/"+ans,val)
  }
  getNofalineItemsType() {
    return axios.get("http://localhost:9005/api/faast/nofaApi/getNofaItemType")
  }
  getNofa() {
    return axios.get("http://localhost:9005/api/faast/nofaApi/getNofa")
  }
  getNofatabs() {
    return axios.get("http://localhost:9005/api/faast/nofaApi/getNofaTab")
  }


}

export default new UserService();
