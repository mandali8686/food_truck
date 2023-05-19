import axios from 'axios';

export const fetchData = async () => {
    const result = await axios.get('https://data.sfgov.org/resource/rqzj-sfat.json');
    return result.data;
};
