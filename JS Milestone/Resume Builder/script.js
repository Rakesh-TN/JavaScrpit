function addEducationField() {
  let educationFields = document.getElementById("collegeEdu");
  let newEducationField = document.createElement("div");
  newEducationField.setAttribute("id","collegeDetail");
  newEducationField.innerHTML = `<br> <input type="text" class="form-control" id="collInput" placeholder="Degree" required><br>
  <input type="text" class="form-control" id="collnameInput" placeholder="Name of the College" required><br>
  <input type="number" class="form-control" id="coll%Input" placeholder="Enter the Percentage" required><br>
  <input type="text" class="form-control" id="coll*namInput" placeholder="Name of the University" required> <br>
  <input type="number" class="form-control" id="coll%Input" placeholder="Enter the Passout Year" required> <br>`;
  educationFields.appendChild(newEducationField);
  }

function addWorkExperiences(){
    let workFields=document.getElementById("workSpace");
    let newWorkField = document.createElement("div");
    newWorkField.setAttribute("id","workspaceDetail");
    newWorkField.innerHTML = `<br> <input type="text" class="form-control" id="worknameInput" placeholder="Name of the Company" required><br>
    <input type="text" class="form-control" id="workPositionInput" placeholder="Name of the Position" required><br>
    <input type="number" class="form-control" id="work%Input" placeholder="Duration" required>`;
    workFields.appendChild(newWorkField);
  }


function addCertificationField() {
  let certificationFields = document.getElementById("certiHistory");
  let newCertificationField = document.createElement("div");
  newCertificationField.setAttribute("id","certiDetail")
  newCertificationField.innerHTML = ` <br><input type="text" class="form-control" id="CertiInput" placeholder="Name of the Course" required><br>
  <input type="text" class="form-control" id="CertinameInput" placeholder="Name of the Authority" required><br>
  <input type="number" class="form-control" id="Certi%Input" placeholder="Enter the Percentage" required><br>
    <input type="text" class="form-control" id="CertiURLInput" placeholder="Credential URL" required><br>`;
  certificationFields.appendChild(newCertificationField);
  }

function addSkills() {
  let skillFields = document.getElementById("yourSkills");
  let newSkillField = document.createElement("div");
    newSkillField.setAttribute("id","skillField");
  newSkillField.innerHTML = `<input type="text" class="form-control" id="skillsInput" placeholder="Enter the Skills" required>`;
  skillFields.appendChild(newSkillField);
  }

function saveResume() {
  let name = document.getElementById("nameInput").value;
  let phone = document.getElementById("numberInput").value;
  let email = document.getElementById("mailInput").value;
  let linkedin = document.getElementById("linkedinInput").value;
  let github = document.getElementById("githubInput").value;
}

let nameRegex = /^[a-zA-Z\s]+$/;
if (!nameRegex.test(nameInput)) {
  alert("Please enter a valid name with only alphabetic characters.");
  return;
}

let phoneRegex = /^\d{1,10}$/;
if (!phoneRegex.test(numberInput)) {
  alert("Please enter a valid phone number with a maximum of 10 digits.");
  return;
}

let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if (!emailRegex.test(mailInput)) {
  alert("Please enter a valid email address.");
  return;
}

if (!nameInput || !numberInput || !mailInput || !linkedin) {
    alert("Please fill in all the required fields.");
    return;
  }

  let educationFields = document.querySelector("#collegeDetail");
  let educations = [];
  for (let field of collegeDetail) {
    let degree = field.querySelector("#collInput")[0].value;
    let university = field.querySelector("#coll*namInput")[0].value;
    let year = field.querySelector("#coll%Input")[0].value;
    let percent = field.querySelector("#coll%Input")[0].value;
    let passout = field.querySelector("#collpassInput")[0].value;

    if (!degree || !university || !year || !percent || !passout) {
      alert("Please fill in all the required fields in the education section.");
      returnlet
    educations.push({ degree, university, year, percent, passout });
  }

  let workFields = document.querySelector("#workspaceDetail");
  let workExperiences = [];
  for (let field of workFields) {
    let company = field.querySelector("#worknameInput")[0].value;
    let position = field.querySelector("#workPositionInput")[0].value;
    let duration = field.querySelector("#work%Input")[0].value;
    workExperiences.push({ company, position, duration });
  }

  let certificationFields = document.querySelector("#certiDetail");
  let certifications = [];
  for (let field of certificationFields) {
    let certificate = field.querySelector("#CertiInput")[0].value;
    let authority = field.querySelector("#CertinameInput")[0].value;
    let certYear = field.querySelector("#Certi%Input")[0].value;
    let certURL = field.querySelector("#CertiURLInput")
    if (!certificate || !authority || !certYear || !certURL) {
      alert("Please fill in all the required fields in the certification section.");
      return;
    }
    certifications.push({ certificate, authority, certYear });
  }
}