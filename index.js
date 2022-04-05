/*
    Make a program that accepts the following commands:

    node index.js <classId>
        If only the classId is provided, spit out the total classroom GPA.
        If there is an error reading from the file, output "Unable to read class data." without crashing.

    node index.js <classId> <studentId>
        If both a classId and studentId are provided, spit out the single student's GPA and full name.
        If the student does not exist, output "Student not on record" without crashing.
        If the student does not have a GPA for some reason, output "GPA from this student is missing."
*/


import { StudentInfoService } from "./class.js";

const studentService = new StudentInfoService();
studentService.getClassGpa('exampleClass');
studentService.getStudentGpa('exampleClass','exampleStudent');

console.log(`Please implement the StudentInfoService located in class.js!`);