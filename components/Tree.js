import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ nodes }) => {
  const renderTree = (node) => {
    if (!node) return null;
    return (
      <div>
        <TreeNode value={node.value} />
        {node.children && node.children.map((child, index) => (
          <div key={index} style={{ marginLeft: 20 }}>
            {renderTree(child)}
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderTree(nodes)}</div>;
};

export default Tree;
