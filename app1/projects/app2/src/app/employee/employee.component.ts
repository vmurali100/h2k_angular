import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employeeForm;
  employees: any = [];
  isEdit = false;
  isNameErrro: boolean;
  isEmailError: boolean;
  isNameError: boolean;
  //This is the 1st life Cycle
  constructor(private employeeService: EmployeeService) {}

  //Will trigger when Component Loads - this is also called a Life cycles
  ngOnInit() {
    this.employeeForm = new FormGroup({
      employeeName: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      employeeEmail: new FormControl("", [
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        Validators.required
      ]),
      id: new FormControl()
    });

    this.getAllEmployees();
  }

  addUser() {
    this.isEmailError = false;
    this.isNameError = false;
    if (this.employeeForm.invalid) {
      if (this.employeeForm.controls.employeeName.invalid) {
        this.isNameError = true;
        // return false;
      }
      if (this.employeeForm.controls.employeeEmail.invalid) {
        this.isEmailError = true;
      }
    }
    if (this.employeeForm.valid) {
      this.employeeService
        .addEmployee(this.employeeForm.value)
        .subscribe(res => {
          this.getAllEmployees();
          this.employeeForm.reset();
        });
    }
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  deleteEmployee(employee) {
    this.employeeService.deleteEmployee(employee).subscribe(res => {
      this.getAllEmployees();
    });
  }

  editEmployee(employee) {
    this.isEdit = true;
    this.employeeForm.setValue(employee);
  }

  update() {
    this.employeeService
      .updateEmployee(this.employeeForm.value)
      .subscribe(res => {
        this.isEdit = false;
        this.getAllEmployees();
        this.employeeForm.reset();
      });
  }
}
