import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
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

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  image: ElementRef;

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
    console.log('this.image', this.image);
  }

  ngAfterContentInit(): void {
    console.log('this.image', this.image);
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}
