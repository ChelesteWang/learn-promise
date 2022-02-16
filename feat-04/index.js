export default function main() {
  const success = Promise.resolve('成功');
  const fail = Promise.reject('失败');

  success.then((res) => {
    console.log(res);
  });

  fail.catch((res) => {
    console.log(res);
  });

  // 并发执行全部返回都为成功才成功
  const data = Promise.all([success, fail]);
  data
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  // 并发执行第一个返回结果决定整体结果
  const result = Promise.race([success, fail]);
  result
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log('测试 Promise all race');
}
