/*
    Make a program that accepts the following commands:

    node index.js <classId>
        If only the classId is provided, spit out the total classroom GPA.
        If the class doesn't exist, output "Class not found."
        It's ok if it also spits out student-specific errors, as described below.

        All classes always have students with ids student0 --> student29

    node index.js <classId> <studentId>
        If both a classId and studentId are provided, spit out the single student's GPA and full name.
        If the student does not exist, output "Student not on record" without crashing.
        If the student does not have a GPA for some reason, output "GPA from student ${studentId} is missing."  
        
    If both classId and studentId are missing, output "Please provide at least a classId." without crashing.
        
    Tips: 
    - Fields that are missing in json have the value of undefined.
    - You can check to see if a folder exits using the 
*/


import { StudentInfoService } from "./class.js";

const studentService = new StudentInfoService();
const [nodeCommand, scriptPath, classId, studentId] = process.argv;

if(classId !== undefined && studentId !== undefined) {
    console.log(studentService.getStudentGpa(classId, studentId))
}
else if(classId !== undefined) {
    console.log(studentService.getClassGpa(classId));
}
else {
    console.log('Please provide at least classId.')
}