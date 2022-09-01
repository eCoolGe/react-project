import React, {useState} from 'react';
import './styles/App.css';
import TestCounter from "./components/TestCounter";
import PostItem from "./components/PostItem";
import TestValueInput from "./components/TestValueInput";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description 1'},
        {id: 2, title: 'JavaScript 2', body: 'Description 2'},
        {id: 3, title: 'JavaScript 3', body: 'Description 3'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts()
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
