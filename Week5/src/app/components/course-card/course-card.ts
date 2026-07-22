import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CourseTitlePipe } from '../../pipes/course-title-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight, CourseTitlePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input({ required: true })
  course!: any;

  isExpanded = false;

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card-passed': this.course.gradeStatus === 'passed',
      'card-failed': this.course.gradeStatus === 'failed',
      'card-pending': this.course.gradeStatus === 'pending',
      'card-expanded': this.isExpanded
    };
  }
}