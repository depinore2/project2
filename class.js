import { readFileSync, existsSync } from 'fs'

// Tip: you can read a JSON file and convert it into an object using JSON.parse(). 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

export class StudentInfoService {
    getStudentGpa(classId, studentId) {
        // you can read the file like this: readFileSync(`../data/${classId}/${studentId}.json`)
        let gpa = 0;

        try {
            const student = JSON.parse(readFileSync(`data/${classId}/${studentId}.json`));
            
            if(student.gpa === undefined) {
                console.log(`GPA from student ${studentId} is missing.`);
            }
            else {
                gpa = student.gpa;
            }
        }
        catch {
            console.log('Student not on record.');
        }
        finally {
            return gpa;
        }
    }
    getClassGpa(classId) {
        const numStudents = 30;
        let totalGradePoints = 0;

        if(existsSync(`data/${classId}`)) {
            for(let studentId = 0; studentId < numStudents; studentId++) {
                totalGradePoints += this.getStudentGpa(classId, `student${studentId}`)
            }

            return totalGradePoints / numStudents;
        }
        else {
            console.log(`Class not found.`);
        }
    }
}