import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl:string;

  @Input('title')
  title: string;



  constructor() {}

  ngOnInit() {
    console.log(this.title);
  }

}
