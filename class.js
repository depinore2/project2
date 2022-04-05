import { readFileSync, existsSync } from 'fs'

// Tip: you can read a JSON file and convert it into an object using JSON.stringify(). 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

export class StudentInfoService {
    getStudentGpa(classId, studentId) {
        // you can read the file like this: readFileSync(`data/${classId}/${studentId}.json`)
    }
    getClassGpa(classId) {
        
    }
}