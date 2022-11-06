import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        // delay(1000),
        tap(coursers => console.log(coursers))
      );
  }

  save(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
}
