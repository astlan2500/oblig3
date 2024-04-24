$(function(){

    const id = window.location.search.substring(1);
    const url = "/hentEnBillett?"+id;
    $.get(url,function(billett){
        $("#id").val(billett.id);
        $("#filmNavn").val(billett.filmNavn);
        $("#antallBilletter").val(billett.antallBilletter);
        $("#fornavn").val(billett.fornavn);
        $("#etternavn").val(billett.etternavn);
        $("#telefonNr").val(billett.telefonNr);
        $("#epost").val(billett.epost);
    });
});

function endreBillett() {
    const billett = {
        id : $("#id").val(),
        filmNavn : $("#filmNavn").val(),
        antallBilletter : $("#antallBilletter").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonNr : $("#telefonNr").val(),
        epost : $("#epost").val(),
    }
    $.post("/endreEnBillett",billett,function(){
        window.location.href = 'index.html';
    });
}