import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

   addData = new FormGroup({
     request: new FormControl('', Validators.required),
     email: new FormControl('', Validators.required),
     resident: new FormControl('', Validators.required),
     wife: new FormControl('', Validators.required),
   })


  ngOnInit(): void {

  }
  onSubmit () {
    console.log(this.addData.value);

  }
}
