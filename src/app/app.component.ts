import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  constructor() {}

  onCourseSelected(course: Course) {
    console.log("App Component - Click event bubble", course);
  }

  trackCourse(id: number, course: Course): number {
    return course.id;
  }
}
