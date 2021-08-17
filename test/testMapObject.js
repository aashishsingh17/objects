import {mapObject,cb} from '../mapObject.js'
import { testObject } from './testObject.js'
let res=[];
res=mapObject(testObject,cb);
console.log(res);