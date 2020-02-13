import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
// import NewPost from '../Blog/NewPost/NewPost';

import './Blog.css';

const NewPost = React.lazy(() => import('../Blog/NewPost/NewPost'));

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="myClass"
                                activeStyle={{
                                    color: "red",
                                    textDecoration: "underline"
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?param1=abc'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* <Route path="/posts" exact render={() => <Posts />} /> */}
                    <Route path="/new-post" 
                        render={() => (
                        <Suspense fallback={<div>loading...</div>}>
                            <NewPost />
                        </Suspense>
                        )} /> 
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>

            </div>
        );
    }
}

export default Blog;