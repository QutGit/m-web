// 获取标签所在位置偏移量
// eslint-disable-next-line no-shadow
const getOffset = function(child, parent) {
  parent = parent || document.body;
  // eslint-disable-next-line no-shadow
  let [ left, top ] = [ 0, 0 ];
  while (child && child !== parent) {
    left += child.offsetLeft;
    top += child.offsetTop;
    child = child.offsetParent;
  }
  return { left, top };
};

export default getOffset;
