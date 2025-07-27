import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postsList:any=[];

  constructor(private post : PostService, private router:Router){

  }

  ngOnInit(): void {
    this.getAllPosts();
  }
  
  getAllPosts(){
    this.post.getAllPosts().subscribe((data)=>{
      console.log(data)
      this.postsList=data;
    })
  }
  addPost(){
    this.router.navigate(['/createPost'])
  }
  goToDetails(id:number){
    this.router.navigate(['/postDetails', id])
  }
  deletePost(id:number){
    console.log(id)
    this.post.deletePost(id).subscribe((data)=>{
      this.getAllPosts()
    })
  }
}
