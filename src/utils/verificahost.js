import infohosts from "./infohosts.json"
   
const verificaHost = (hostname) => {

    //console.log({hostname});
    const datahost = infohosts.find((item) => {
        return item.hostname === hostname 
    })

    return {...datahost}
    
  }

  export default verificaHost;

  

 