import { useHttpType } from "../types/types";

const useHttp = () => {
  const onRequest: useHttpType = async (url, token) => {
    
    try {
      const response = await fetch(url, {headers: {
        Authorization: `Bearer ${token}`,
      }});

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.json();
    } catch (e) {
      console.log(`You have thes error ${e}`);
      throw e
      
    }
  }

  return {
    onRequest
  }
}

export default useHttp;