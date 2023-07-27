export default function authHeader(){
    const token = sessionStorage.getItem('token');
    if(token != null){
        console.log(token);
        return  { Authorization: `Bearer ${token}`};
      
    } else{
        return null;
    }
    
}