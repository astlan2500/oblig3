

$(function (){
    hentAlle();
});
function validerTelefonNr(telefonNr) {
    const regex = /^[0-9]{8}$/;
    return regex.test(telefonNr);
}

function validerEpost(epost) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(epost);
}


function kjopBillett(){
    const billett = {

        filmNavn : $("#filmNavn").val(),
        antallBilletter : $("#antallBilletter").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonNr : $("#telefonNr").val(),
        epost : $("#epost").val(),
    }
    let feil = false;

    // Nullstiller feilmeldingene
    $("span[id^='feil']").text("");

    // Validering
    if (billett.filmNavn === "Velg Film: ") {
        $("#feilFilmNavn").text("Velg en film.");
        feil = true;
    }

    if (isNaN(billett.antallBilletter) || billett.antallBilletter <= 0) {
        $("#feilAntallBilletter").text("Antall billetter må være et tall.");
        feil = true;
    }

    if (!billett.fornavn.trim()) {
        $("#feilFornavn").text("Skriv inn fornavn.");
        feil = true;
    }

    if (!billett.etternavn.trim()) {
        $("#feilEtternavn").text("Skriv inn etternavn.");
        feil = true;
    }
    if (!validerTelefonNr(billett.telefonNr)) {
        $("#feilTelefonNr").text("skriv inn et gylding telefonnummer.");
        feil = true;
    }

    if (!validerEpost(billett.epost)) {
        $("#feilEpost").text("Skriv inn en gyldig e-post.");
        feil = true;
    }

    if (feil) {
        return; // feil
    }

    // Send billett til serveren
    $.post("lagre", billett, function (){
        hentAlle();
    });

    // Nullstill
    $("#filmNavn").val("Velg Film: ");
    $("#antallBilletter").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonNr").val("");
    $("#epost").val("");
}
function hentAlle(){
    $.get("hentAlle", function (billetter){
        formaterData(billetter);
    });
}

function formaterData(billetter) {
    let ut =
        "<table class='table'"+
        "<thead>"+
        "<tr>"+
        "<th>Film</th>"+
        "<th>Antall billetter</th>"+
        "<th>Fornavn</th>"+
        "<th>Etternavn</th>"+
        "<th>TelefonNR</th>"+
        "<th>Epost</th>"+
        "</tr>"+
        "</thead>"+
        "<tbody>";
    for (const bil of billetter) {
        ut +=   "<tr>"+
            "<td>"+ bil.filmNavn +" </td>"+
            "<td>"+bil.antallBilletter+"</td>"+
            "<td>"+bil.fornavn+"</td>"+
            "<td>"+bil.etternavn+"</td>"+
            "<td>"+bil.telefonNr+"</td>"+
            "<td>"+bil.epost+"</td>"+
            "<td> <a class='btn btn-primary' href='endreBillett.html?id="+bil.id+"'>Endre</a></td>"+
            "<td> <button class='btn btn-danger' onclick='slettEnBillett("+bil.id+")'>Slett</button></td>"+
            "</tr>";
    }
    ut +=
        "</tbody>"+
        " </table>";
    $("#output").html(ut);
}
function slettAlle(){
    $.get("/slettAlle", function (){
        hentAlle();
    });
}
function slettEnBillett(id) {
    const url = "/slettEnBillett?id="+id;
    $.get( url, function() {
        window.location.href = 'index.html';
        hentAlle()
    });
}





