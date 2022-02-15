export default function main() {
  console.log('准备烹饪');
  const cook = (stage) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(stage);
        resolve(stage);
      }, 2000);
    });

  cook('开始切菜')
    .then(() => cook('开始炒菜'))
    .then(() => cook('起锅烧油'))
    .then(() => cook('放入调料'))
    .then(() => cook('翻炒均匀'))
    .then(() => cook('装盘上桌'))
    .then(() => console.log('结束烹饪'));
}
