export function main() {
  console.log('准备烹饪');
  function cook(resolve, reject) {
    console.log('开始洗菜');
    resolve();
  }
  cook(()=>{
    console.log('开始切菜')
  },);
}
