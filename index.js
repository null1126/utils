/**
 * @description 复制内容
 * @param { string } value 内容
 * @returns { string } 提示内容
 */
export const copyContent = (value) => {
    let oInput = document.createElement('input');
    oInput.value = value;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象;
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.remove()
    return '复制成功~'
}