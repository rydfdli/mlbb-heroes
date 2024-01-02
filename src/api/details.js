import React, {
    useEffect,
    useState
  } from 'react'
  
  import axios from 'axios'

const getHeroDetails = (id) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://express-mlbb-api.vercel.app/mobile-legends/hero/${id}`);
          setData(response.data)
        } catch (error) {
          console.error('Terjadi kesalahan:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return data;
  }

  export default getHeroDetails