 import {state} from './config.js'
 import { ResponseModel } from '../models/ResponseModel.js';
import { BaseType } from '../models/BaseType.js';

export async function fetchData(endpoint:string, page:number=1, criteria?:string):
Promise< ResponseModel | BaseType >{ //return promise ->skapa interface ResponseModel i models
 const API_KEY=state.api.key;
 const BASE_URL=state.api.baseUrl;
  let url="";
 //https://api.themoviedb.org/3/movie/popular?api_key=e37e2f3f58bd0980eac83099577532c2&language=ru-RU
  if(criteria){
url=`${BASE_URL}${endpoint}?query=${criteria}&api_key=${API_KEY}&language=sv=SE&page=${page}`;
  }else{
    url=`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=sv=SE&page=${page}`;
  }

  const response = await fetch(url);
  try{
            if (response.ok) {
                // Läser in datat  ifrån response{o}- async             
                 const data = await response.json();
                 return data;        
                  
              } else {
                //if bad request 400-fysisk
                throw new Error(`problem to get data ${response.status} ${response.statusText}`);
              }
        } catch ( error:any ) {     
            throw new Error(`Error in  get(): ${error.message}`);
          }
        }
 

// JS- export default class HttpClient  {    
//     //https://api.themoviedb.org/3/movie/popular?api_key=e37e2f3f58bd0980eac83099577532c2&language=ru-RU
//     async get(resourse) {
       
//         const baseUrl=`${settings.BASE_URL}/${resourse}`;
//         const url=`${baseUrl}?api_key=${settings.API_KEY}`;//&language=se-SE
//         const response = await fetch(url);   
        
         
//     try{
//         if (response.ok) {
//             // Läser in datat  ifrån response{o}- async             
//              const data = await response.json();
//              return data;        
              
//           } else {
//             //if bad request 400-fysisk
//             throw new Error(`problem to get data ${response.status} ${response.statusText}`);
//           }
//     } catch (error) {     
//         throw new Error(`Error in  get(): ${error.message}`);
//       }
//     }
// }