import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    findAllStudents = () =>
        fetch('http://service-env.eba-atfpndaa.us-east-2.elasticbeanstalk.com/api/v1/students')
            .then(response => response.json())
}