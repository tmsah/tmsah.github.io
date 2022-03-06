function checkAnswer() {
  const prank_time = document.getElementById("prank_time").value;
  const prankster = document.getElementById("prankster").value;
  var selected_data = {
    prank_time: prank_time,
    prankster: prankster,
    witness: "",
  };
  fetch("./json/witness.json")
    .then((witness_datas) => {
      return witness_datas.json();
    })
    .then((witness_datas) => {
      for (let witness_data of witness_datas) {
        if (
          witness_data["prank_time"] == prank_time &&
          witness_data["prankster"] == prankster
        ) {
          selected_data["witness"] = witness_data["witness"];
          break;
        }
      }
      if (window.localStorage) {
        sessionStorage.setItem("selected_data", JSON.stringify(selected_data));
      }
      if (selected_data["witness"] == "-") {
        window.location.href = "./html/answer_correct.html";
      } else {
        window.location.href = "./html/answer_incorrect.html";
      }
    });
}

function backToQuiz() {
  window.location.href = "../quiz.html";
}
