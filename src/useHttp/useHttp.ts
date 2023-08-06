import { useHttpType } from "../types/types";

const useHttp = () => {

  const onRequest: useHttpType = async (url, token) => {
    
    try {
      
      const response = await fetch(url, {headers: {
        Authorization: `Bearer ${token}`,
      }});

      if (!response.ok) {        
        throw new Error('Resource not found');
      }
      
      return await response.json();
    } catch (e) {
      
      throw e
      
    }
  }

  return {
    onRequest
  }
}

export default useHttp;