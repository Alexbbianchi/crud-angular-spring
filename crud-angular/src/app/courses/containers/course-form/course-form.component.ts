import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [""],
    category: [""],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
  }

  ngOnInit(): void {}

  onSubmit() {

    this.service.save(this.form.value).subscribe({
      next: () => this.onSuccess(),
      error: () => this.onError()
    });
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this.snackBar.open('Curso salvo com sucesso.', '', { duration: 5000 });
    this.onCancel()
  }

  onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}
