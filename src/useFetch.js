import { useState, useEffect} from "react";


const useFetch = (url) => {
    const abortCont = new AbortController();
    const [users, setUsers] = useState(null);
    const [ isPending, setPending] = useState(true);
    const [ error, setError] = useState(null);
  
    useEffect(() => {
        setTimeout(() => {
    fetch(url, { signal: abortCont.signal })
    .then(res => {
      if(!res.ok) {
    throw Error('couldnt fetch the Data');
      }
      return res.json();
    })
    .then( usersdata =>{
      setUsers(usersdata);
      setPending(false);
      setError(null)
    })
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('fetch aborted');
        }else {
    setPending(false);
    setError(err.message);    
        }

    })
        }, 1000);
return () => abortCont.abort();
     }, [url]);

     return { users, isPending, error }
}

export default useFetch;