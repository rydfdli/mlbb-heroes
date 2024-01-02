import React, {
    useEffect,
    useState
  } from 'react'
  
  import axios from 'axios'

const getHeroByRole = (role) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://express-mlbb-api.vercel.app/mobile-legends/role/${role}`);
          setData(response.data)
          console.log(role)
        } catch (error) {
          console.error('Terjadi kesalahan:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return data;
  }

  export default getHeroByRole