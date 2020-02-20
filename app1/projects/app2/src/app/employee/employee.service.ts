import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  getEmployees() {
    return this._http.get("http://localhost:3000/employees");
  }
  addEmployee(employee) {
    return this._http.post("http://localhost:3000/employees", employee);
  }
  deleteEmployee(employee) {
    return this._http.delete("http://localhost:3000/employees/" + employee.id);
  }
  updateEmployee(employee) {
    return this._http.put(
      "http://localhost:3000/employees/" + employee.id,
      employee
    );
  }
}
