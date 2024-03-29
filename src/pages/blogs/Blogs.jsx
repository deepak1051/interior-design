import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './blog.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://api.interiorkarwalo.com/api/v1/user/post',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('blogToken')}`,
            },
          }
        );
        setBlogs(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container container-flex">
        <main role="main" className="b-main">
          <article className="article-featured">
            <img
              src="https://i0.wp.com/artfulliving.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-08-at-3.04.59-PM.png?fit=1017%2C676&ssl=1"
              alt="simple white desk on a white wall with a plant on the far right side"
              className="article-image-main"
            />
            <p className="article-info">July 23, 2019 | 3 comments</p>
            <h2 className="article-title">Finding simplicity in life</h2>
            <p className="article-body">
              Life can get complicated really quickly, but it doesn't have to
              be! There are many ways to simplify your life, a few of which
              we've explored in the past. This week we're taking a bit of a
              approach though, in how you can find simplicity in the life you
              already living.
            </p>
            <a href="#" className="article-read-more-p">
              CONTINUE READING...
            </a>
          </article>

          {blogs.map((blog) => {
            return (
              <article className="article-recent" key={blog._id}>
                <div className="article-recent-main">
                  <h2 className="article-title">{blog.title} </h2>
                  <p className="article-body">
                    {blog.desc.substring(0, 100)}...
                  </p>
                  <Link to={`/blogs/${blog._id}`} className="article-read-more">
                    CONTINUE READING...
                  </Link>
                </div>
                <div className="article-recent-secondary">
                  <img
                    src={blog.imageUrl}
                    alt="two dumplings on a wood plate with chopsticks"
                    className="article-image-body"
                  />
                  <p className="article-info">
                    {formatDistanceToNow(new Date(blog.created_at), {
                      addSuffix: true,
                    })}{' '}
                    |{' '}
                    {blog.comment.length === 0
                      ? null
                      : `${blog.comment.length} comments`}
                  </p>
                </div>
              </article>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Blogs;
