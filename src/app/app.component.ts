import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseSections } from "./shared/enums/generic.enum";

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
  selectedSection: CourseSections = CourseSections.ComponentDirectivesAndPipes;
  CourseSections = CourseSections;

  constructor() {}

  onCourseSelected(course: Course) {
    console.log("App Component - Click event bubble", course);
  }

  trackCourse(id: number, course: Course): number {
    return course.id;
  }

  handleSelectedValue(value: CourseSections) {
    this.selectedSection = value;
    console.log('Selected value:', value);
  }
}
