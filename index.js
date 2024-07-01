import React, { useState } from 'react';
import Tree from '../components/Tree';

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
