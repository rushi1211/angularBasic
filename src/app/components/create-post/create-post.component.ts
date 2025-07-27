import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title:any='';
  body:any="";

  constructor(private http : HttpClient, private router:Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  saveData() {
  const postData = {
    title: this.title,
    body: this.body,
    userId: 1
  };

  this.http.post('https://jsonplaceholder.typicode.com/posts', postData)
    .subscribe(response => {
      console.log('Posted:', response);
      if(response){
        this.router.navigate(['/'])
      }
    });
}

}
