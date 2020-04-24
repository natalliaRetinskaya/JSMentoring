const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */

function printDataCallback() {
    function printData(data) {
        console.log(data)
    }
    callbackFunction(printData)
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction().then((data) => {
        console.log(data)
    })
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    try {
      const data = await promiseFunction()
      console.log(data)
    } catch(error) {
      alert(error)
    }
  }



/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function printData(error) {
        throw error
    }
    callbackFunctionError(printData)
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch((error) => {
        console.error(error);
    });
}


// console.log(promiseFunctionError())
// promiseFunctionError().then(()=>{}).catch((error) => {
//     //console.log(error)
//     throw error

//handlePromiseError()

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        let result = await promiseFunctionError();
    } catch (err) {
        throw err
    }
}




module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};