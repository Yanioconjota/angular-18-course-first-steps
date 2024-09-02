import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseSections } from '../../enums/generic.enum';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() selected;
  @Output() selectedValueChange = new EventEmitter<string>();

  content = [
    {value: CourseSections.ComponentCoreDirectives },
    {value: CourseSections.PipesExamples },
    {value: CourseSections.ViewChild },
    {value: CourseSections.ViewChildren },
    {value: CourseSections.ContentProjection },
  ];

  onSelectionChange(event: MatSelectChange) {
    this.selectedValueChange.emit(event.value);
  }
}
