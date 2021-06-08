import axios from 'axios'
import md5 from 'md5'

const publicKey = '1491a92be3d61a08ff3441f9d6804a20';
const privateKey = 'fdc9f3c9f971e2857dfc2ed9f41f237e3384dd27';
const ts = Number(new Date().getTime());
//Variavel necessaria para url da api(Documentação)
const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
    baseURL:  `http://gateway.marvel.com/v1/public/`,
    params:{
        ts,
        apikey:publicKey,
        hash
    }
}
)
export default api