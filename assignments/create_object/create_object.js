function CreateObject(arr) {
    // Write your code here
   var resObj= {}
    for (i=0;i<arr.length;i++){
        if (i%2===0){
           var key=arr[i]
        }
        else{
           var value=arr[i]
            resObj[key]=value
        }
    }

    return resObj
}

module.exports = CreateObject;
