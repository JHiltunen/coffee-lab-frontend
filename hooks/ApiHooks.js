import {useEffect, useState} from 'react';
import {doFetch} from '../utils/http';
import {baseUrl} from '../utils/variables';

const useMedia = () => {
    const [coffeeArray, setCoffeeArray] = useState([]);
  
    useEffect(() => {
      (async () => {
        setCoffeeArray(await loadCoffees());
      })();
    }, []);
  
    const loadCoffees = async () => {
        try {
            const response = await doFetch(baseUrl + 'coffees/');
            return response;
          } catch (e) {
            console.log('Error:', e.message);
          }
    };
  
    return {coffeeArray, loadCoffees};
  };
  
  export {useMedia};