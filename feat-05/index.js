export default function main() {
  new Promise((resolve, reject) => {
    resolve('成功');
  }).then((res) => console.log(res));
}
