import myPromise from './myPromise';
export default function main() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 成功');
    }, 2000);
  }).then((res) => console.log(res));

  const p = new myPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('my promise 成功');
    }, 3000);
  })
  p.then((res) => console.log(res));
  p.then((res) => console.log(res));
}
