//0916最後執行腳本內容範例
let node = _.find(nodes, function(o){    //將搜尋到的結果存到nodes，再用find找尋/自動化/
    return /自動化/.test(o.innerText)    //將nodes中找到/自動化/的節點儲存到node中
})
console.log(node);                      //在debub mode的console中打印出來node的內容
node.scrollIntoView();                  //捲動畫面到中央

Write("result.txt", node.innerText);    //將搜尋結果儲存到result.txt
