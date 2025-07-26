import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id:number=0;
  postDetails:any;

  constructor(private post:PostService, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Post ID:', this.id);
    this.getPostDetails(this.id);
  }

  getPostDetails(id:number){
    this.post.getPostById(id).subscribe((data)=>{
      console.log(data);
      this.postDetails=data;
    })
  }

}
