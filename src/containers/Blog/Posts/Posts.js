import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';

import classes from './Posts.module.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatePosts });
            })
            .catch(error => console.log(error));
    }

    postClickHandler = (id) => {
        this.props.history.push({pathname: '/' + id});
        // this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong !</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={"/" + post.id} key={post.id} >
                        <Post  
                            key={post.id} 
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postClickHandler(post.id)}
                        />
                    // </Link>
                );
            });
        }

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;