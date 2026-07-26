import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  courseCount = 0;

  constructor(private courseService: CourseService) {}

  // Method required for Hands-On 2 Task 1
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
    console.log(this.message);
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courseCount = courses.length;
      },
      error: (err) => {
        console.error('Error loading courses:', err);
      }
    });

    console.log('HomeComponent initialised courses loaded');
  }

  // Lifecycle hook for Hands-On 2 Task 2
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}