
import axios from 'axios';

export default axios.create({
    proxy: 'http://localhost:8080'
});
