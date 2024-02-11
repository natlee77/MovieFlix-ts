var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state } from './config.js';
export function fetchData(endpoint, page = 1, criteria) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = state.api.key;
        const BASE_URL = state.api.baseUrl;
        let url = "";
        if (criteria) {
            url = `${API_KEY}${endpoint}?query=${criteria}&api_key=${API_KEY}&language=sv=SE&page=${page}`;
        }
        else {
            url = `${API_KEY}${endpoint}?&api_key=${API_KEY}&language=sv=SE&page=${page}`;
        }
        const response = yield fetch(url);
        try {
            if (response.ok) {
                // Läser in datat  ifrån response{o}- async             
                const data = yield response.json();
                return data;
            }
            else {
                //if bad request 400-fysisk
                throw new Error(`problem to get data ${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            throw new Error(`Error in  get(): ${error.message}`);
        }
    });
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
