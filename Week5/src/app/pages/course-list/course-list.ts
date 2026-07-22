import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'John Smith',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      title: 'Java Programming',
      instructor: 'David Johnson',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      title: 'Python',
      instructor: 'Emily Brown',
      credits: 2,
      gradeStatus: 'pending'
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}