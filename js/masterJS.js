const firstAction = document.getElementById("firstAction");
const secondAction = document.getElementById("secondpage");
const visibilityBlock = document.querySelector(".wrapper-table");
const firstPage = document.querySelector(".firstpage");

function myFunction() {
  firstAction.style.display = "none";
  secondAction.style.display = "block";
}
//Generations TABLE
function createDynamicForm() {
  firstPage.style.width = "0";
  visibilityBlock.style.visibility = "visible";
  const participants = document.getElementById("participants").value;
  const juries = document.getElementById("juries").value;
  const dynamicFormContainer = document.getElementById("thirdpage");
  //Points
  const elem = document.getElementById("maxPoints").value;

  //
  dynamicFormContainer.innerHTML = "";
  secondAction.style.display = "none";

  let dynamicFormHTML = '<div class="table-responsive">';
  dynamicFormHTML += '<table class="table-striped table-sm table-borderless">';
  dynamicFormHTML +=
    "<thead><h1 class='display-3'><strong>leaderbord</strong></h1>";
  dynamicFormHTML += "<tr class='row-bl'>";
  dynamicFormHTML += '<th class="empty-block" scope="col"> </th>';
  for (let h = 0; h < juries; h++) {
    dynamicFormHTML += `<th><input class="jury"  type="text" value="jury ${
      h + 1
    }" placeholder=""></th>`;
  }
  dynamicFormHTML +=
    '<th style =  class="total-point table-active"  scope="col"><strong>Total points</strong></th>';
  dynamicFormHTML += "</tr>";
  dynamicFormHTML += "</thead>";
  dynamicFormHTML += "<tbody class='vertical-align: middle'>";
  for (let i = 0; i < participants; i++) {
    dynamicFormHTML += "<tr>";
    dynamicFormHTML += `<td><input class="participant-bl" id="participant${i}" type="text" value="participant ${
      i + 1
    }"></td>`;
    for (let b = 0; b < juries; b++) {
      dynamicFormHTML += `<td><input class="pointinputs" step="1" id="point${i}_${b}" min="0" max="${elem}" type="number" placeholder=""></td>`;
    }
    dynamicFormHTML += `<td><span class="total-rating" id="totalScoreRow${i}">0</span></td>`;
    dynamicFormHTML += "</tr>";
  }
  dynamicFormHTML += "</tbody>";
  dynamicFormHTML += "</table>";
  dynamicFormHTML += "</div>";
  dynamicFormContainer.innerHTML = dynamicFormHTML;

  // AUTO SUM POINTS
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
}
// BUTTON RATING
document.querySelector(".saveButton").addEventListener("click", function () {
  document.querySelectorAll("tbody tr").forEach((tr) => {
    tr.querySelectorAll("td:nth-last-child(1)").forEach((td) => {
      let endTotalScore = td.querySelector("span").textContent;
      tr.style.order = endTotalScore;
    });
  });
  document.querySelector("tbody").style.flexDirection = "column-reverse";
});
