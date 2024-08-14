import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input({ required: true })
  index: number;
  @Input()
  count: string;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();
  get isForNoobs(): boolean {
    return this.course.category === 'BEGINNER';
  }

  get cardClasses(): string {
    if(this.isForNoobs) { return 'beginner'};
  }

  get cardStyles(): object {
    return {'text-transform': 'uppercase'};
  }

  constructor() {}

  ngOnInit() {}

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}
