import { ENDPOINT } from './constants';

const isCodeBlock = node => node.nodeName === 'CODE';

const containsCodeBlock = block => {
  const children = Array.from(block.childNodes);
  return children.some(isCodeBlock);
};

const blocks = Array.from(document.querySelectorAll('pre'))
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

export default Promise.all(
  blocks
    .map(block => {
      return fetch(ENDPOINT, {
        method: 'POST',
        mode: 'cors'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(({ prettier }) => {
          block.innerText = prettier;
          return prettier;
        })
    })
)
