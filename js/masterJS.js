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
  const inputArray = [];
  let optionsHtml = "";
  const inputObj = document.getElementById("maxPoints").value;
  if (inputObj.trim() != "") {
    inputArray.push(...inputObj.split(","));
    for (let i = 0; i < inputArray.length; i++) {
      optionsHtml += `<option value="${inputArray[i].trim()}">${inputArray[
        i
      ].trim()}</option>`;
    }
    firstPage.style.width = "0";
    visibilityBlock.style.visibility = "visible";
    const participants = document.getElementById("participants").value;
    const juries = document.getElementById("juries").value;
    const dynamicFormContainer = document.getElementById("thirdpage");
    //Points
    secondAction.style.display = "none";
    dynamicFormContainer.innerHTML = "";
    let dynamicFormHTML = '<div class="table-responsive">';
    dynamicFormHTML +=
      '<table class="table-striped table-sm table-borderless">';
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
      dynamicFormHTML += `<td><input class="participant-bl" type="text" value="participant ${
        i + 1
      }"></td>`;
      for (let b = 0; b < juries; b++) {
        dynamicFormHTML += `<td><select class="form-select"  aria-label="Sizing example"><option value="0">0</option>${optionsHtml}
        </select></td>`;
      }
      dynamicFormHTML += `<td>0</td>`;
      dynamicFormHTML += "</tr>";
    }
    dynamicFormHTML += "</tbody>";
    dynamicFormHTML += "</table>";
    dynamicFormHTML += "</div>";
    dynamicFormContainer.innerHTML = dynamicFormHTML;

    // AUTO SUM POINTS
    document.querySelectorAll("tbody tr").forEach((tr) => {
      tr.addEventListener("change", function (e) {
        let basicCount = 0;
        e.target
          .closest("tr")
          .querySelectorAll("td select")
          .forEach((sel) => {
            basicCount += +sel.value;
          });
        e.target
          .closest("tr")
          .querySelector("td:nth-last-child(1)").textContent = basicCount;
      });
    });
  }
}
// BUTTON RATING
document.querySelector(".saveButton").addEventListener("click", function () {
  document.querySelectorAll("tbody tr").forEach((tr) => {
    tr.querySelectorAll("td:nth-last-child(1)").forEach((td) => {
      tr.style.order = td.textContent;
    });
  });
  document.querySelector("tbody").style.flexDirection = "column-reverse";
});
