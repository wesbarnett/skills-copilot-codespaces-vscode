function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberVal = skillsMember.value;
    var skillsMemberValLength = skillsMemberVal.length;
    if (skillsMemberValLength == 0) {
        skills.style.display = "none";
    } else {
        skills.style.display = "block";
    }
    skills.innerHTML = skillsMemberVal;
}