import { Component, EventEmitter, Output } from '@angular/core';
import { CourseSections } from '../../enums/generic.enum';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selected = CourseSections.ComponentDirectivesAndPipes;
  @Output() selectedValueChange = new EventEmitter<string>();

  content = [
    {value: CourseSections.ComponentDirectivesAndPipes },
    {value: CourseSections.LocalTemplateQuerying },
    {value: CourseSections.ContentProjection },
  ];

  onSelectionChange(event: MatSelectChange) {
    this.selectedValueChange.emit(event.value);
  }
}
