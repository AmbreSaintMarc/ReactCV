import React, { useState, useEffect } from 'react';


function Github() {
    const [john, setPosts] = useState([]);
    const fetchPost = async () => {
    const response = await fetch(
        "https://api.github.com/users/github-john-doe"
      );
     const data = await response.json();
      setPosts(data);
    };
  
    useEffect(() => {
      fetchPost();
    }, []);
    return (
      <div className="Github">
        <h1>Github user</h1>
        <h2> {john.name} </h2>
        <img src={john.avatar_url} alt="Profil picture of John Doe"></img>
        <p>{john.bio}</p>
        <p>Abonnés : {john.followers}</p>
        <p>Abonnement : {john.following}</p>
        <p>Créé le : {john.created_at}</p>
        <p>Modifié le : {john.updated_at}</p>
        <a href={john.repos_url} target="_blank">{john.repos_url}</a>
      </div>
    );
}
export default Github;
