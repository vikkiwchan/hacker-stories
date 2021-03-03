import React from 'react';

// definition of App component
const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // searchterm: current state
  // setSearchTerm: function to update this state
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} search={searchTerm} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ onSearch, search }) => {
  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text' onChange={onSearch} value={search} />
    </div>
  );
};

// definition of List component
const List = ({ list }) =>
  list.map((item) => <Item item={item} key={item.objectID} />);

// definition of item component
// recommended way of writing readable code
const Item = ({ item }) => {
  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  );
};

export default App;
