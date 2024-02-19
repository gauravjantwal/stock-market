import { STORE_USER } from './types'
import { setAuthHeader , setLoaderApiCalls} from '../utility/axiosHeaders';

export function storeUser(user) {
    setAuthHeader(user.access_token)
    setLoaderApiCalls()
    console.log('From stroe User:: ' + user.access_token);
    
    return {
      type: STORE_USER,
      payload: user
    }
  }