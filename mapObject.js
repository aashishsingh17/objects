function mapObject(obj, cb) {
          // Like map for arrays, but for objects.
          // Transform the value of each property in 
          //turn by passing it to the callback function.
          // http://underscorejs.org/#mapObject
          let arr = [];
          for(var i in obj)
          {
              var x= obj[i];
              cb(x);
             arr.push(x);
          }
          return arr;
      }
 function cb(x)
 {
        x = x + "z";
 }
 export{mapObject,cb}