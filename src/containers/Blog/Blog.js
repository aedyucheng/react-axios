import React, { Component } from 'react';

import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import {Route, NavLink} from 'react-router-dom';

import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="myClass"
                                activeStyle={{
                                    color: "red",
                                    textDecoration: "underline"
                                }}
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?param1=abc'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/posts" exact render={() => <Posts />} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                
            </div>
        );
    }
}

export default Blog;