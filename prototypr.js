// var parent={
//     value:"parentvalue",
//     obj:{
//         objValue:"parentobjValue"
//     },
//     walk:function(){
//         console.log("walking");
//     }
// };
// var child=Object.create(parent);
// child.value="childvalue";
// child.obj.objValue="childobjvalue";
// console.log("CHILD-child.value: ",child.value);
// console.log("CHILD-child.obj.objvalue: ",child.obj.objValue);
// console.log("CHILD-parent.value: ",parent.value);
// console.log("CHILD-parent.obj.objvalue: ",parent.obj.objValue);
// console.log("parent ",parent);
// console.log("child ",child);
// console.log("child.obj==parent.obj? ",child.obj==parent.obj);
// var grandchild=Object.create(child);
// console.log("grandchild:",grandchild);
// grandchild.walk();
function Dog(name){
    this.name=name;
    console.log("this is: ",this);
}
var mydog=new Dog("max")
console.log("my dog: ",mydog);
Dog("max2")
