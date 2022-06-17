import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  comments: { name: string;chec: string; lastname: string; }[]=[];
  comment={lastName:'',firstName:''};
  profileForm!: FormGroup;

  info={ nom:"Mohamed",
  email:"med@youssfi.net",
  tel:"0661326837"
  };


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      chec: ['', Validators.required],
    });

  }
  onSubmit(name:string)
  {
console.log(this.profileForm.value.chec);
this.comment.firstName=this.profileForm.value.firstName;
this.comment.lastName=this.profileForm.value.lastName;
this.comments.push({name: this.comment.firstName,chec: this.info.nom,lastname:this.comment.lastName});
console.log(this.comments);
console.log(this.info.nom);
this.profileForm.reset();

  }
}
