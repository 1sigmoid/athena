// import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewpassService } from "./../../../shared/newpass/newpass.service";
import { ResetcodeService } from './../../../shared/resetcode/resetcode.service'

@Component({
  selector: "app-resetpass",
  templateUrl: "./resetpass.component.html",
  styleUrls: ["./resetpass.component.css"]
})
export class ResetpassComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    public newPass: NewpassService,
    public answerService: ResetcodeService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    form.value['authCode'] = this.answerService.authCode
    form.value['email']=this.newPass.emailToSend;
    this.newPass.postPassword(form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => {
        if (err.status === 422) {
          console.log(422);
        } else {
          console.log(err);
        }
        console.log("Error");
      }
    );
  }
}
