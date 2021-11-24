import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Post() {

  const [post, setPost] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const postInfo = await postResponse.json()
        setPost(postInfo)
      } catch {
        console.log('Ocorreu algum erro ao buscar os posts');
      }
    }
    getPost()
  }, [id])

  //barreira de carregamento

  if(!post) return null//component de loading

  return (
    <div>
      <h2>Post:</h2>
      <h4>{post.id} - {post.title}</h4>
      <p>{post.body}</p>
      {/* {post.map(({id,title,body}) => {
        return (
          <React.Fragment key={id}>
            <h4>{id} - {title}</h4>
            <p>{body}</p>
          </React.Fragment>
        )
      })} */}
    </div>
  )
}

export default Post;

