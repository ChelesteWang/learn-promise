import myPromise from './myPromise'
export default function main() {
  new Promise((resolve, reject) => {
    resolve('promise 成功');
  }).then((res) => console.log(res));

  new myPromise((resolve, reject) => {
    resolve('my promise 成功');
  }).then((res) => console.log(res));
}
