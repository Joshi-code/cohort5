const firstName = document.querySelector('#firstname')
const middleName = document.querySelector('#middlename')
const lastName = document.querySelector('#lastname')
const DOB = document.querySelector('#dob')
const studentID = document.querySelector('#studentid')
const streetAddress = document.querySelector('#address')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const country = document.querySelector('#country')
const zipCode = document.querySelector('#zipcode')
const email = document.querySelector('#email')
const course = document.querySelector('#courses')
const level = document.querySelector('#level')
const language = document.querySelector('#language')
const startDate = document.querySelector('#startdate')

const submitBtn = document.querySelector('#submitbtn')
const popupMenu = document.querySelector('.popup')
const confirmbtn = document.querySelector('#confirm')


const dFirstName = document.querySelector('#dfirstname')
const dMiddleName = document.querySelector('#dmiddlename')
const dLastName = document.querySelector('#dlastname')
const dDOB = document.querySelector('#ddob')
const dStudentID = document.querySelector('#dstudentid')
const dStreetName = document.querySelector('#dstreetname')
const dCity = document.querySelector('#dcity')
const dState = document.querySelector('#dstate')
const dCountry = document.querySelector('#dcountry')
const dZip = document.querySelector('#dzipcode')
const dEmail = document.querySelector('#demail')
const dLanguage = document.querySelector('#dlanguage')
const dStartDate = document.querySelector('#dstartdate')
const dCourse = document.querySelector('#dcourse')
const dLevel = document.querySelector('#dlevel')





submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dFirstName.innerHTML = firstName.value
    dMiddleName.innerHTML = middleName.value
    dLastName.innerHTML = lastName.value
    dDOB.innerHTML = DOB.value
    dStudentID.innerHTML = studentID.value
    dCity.innerHTML = city.value
    dState.innerHTML = state.value
    dCountry.innerHTML = country.value
    dStreetName.innerHTML = streetAddress.value
    dZip.innerHTML = zipCode.value
    dEmail.innerHTML = email.value
    dCourse.innerHTML = course.value
    dLevel.innerHTML = level.value
    dLanguage.innerHTML = language.value
    dStartDate.innerHTML = startDate.value



    popupMenu.classList.add('show')
    
})




confirmbtn.addEventListener('click', () => {
    alert('Request Sent successfully')
    popupMenu.classList.remove('show')
    document.querySelector('form').reset()


})
