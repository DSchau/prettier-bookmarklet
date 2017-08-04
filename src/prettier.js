import { ENDPOINT } from './constants';

const url = document.location.href;

const isCodeBlock = node => node.nodeName === 'CODE';

const containsCodeBlock = block => {
  const children = Array.from(block.childNodes);
  return children.some(isCodeBlock);
};

const tags = Array.from(document.querySelectorAll('pre'))
  .map(block => {
    if (containsCodeBlock(block)) {
      const nodes = block.childNodes;
      for (let i = 0; i < nodes.length; i++) {
        if (isCodeBlock(nodes[i])) {
          return nodes[i];
        }
      }
    }
    return block;
  });

fetch(`${ENDPOINT}?url=${url}`, {
  method: 'OPTIONS',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    const { blocks } = data;
    if (blocks.length === tags.length) {
      tags
        .forEach((tag, index) => {
          tag.innerText = blocks[index];
        })
    } else {
      console.warn('Uh-oh, something went wrong. Mismatch from the server generated code blocks vs. local code blocks');
    }
  })
  .catch(err => console.warn(err));
