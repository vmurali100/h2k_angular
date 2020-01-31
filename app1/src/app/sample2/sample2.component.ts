import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sample2",
  templateUrl: "./sample2.component.html",
  styleUrls: ["./sample2.component.css"]
})
export class Sample2Component implements OnInit {
  @Input() messageFromParent;

  @Input() objFromParent;

  @Input() arrayFromParent;
  constructor() {}

  ngOnInit() {}
}
