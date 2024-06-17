//destructuring of objects
const course = {
    courseName: "javascript",
    price:"free",
    courseInstructor:"chai and code"
}
const {courseInstructor} = course
const {courseInstructor : Instructor} = course // destructuring 
console.log(Instructor);

//API in JASON format
// {
//     name: "vaibhaw",
//     courseName: "js in hindi",
//     price = "free"
// }