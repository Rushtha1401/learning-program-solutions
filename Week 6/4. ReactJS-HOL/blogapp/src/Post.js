import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetch posts from API
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
      });
  };

  // Lifecycle hook: componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Lifecycle hook: componentDidCatch (Error Boundary)
  componentDidCatch(error, info) {
    alert("An error occurred while rendering the component.");
    console.error("Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
