let a ="print_employee_paychecks";
//转成//"printEmployeePaychecks";

let arr= a.split("_");


this.result = "";
for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    this.result  += str.charAt(0).toLocaleUpperCase()+str.substr(1,str.length-1);
}

console.log(this.result);


let b ="printEmployeePaychecks";
function toLine(name) {
    //return name.replace(/([A-Z])/g,"_$1").toLowerCase();


    return name.replace(/([A-Z])/g,"_$1").toLocaleUpperCase();
  }

console.log(toLine(b));