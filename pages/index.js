import React, { useState } from 'react';
import Tree from '../components/Tree';

const initializeTree = (depth) => {
  const createNode = (currentDepth) => {
    if (currentDepth === depth) return { value: 1 };
    return { value: 1, children: [createNode(currentDepth + 1)] };
  };
  return createNode(0);
};

const tree = initializeTree(5); // For testing, using smaller depth

const IndexPage = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    // Handle user authentication
  };

  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={handleInputChange} placeholder="Enter username" />
          <button type="submit">Login</button>
        </form>
      ) : (
        <Tree nodes={tree} />
      )}
    </div>
  );

  //State Management and Integration with
 const IndexPage = () => {
  const [treeData, setTreeData] = useState(/* Initialize with your tree data */);

  const updateNode = (updatedNode) => {
    // Update logic to handle node updates
    const updatedTree = treeData.map((node) =>
      node.id === updatedNode.id ? updatedNode : node
    );
    setTreeData(updatedTree);
  };

  return (
    <div>
      <h1>Deep Tree Project</h1>
      <Tree treeData={treeData} updateNode={updateNode} />
    </div>
  );

};

export default IndexPage;
