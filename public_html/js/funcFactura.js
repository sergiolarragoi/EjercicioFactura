
var ProcesadorA = Array("631",
        "753",
        "760",
        "765"
        );


var ProcesadorB = Array("1281",
        "1399",
        "1440",
        "1567"
        );
var Componentes = Array("33",
        "23",
        "93",
        "113",
        "45",
        "12"
        );

//resultadoProcesador;

function elegirEquipo() {
    var comboElegido = document.getElementById("idNireCombo").value;
    var equipoA = document.getElementsByName("opcProcesador1");
    var equipoB = document.getElementsByName("opcProcesador2");

    //alert(equipo);
    if (comboElegido === "EquipoA") {
        for (i = 0; i < equipoB.length; i++) {
            equipoB[i].disabled = true;
            equipoB[i].checked = false;
            document.getElementById("resultado").innerHTML = " ";
            equipoA[i].disabled = false;
        }
    } else {
        for (i = 0; i < equipoA.length; i++) {
            equipoA[i].disabled = true;
            equipoA[i].checked = false;
            document.getElementById("resultado").innerHTML = " ";
            equipoB[i].disabled = false;
        }
    }
}
function CalcularImporte() {

    var TotalImporte = 0;
    // lehenengo ekipoak
    var misRadios1 = document.getElementsByName("opcProcesador1");
    for (i = 0; i < misRadios1.length; i++)
    {
        if (misRadios1[i].checked == true)
        {
            TotalImporte = TotalImporte + Number(ProcesadorA[i]);
        }
    }
    //bigarren ekipoak
    var misRadios2 = document.getElementsByName("opcProcesador2");
    for (i = 0; i < misRadios2.length; i++)
    {
        if (misRadios2[i].checked == true)
        {
            TotalImporte = TotalImporte + Number(ProcesadorB[i]);
        }
    }

    //konponenteak

    var misComponentes = document.getElementsByName("Componentes");
    for (i = 0; i < misComponentes.length; i++)
    {
        if (misComponentes[i].checked == true)
        {
            TotalImporte = TotalImporte + Number(Componentes[i]);
        }
    }

    //emaitza atera
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = TotalImporte;
}


function vaciarCampos() {
    var checkbox = document.getElementsByName("Componentes");
    var equipoA = document.getElementsByName("opcProcesador1");
    var equipoB = document.getElementsByName("opcProcesador2");

    for (i = 0; i < checkbox.length; i++)
    {
        checkbox[i].checked = false;
    }


    for (i = 0; i < equipoA.length; i++) {
        equipoA[i].checked = false;
        equipoB[i].checked = false;
        equipoA[i].disabled = true;
        equipoB[i].disabled = true;
    }

    document.getElementById("idNireCombo").value = "";
    document.getElementById("resultado").innerHTML = " ";
}
