function cek() {
    const presiden = document.querySelector("#presiden");
    const presiden_response = document.querySelector("#presiden_response");

    const organ = document.querySelector("#organ");
    const organ_response = document.querySelector("#organ_response");

    if (presiden.value == "tidak ada") {
        presiden_response.innerText = "Jawaban anda BENAR";
    } else {
        presiden_response.innerText = "mana ada TOLOLL.";
    }

    if (organ.value == "sunda empire") {
        organ_response.innerText = "Jawaban anda BENAR";
    } else {
        organ_response.innerText = "TOLLOLLL...";
    }
}