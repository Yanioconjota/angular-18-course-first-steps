import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input()
  course: Course;

  @Input({ required: true })
  index: number;
  @Input()
  count: string;
  @Input()
  contentProjectionToggle: string;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ViewChild('btn')
  btnToggle;

  @ContentChild('courseImage')
  image;

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

  ngAfterViewInit(): void {
    console.log(this.image);
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}
