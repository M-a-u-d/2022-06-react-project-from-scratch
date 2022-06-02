import React, {useEffect, useState} from "react";
import axios from "axios";

function Subreddit () {
    const [posts, setPosts]= useState (null);
    const [ error, toggelError] = useState()

    const {subredditId} = useParams();


    useEffect(()=>{
        async function fetchData(){
            toggleError (false)

            try {
                const result = await.axios.get(`https://www.reddit.com/hot.json?limit=15`)
                setPosts(result.data.data);
            console.log(posts)
            }catch (e){
                console.error (e);
                toggelError(true)

            }
        }
        fetchData()

    ), []);

    return (

    <h1>Subreddit</h1>

    );
}

export default Subreddit