/**
 * You need to write a parser, which takes the ./test.json file
 * and will create a new JSON file with the name parsed.json with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the ./test.json file
 * Please NOTE, that you should omit the .html extension
 * Please do the task in the scope of the file. Create a pull request a share it with your mentor.
 */

// const parsed = JSON.parse('./test.json')
// console.log(parsed.docId)

const fs = require('fs');
const myObject = require('./test.json');



const myArr = myObject.list.entries;
function getName(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        let idName = array[i].entry.name
        let id = idName.replace(".html", "")
        let obj = {}
        obj.docId = `http://doc.epam.com/${(id)}`
        newArr.push(obj)
    }
    return newArr
}

let arr = getName(myArr);

//console.log(arr)
const stringifinedJson = JSON.stringify(arr)

fs.writeFile('./parsed.json', stringifinedJson, err => {
    if (err) {
        throw err;
    }
    console.log('The file is created')
});