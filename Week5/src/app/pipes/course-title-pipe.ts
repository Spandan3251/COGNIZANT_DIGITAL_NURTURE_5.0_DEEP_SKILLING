import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseTitle',
  standalone: true
})
export class CourseTitlePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}