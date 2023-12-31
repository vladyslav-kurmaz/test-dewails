import useHttp from "../useHttp/useHttp";
import { User } from "../types/types";

const UserSearchService = () => {
  const _baceUrl = 'https://api.github.com';
  const _apiKey = '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';

  const {onRequest} = useHttp();

  const getUser = async (nikname: string): Promise<User | null> => {    

      const res = await onRequest(`${_baceUrl}/users/${nikname}`, _apiKey);
      
      if (typeof res === 'object' && res !== null) {        
        return transform(res)
      }  
      return null 
  }

  const transform = (user: User): User => {    
    return {
      avatar_url: user.avatar_url,
      name: user.name,
      bio: user.bio,
      html_url: user.html_url
    };
  }

  return {getUser};
}

export default UserSearchService;