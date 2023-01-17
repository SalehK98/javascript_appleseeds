const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};


const findPerson = (type, id) => {
    return school[type].find(el => el.id === id)
}

const assignStudent = (studentId, subject) => {
    const studentName = school.students.find(el => el.id === studentId).name
    let result = false
    for (let i = 0; i < school.teachers.length; i++) {
        if (school.teachers[i].capacityLeft > 0 && school.teachers[i].subjects.includes(subject)) {
            school.teachers[i].students.push(studentName)
            school.teachers[i].capacityLeft -= 1
            result = true
            break
        }
    }
    if (result) return "was added"
    return "Sorry, no available teachers left"

}


const assignTeachersSubject = (teacherId, subject) => {
    const idx = school.teachers.findIndex(el => el.id === teacherId)
    if (school.teachers[idx].subjects.includes(subject)) return "not added"
    school.teachers[idx].subjects.push(subject)
}