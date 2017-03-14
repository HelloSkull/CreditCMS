import fetch from 'dva/fetch';
import utils from  "../utils/utils";

function checkStatus(response) {
  console.log("response------>",response);
  if (response.status >= 200 && response.status < 300) {
        return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


function checkResultData(data){
  if(!data.code && data.data){
    return true;
  }else{
    alert(data.message);
    switch (data.code){
      case 1041:
        utils.goHref("/login");
        break;
    }
  }
}

export default async function request(params) {

  if(params.queryParams){
    params.url = params.url + "?" + (() =>{
        let queryParamsStr = "";
        for(var i in params.queryParams){
          if(params.queryParams[i]){
            queryParamsStr += i + "=" + params.queryParams[i] + "&";
          }
        }
        return queryParamsStr.substring(0,queryParamsStr.length -1 );
      })()
  }
  let P = {};

  if(params.type){
    P = {
      method: "POST",
      mode: 'cors',
      cache: 'default',
      body:(() =>{
          let formParamsStr = "";
          if(params.formParams){
            for(let i in params.formParams){
              formParamsStr += i + "=" + params.formParams[i] + "&";
            }
          }
          return formParamsStr.substring(0,formParamsStr.length -1 );
      })()
    };

    P.headers = {
      'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }

  const response = await fetch(params.url, P);
  checkStatus(response);
  const data = await response.json();
  checkResultData(data);
  return { data };
}




