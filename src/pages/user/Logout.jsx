import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    axios.post('http://localhost/reactjs/logout.php', {request:"logout", credentials: "same-origin"})
    .then(function(res){
     if(res.data == "success"){
        navigate("/login");
     }
    })
    .catch(err => console.log(err))
}