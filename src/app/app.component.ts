import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseSections } from "./shared/enums/generic.enum";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;
  price = 9.999242;
  rate = 0.67;
  courseObj = COURSES[0];
  startDate = new Date(2000, 0, 1);
  selectedSection: CourseSections = CourseSections.ViewChildren;
  CourseSections = CourseSections;

  @ViewChild('container')
  container: ElementRef;

  @ViewChild('cardRef1')
  cardComponent: CourseCardComponent;
  @ViewChild('cardRef2', {read: ElementRef})
  cardElementRef: ElementRef;


  constructor() {}

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
}
