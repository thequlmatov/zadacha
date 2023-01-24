import React, { Component } from "react";

class Appi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, //Holds the value for the current page
      posts: [], //Array where the data is stored
      loading: null, //Holds the value for the loading state.. can either be true or false
      postsPerPage: 5 //Holds the value for the number of posts per page. You can adjust to suit your needs
    };
  }

  //Fetch data on component mount
  componentDidMount() {
    this.setState({loading: true})
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(data => {
        this.setState({ posts: data });
        this.setState({loading: false})
    })
  }

  render() {
    //Get currentPosts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

    //Implement page numbers
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(this.state.posts.length / this.state.postsPerPage); i++) {
      pageNumbers.push(i);
    }

    //Set current page
    const setPage = (pageNum) => {
      this.setState({currentPage: pageNum})
    }

    return (
      <div className="w-4/5 mx-auto">

        <h2 className="text-2xl text-center font-bold">React Pagination Using Class Components and Tailwind CSS</h2>
        <hr />

        {
          this.state.loading === true
            ? <div className="w-full h-screen flex items-center justify-center">
                {/* <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={100}
                  width={100}
                /> */}
            </div>
          :
          currentPosts.map((post, id) => (
            <div key={id} className="border-2 border-blue-500 rounded m-4 p-4">
              <div className="text-lg font-bold">{post.title}</div>
              <div className="mt-2">{post.body}</div>
            </div>
          ))
        }

        <div className="w-full flex justify-around">
          {
            pageNumbers.map((pageNum, index) => (
              <span key={index} className={pageNum === this.state.currentPage ? "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full bg-blue-500 text-white" : "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full"} onClick={() => {setPage(pageNum)}}>
                {pageNum}
              </span>
            ))
          }
        </div>


        <div></div>
      </div>
    );
  }
}

export default Appi;