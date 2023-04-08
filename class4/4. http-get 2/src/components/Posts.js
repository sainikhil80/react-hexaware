import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  getPostData(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          this.setState({
              posts: response.data
          })
      })
      .catch(error => console.log(error))
  }

  componentDidMount(){
      this.getPostData()
  }

  render() {
    return (
      <div>
        <h1>All Post</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Posts;
