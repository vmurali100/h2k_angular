import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mobile"
})
export class MobilePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(value);
    //Created An Array
    var mno = value.split("");
    var newNo = [];
    mno.map(function(v) {
      if (v != "(" && v !== ")" && v !== "-") {
        newNo.push(v);
      }
    });
    console.log(newNo.join(""));
    // return value;
    return newNo.join("");
  }
}
