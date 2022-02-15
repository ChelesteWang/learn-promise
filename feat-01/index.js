export default function main() {
  console.log('准备烹饪');
  function cook(stage, resolve, reject) {
    setTimeout(() => {
      console.log(stage);
      resolve();
    }, 2000);
  }
  cook('开始切菜', () => {
    cook('开始炒菜',()=>{
      cook('起锅烧油',()=>{
        cook('放入调料',()=>{
          cook('翻炒均匀',()=>{
            cook('装盘上桌',()=>{
             console.log('结束烹饪')
            })
          })
        })
      })
    })
  });
}
