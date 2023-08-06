import useHttp from "../useHttp/useHttp";
import { User } from "../types/types";

const UserSearchService = () => {
  const _baceUrl = 'https://api.github.com';
  const _apiKey = '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';

  const {onRequest} = useHttp();

  const getUser = async (nikname: string): Promise<User | null> => {    

      const res = onRequest(`${_baceUrl}/users/${nikname}`, _apiKey);
      
      if (typeof res === 'object' && res !== null) {
        console.log(res);
        
        const {avatar_url, name, bio, html_url} = res;
        console.log(avatar_url, name, bio, html_url);
        
        return res
      }  

      return null 
      
  }
  return {getUser};
}

export default UserSearchService;