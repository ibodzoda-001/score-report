import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teacherName: string;
  teachers;

  constructor(private teacherService: HttpService) {
  }

  onTeacherInsertBtnClick() {
    this.teacherService.addTeacher(this.teacherName)
      .subscribe(
        (response) => {
          this.teacherName = '';
          this.refresh();
        },
        (error) => console.log(error)
      );
  }

  refresh() {
    this.teachers = this.teacherService.getTeachers();
  }

  teacherDeleteFunction(teacherID) {
    this.teacherService.deleteTeacher(teacherID)
      .subscribe(
        (response) => {
          this.refresh();
        }
      );
  }

  ngOnInit(): void {
    this.refresh();
  }

}
