const firstAction = document.getElementById("firstAction");
const secondAction = document.getElementById("secondpage");

function myFunction() {
  firstAction.style.display = "none";
  secondAction.style.display = "block";
}
//Generations TABLE
function createDynamicForm() {
  const participants = document.getElementById("participants").value;
  const juries = document.getElementById("juries").value;
  const dynamicFormContainer = document.getElementById("thirdpage");
  // MAX NUMBER INPUT
  const elem = document.getElementById("maxPoints").value;
  //
  dynamicFormContainer.innerHTML = "";
  secondAction.style.display = "none";

  let dynamicFormHTML = '<div class="table-responsive-sm">';
  dynamicFormHTML += '<table class="table table-success">';
  dynamicFormHTML += "<thead><h1 class='display-3'>leaderbord</h1>";
  dynamicFormHTML += "<tr>";
  dynamicFormHTML += '<th scope="col"></th>';
  for (let h = 0; h < juries; h++) {
    dynamicFormHTML += `<th><input type="text" placeholder="Name of the jury"></th>`;
  }

  dynamicFormHTML += '<th scope="col">Total points</th>';
  dynamicFormHTML += "</tr>";
  dynamicFormHTML += "</thead>";
  dynamicFormHTML += "<tbody>";

  for (let i = 0; i < participants; i++) {
    dynamicFormHTML += "<tr>";
    dynamicFormHTML += `<td><input class="participant-bl" id="participant${i}" type="text" placeholder="Participant name"></td>`;

    for (let b = 0; b < juries; b++) {
      dynamicFormHTML += `<td><input class="pointinputs" step="10" id="point${i}_${b}" min="0" max="${elem}" type="number" placeholder=""></td>`;
    }

    dynamicFormHTML += `<td><span class="total-rating" id="totalScoreRow${i}">0</span></td>`;
    dynamicFormHTML += "</tr>";
  }

  dynamicFormHTML += "</tbody>";
  dynamicFormHTML += "</table>";
  dynamicFormHTML += "</div>";
  dynamicFormContainer.innerHTML = dynamicFormHTML;
  // dynamicFormContainer.appendChild(createSaveButton());

  function pointChange() {
    for (let i = 0; i < participants; i++) {
      const arrPoints = [];
      for (let j = 0; j < juries; j++) {
        const pointInput = document.getElementById(`point${i}_${j}`);
        arrPoints.push(Number(pointInput.value) || 0);
      }

      const totalScoreRow = document.getElementById(`totalScoreRow${i}`);
      totalScoreRow.innerHTML = `${arrPoints.reduce((a, b) => a + b, 0)}`;
    }
  }

  for (let i = 0; i < participants; i++) {
    for (let j = 0; j < juries; j++) {
      const pointInput = document.getElementById(`point${i}_${j}`);
      pointInput.addEventListener("input", pointChange);
    }
  }
  //DONT WORKING
  // function autoRating() {
  //   let arrRating = Array.from(document.querySelectorAll(".participant-bl"));
  //   arrRating.sort(function (a, b) {
  //     let ratingA = Number(a.querySelector(`.total-rating`).innerHTML);
  //     let ratingB = Number(b.querySelector(`.total-rating`).innerHTML);
  //     if (!isNaN(ratingA) && !isNaN(ratingB)) {
  //       return ratingB - ratingA;
  //     }
  //     return 0;
  //   });
  //   for (let i = 0; i < participants.length; i++) {
  //     dynamicFormContainer.appendChild(arrRating[i]);
  //   }
  // }
  // autoRating();

  // for (let i = 0; i < participants; i++) {
  //   dynamicFormHTML += "<th data-index" + i + ">";
  //   dynamicFormHTML += "</th>";
  // }
  // DONT WORKING
  // arrRating.sort(function (a, b) {
  //   let ratingA = Number(a.querySelector(".total-rating").innerHTML);
  //   let ratingB = Number(b.querySelector(".total-rating").innerHTML);
  //   let indexA = a.dataset.index;
  //   let indexB = b.dataset.index;
  //   if (!isNaN(ratingA) && !isNaN(ratingB)) {
  //     return ratingB - ratingA || indexA - indexB;
  //   }
  //   return 0;
  // });

  // function createSaveButton() {
  //   const saveButton = document.createElement("button");
  //   saveButton.className = "btn btn-danger";
  //   saveButton.type = "button";
  //   saveButton.innerText = "Save";
  //   saveButton.onclick = function () {
  //     console.log("update...");
  //   };

  //   return saveButton;
  // }
}
