export const userdata= {} ;
let login = 0;
export function setuser(data){
    Object.assign(userdata, data); 
    console.log(userdata);
}
export function getuser(){
    return userdata;
}
export function setlogin(data){
    login = data;
}
 export function getlogin(){
    return login;
}
