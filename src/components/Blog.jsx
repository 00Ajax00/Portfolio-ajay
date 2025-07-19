const Blog = () => (
  <section id="blog" className="blog animate-on-scroll" aria-labelledby="blog-title">
    <h2 id="blog-title">Blog</h2>
    <div className="blog-posts">
      <div className="post" tabIndex="0" aria-label="Blog post: Post Title">
        <h3>Post Title</h3>
        <p>A brief summary of the blog post.</p>
        <a href="#" className="btn" aria-label="Read more about Post Title">Read More</a>
      </div>
    </div>
  </section>
);

export default Blog;