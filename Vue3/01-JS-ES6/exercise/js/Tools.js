// ES module 概念（丟出模組）

const Add = (a,b) => {
    return a+b
}

// 選擇性丟出
export const Name = 'yizi'
export const age = 12

// 需要透過 const 輸出
export const Remove = () => {
    return a - b
}

// default =>> 將Ａdd預設丟出
// default 只能有一個
export default Add;