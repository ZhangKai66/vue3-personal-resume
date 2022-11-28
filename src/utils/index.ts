export function toLine(param: string) {
  // $1代表前方小括号内捕捉到的内容 ：先捕获大写，在前面加上-，再转小写
  return param.replace(/(A-Z)g/,'-$1').toLowerCase();
}