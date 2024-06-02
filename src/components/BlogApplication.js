import React, { useState } from 'react';

// Initial blog data
const initialBlogs = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'Content of the first blog post',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'Content of the second blog post',
  },
];

const BlogApplication = () => {
  //this is initial state for initialBlogs
  const [blogs, setBlogs] = useState(initialBlogs);
  // this is initial state for title
  const [title, setTitle] = useState('');
  // this is initial state for content
  // they do need to be different to listen to differt inputs
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [currentBlogId, setCurrentBlogId] = useState(null);

  // write a function to add new post when you click on a button and also
  // reset input for content and title wfter you add the post to
  // exsisting initialBlogs array
  const addNewPost = () => {
    if (title.trim() && content.trim()) {
      // set a new blog with UNIQUE ID
      const newBlog = {
        id: Date.now(), // Unique ID based on the current timestamp
        title,
        content,
      };
      // Add the blog to the ones that already exsist
      setBlogs([...blogs, newBlog]);
      // setTitle and Content to '' and also
      // make sure to add onChange to the each input
      setTitle('');
      setContent('');
    }
  };
  // to delete the post we need to create delete the function and pass it to the delete button
  const deleteThePost = (id) => {
    // blog.id !== id checks if the id of the current blog object is not equal to the id that we want to delete.
    // If the condition is true, the blog is kept in the new array;
    //if false, it is excluded from the new array.
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  // so now the hardest part to edit the post
  const handleEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setContent(blogToEdit.content);
      setIsEditing(true);
      setCurrentBlogId(id);
    }
  };

  const handleSave = () => {
    if (isEditing) {
      setBlogs(
        blogs.map((blog) =>
          blog.id === currentBlogId ? { ...blog, title, content } : blog
        )
      );
      setIsEditing(false);
      setCurrentBlogId(null);
    } else {
      addNewPost();
    }
    setTitle('');
    setContent('');
  };
  return (
    <div>
      <h1>Blog Application</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
        />
        <button type='submit'>{isEditing ? 'Update' : 'Add'}</button>
      </form>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <button onClick={() => handleEdit(blog.id)}>Edit</button>
          <button onClick={() => deleteThePost(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogApplication;
