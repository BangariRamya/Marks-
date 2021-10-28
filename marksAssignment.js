let details = [];
let marksTable = document.getElementById("marksTable");
let button = document.getElementById("button");


class Marks {
    constructor(name, college, branch, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8) {
        this.name = name;
        this.college = college;
        this.branch = branch;
        this.sem1 = sem1;
        this.sem2 = sem2;
        this.sem3 = sem3;
        this.sem4 = sem4;
        this.sem5 = sem5;
        this.sem6 = sem6;
        this.sem7 = sem7;
        this.sem8 = sem8;
    }

    getAvg() {
        return (this.sem1 + this.sem2 + this.sem3 + this.sem4 + this.sem5 + this.sem6 + this.sem7 + this.sem8) / 8;
    }

    getTableDetails() {
        let tableRow = document.createElement("tr");

        let tableData1 = document.createElement("td");
        tableData1.textContent = this.name;
        tableRow.appendChild(tableData1);

        let tableData2 = document.createElement("td");
        tableData2.textContent = this.college;
        tableRow.appendChild(tableData2);

        let tableData3 = document.createElement("td");
        tableData3.textContent = this.branch;
        tableRow.appendChild(tableData3);

        let tableData4 = document.createElement("td");
        tableData4.textContent = this.sem1;
        tableRow.appendChild(tableData4);

        let tableData5 = document.createElement("td");
        tableData5.textContent = this.sem2;
        tableRow.appendChild(tableData5);

        let tableData6 = document.createElement("td");
        tableData6.textContent = this.sem3;
        tableRow.appendChild(tableData6);

        let tableData7 = document.createElement("td");
        tableData7.textContent = this.sem4;
        tableRow.appendChild(tableData7);

        let tableData8 = document.createElement("td");
        tableData8.textContent = this.sem5;
        tableRow.appendChild(tableData8);

        let tableData9 = document.createElement("td");
        tableData9.textContent = this.sem6;
        tableRow.appendChild(tableData9);

        let tableData10 = document.createElement("td");
        tableData10.textContent = this.sem7;
        tableRow.appendChild(tableData10);

        let tableData11 = document.createElement("td");
        tableData11.textContent = this.sem8;
        tableRow.appendChild(tableData11);

        let tableData12 = document.createElement("td");
        tableData12.textContent = this.getAvg();
        tableRow.appendChild(tableData12);

        return tableRow
    }

}

function takingInputs() {
    let nameValue = document.getElementById("name").value;
    let collegeValue = document.getElementById("college").value;
    let branchValue = document.getElementById("branch").value;
    let sem1Value = document.getElementById("sem1").value;
    let sem2Value = document.getElementById("sem2").value;
    let sem3Value = document.getElementById("sem3").value;
    let sem4Value = document.getElementById("sem4").value;
    let sem5Value = document.getElementById("sem5").value;
    let sem6Value = document.getElementById("sem6").value;
    let sem7Value = document.getElementById("sem7").value;
    let sem8Value = document.getElementById("sem8").value;

    details.push(nameValue, collegeValue, branchValue, parseInt(sem1Value), parseInt(sem2Value), parseInt(sem3Value), parseInt(sem4Value), parseInt(sem5Value), parseInt(sem6Value), parseInt(sem7Value), parseInt(sem8Value));
}
button.addEventListener("click", function() {
    takingInputs();
    console.log(details);
    let mark = new Marks(details[0], details[1], details[2], details[3], details[4], details[5], details[6], details[7], details[8], details[9], details[10]);
    console.log(mark.getAvg());
    let marksData = mark.getTableDetails();
    console.log(marksData);
    marksTable.appendChild(marksData);
    details = [];

    document.getElementById("name").value = "";
    college.value = "";
    branch.value = "";
    sem1.value = "";
    sem2.value = "";
    sem3.value = "";
    sem4.value = "";
    sem5.value = "";
    sem6.value = "";
    sem7.value = "";
    sem8.value = "";
})