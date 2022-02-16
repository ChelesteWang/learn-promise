const success = Promise.resolve('成功');
const fail = Promise.reject('失败');

// 并发执行全部返回都为成功才成功
const data = Promise.all(success, fail);

// 并发执行第一个返回结果决定整体结果
const result = Promise.race(success,fail)