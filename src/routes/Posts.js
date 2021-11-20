import React, { useState, useEffect } from "react";

function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsInfo = await postsResponse.json()
        console.log(postsInfo)
        setPosts(postsInfo)
      } catch {
        console.log('Ocorreu algum erro ao buscar os posts');
      }
    }
    getPosts()
  }, [])

  return (
    <div>
      <h2>Meus Posts:</h2>
      {posts.map(({id,title,body}) => {
        return (
          <React.Fragment key={id}>
            <h4>{id} - {title}</h4>
            <p>{body}</p>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Posts;

