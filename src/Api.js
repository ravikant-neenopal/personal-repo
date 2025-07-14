import React, { useEffect, useState } from 'react';
import Post from './Post';
import Loading from './Loading';
import Button from './components/Button';

function Api() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    await new Promise(res => setTimeout(res, 2000));
    try {
      let res = await fetch('https://dummyjson.com/quotes')
      res = await res.json();
      res = res.quotes
      setPosts(res);

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {
        <>
        <h1>
          Fetch Quotes from API
        </h1>
        <Button onClick={fetchData} text={"Fetch"}/>
        </>
      }
    <div className='post-main'>
      {loading ? <Loading /> : posts?.map(post => <Post id={post.id} quote={post.quote} />)}
      {error && <div className='error'>Error: {error.message}</div>}
      </div>
      </>
  )
}

export default Api;
