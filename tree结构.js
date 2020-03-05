https://www.jianshu.com/p/bf0fb78b23ab

var arr = [
    { id: 1, parentId: 0 },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 2 },
    { id: 4, parentId: 3 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 4 },
    { id: 7, parentId: 0 },
  ];



/* 1.先判断是否p=0
是的话，直接添加到arr=[]内
2.否，找到arr中，p == arr[k].id

3.找到后，判断arr[k]是否有children这个key,没有先生成，再把该元素push进去
 */

function createTree(arr) {
    if(arr == ) {

    }
}




/**
 * 
 * 
 * 期望如下：
[
  {
    id: 1,
    parentId: 0,
    children: [
      {
        id: 2,
        parentId: 1,
        children: [
          {
            id: 3,
            parentId: 2,
            children: [
              { id: 4, parentId: 3, children: [{ id: 6, parentId: 4 }] },
            ],
          },
          { id: 5, parentId: 2, children: [] },
        ],
      },
    ],
  },
  { id: 7, parentId: 0 },
];
 * 
 * 
 */