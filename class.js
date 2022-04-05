import { readFileSync, existsSync } from 'fs'

// Tip: you can read a JSON file and convert it into an object using JSON.parse(). 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

export class StudentInfoService {
    getStudentGpa(classId, studentId) {
        // you can read the file like this: readFileSync(`data/${classId}/${studentId}.json`)
    }
    getClassGpa(classId) {
        // you can check to see if a folder exists like this: existsSync(`data/${classId}`)
    }
}