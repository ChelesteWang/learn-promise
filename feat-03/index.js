export default function main() {
  console.log('准备烹饪');
  const cook = (stage) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(stage);
        resolve(stage);
      }, 2000);
    });

  Promise.all(
    cook('开始切菜'),
    cook('开始切菜'),
    cook('起锅烧油'),
    cook('放入调料'),
    cook('翻炒均匀'),
    cook('装盘上桌')
  ).then(() => console.log('结束烹饪'));
}
