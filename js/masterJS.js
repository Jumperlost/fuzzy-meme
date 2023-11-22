const firstAction = document.getElementById("firstAction");
const secondAction = document.getElementById("secondpage");

function myFunction() {
  firstAction.style.display = "none";
  secondAction.style.display = "block";
}

function createDynamicForm() {
  const participants = document.getElementById("participants").value;
  const juries = document.getElementById("juries").value;
  const dynamicFormContainer = document.getElementById("thirdpage");
  dynamicFormContainer.innerHTML = "";
  secondAction.style.display = "none";

  let dynamicFormHTML = '<div class="table-responsive-sm">';
  dynamicFormHTML += "<table  class='table table-success'>";
  dynamicFormHTML += "<thead>";
  dynamicFormHTML += "</tr>";
  dynamicFormHTML +=
    "<th scope='col'><i class='fa-solid fa-people-group'></i></th>";
  for (let h = 0; h < juries; h++) {
    dynamicFormHTML += `<td><input type="text" placeholder="
    Name of the jury"></td>`;
  }
  dynamicFormHTML += "<th scope='col'>Total points</th>";

  for (let i = 0; i < participants; i++) {
    dynamicFormHTML += "</tr>";
    dynamicFormHTML += `<td><input type="text" placeholder="Participant name"></td>`;

    for (let b = 0; b < juries; b++) {
      dynamicFormHTML += `<td><input id="input-NaN"  type="number" placeholder=""></td>`;
    }
    dynamicFormHTML += '<td><span id="totalScoreRow' + i + '">0</span></td>';
    dynamicFormHTML += "</tr>";
  }
  dynamicFormHTML += "</table>";
  dynamicFormHTML +=
    "<button  type='button' class='btn btn-danger'>Confirm</button>";
  dynamicFormHTML += "</div>";
  dynamicFormContainer.innerHTML = dynamicFormHTML;
  dynamicFormContainer.appendChild(createSaveButton());
}

function totalScore(juryIndex, participantIndex, inputElement) {
  const enteredValue = parseInt(inputElement.value, 10) || 0;
  const totalScoreElement = document.getElementById(
    "totalScoreRow" + juryIndex
  );
  totalScoreElement.innerText =
    parseInt(totalScoreElement.innerText, 10) + enteredValue;
}

// const maxPoint = document.getElementById("maxPoints");
// maxPoint.addEventListener("input", function (event) {
//   let selectedValue = parseInt(event.target.value);
//   const markInput = document.querySelectorAll(".mark");
//   markInput.forEach(function (input) {
//     if (parseInt(input.value) > selectedValue) {
//       input.value = "";
//     }
//   });
// });

function upLimit() {
  const maxPointSelect = document.getElementById("maxPoints");
  const selectedValue = parseInt(maxPointSelect.value, 10) || 0;
  const options = maxPointSelect.getElementsByTagName("option");

  for (m = 1; m < options.length; m++) {
    const optionValue = parseInt(options[m].value, 10);
    options[m].disabled = optionValue > selectedValue;
  }
}
