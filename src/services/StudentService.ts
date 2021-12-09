import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    findAllStudents = () =>
        fetch('http://localhost:8080/api/v1/students')
            .then(response => response.json())
}