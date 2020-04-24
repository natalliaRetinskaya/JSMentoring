const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */

unction printDataCallback() {
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
    await promiseFunction().then((data) => {
        console.log(data)
    })
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
   promiseFunctionError.catch(Error);
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
            await promiseFunctionError();
        } catch (Error) {
            console.error(Error);
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