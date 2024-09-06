import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseSections } from "./shared/enums/generic.enum";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  courses = COURSES;
  price = 9.999242;
  rate = 0.67;
  courseObj = COURSES[0];
  startDate = new Date(2000, 0, 1);
  selectedSection: CourseSections = CourseSections.ContentProjection;
  CourseSections = CourseSections;
  contentProjectionToggle = 'h5';
  iconUrl1 = 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png';
  iconUrl2 = 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png';

  @ViewChild('container')
  container: ElementRef;

  @ViewChild('cardRef1')
  cardComponent: CourseCardComponent;
  @ViewChild('cardRef2', {read: ElementRef})
  cardElementRef: ElementRef;
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;


  constructor() {
    console.log('constructor this.cardElementRef: ', this.cardElementRef);
  }

  ngOnInit(): void {
    console.log('OnInit this.cardElementRef: ', this.cardElementRef);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit this.cardElementRef: ', this.cardElementRef);
    //this.courses[1].description = 'test';
    this.cards.changes.subscribe(
      cards => console.log(cards)
    );
  }

  onCoursesEdited(): void {
    const course: Course = {
      id: this.courses.length,
      description: 'An awesome new course',
      iconUrl:  '',
      longDescription:  'An awesome new course for every level',
      category: 'BEGINNER',
      lessonsCount: 13,
    }
    this.courses.push({course});
  }

  onCourseSelected(course: Course) {
    if (!this.cardComponent) {
      console.log("App Component - Click event bubble", course);
    } else if (this.cardComponent && this.cardElementRef && this.container){
      console.log("Container - ElementRef", this.container);
      console.log("CourseCardComponent", this.cardComponent);
      console.log("cardElementRef", this.cardElementRef);
    }
  }

  trackCourse(id: number, course: Course): number {
    return course.id;
  }

  handleSelectedValue(value: CourseSections) {
    this.selectedSection = value;
    console.log('Selected value:', value);
  }

  onToggle() {
    this.contentProjectionToggle = this.contentProjectionToggle === 'h5' ? 'h6' : 'h5';
    //this.courses[1].iconUrl = this.courses[1].iconUrl === this.iconUrl2 ? this.iconUrl1 : this.iconUrl2;
  }

}
