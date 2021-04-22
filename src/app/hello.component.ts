import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  //styleUrls: [ './app.component.css' ]
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  // @Input() name: string;
  // name = new FormControl("");

  profile = new FormGroup({
    name: new FormControl("", Validators.required),
    age: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      country: new FormControl("")
    })
  });

  submit() {
    console.warn(this.profile.value);
  }
  reset() {
    this.profile.setValue({
      name: "",
      age: "",
      address: {
        street: "",
        city: "",
        country: ""
      }
    });
  }
}
