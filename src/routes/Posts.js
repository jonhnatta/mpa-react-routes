import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Posts() {

  const [posts, setPosts] = useState([])
  const location = useLocation()
  const history = useNavigate()



  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsInfo = await postsResponse.json()

        const queryObj = new URLSearchParams(location.search)
        const userId = Number(queryObj.get('userId'))

        const filteredPosts = userId
          ? postsInfo.filter(post => post.userId === userId)
          : postsInfo

        setPosts(filteredPosts)
      } catch {
        console.log('Ocorreu algum erro ao buscar os posts');
      }
    }
    getPosts()
  }, [location.search])

  const handleNavigation = id => {
    history(`/posts/${id}`)
  }

  return (
    <div>
      <h2>Meus Posts:</h2>
      {posts.map(({ id, title, }) => {
        return (
          <React.Fragment key={id}>
            <h4 className="id-posts" onClick={() => handleNavigation(id)}>{id} - {title}</h4>
          </React.Fragment>
        )
      })}
    </div>
  )

}

export default Posts;

