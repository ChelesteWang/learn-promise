import myPromise from './myPromise';
export default function main() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 成功');
    }, 2000);
  }).then((res) => console.log(res));

  new myPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('my promise 成功');
    }, 3000);
  }).then((res) => console.log(res));
}
