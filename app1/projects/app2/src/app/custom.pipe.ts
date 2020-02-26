import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "custom"
})
export class CustomPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(value);
    let newValues = value.filter(obj => {
      return obj.employeeName.indexOf("S") == 0;
    });
    return newValues;
  }
}
