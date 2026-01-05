import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ CommonModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }

  submitted = false;

  // Defining FormGroup
  userForm = new FormGroup({
    name: new FormControl('Sonu sk', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('ss@Sonu.com', [Validators.required, Validators.email])
  });

  onSubmit() {
    this.submitted = true;
    console.log(this.userForm.value);

    /*this.userForm.setValue({
      name: "Sonu s",
      email: "Sonus@ss.com"
    });*/

    /*this.userForm.patchValue({name: "Sonu s"});*/

    this.userForm.reset();
    
  }

}
