function traerdatos() {

    const valorurl = window.location.search;
    const urlparametros = new URLSearchParams(valorurl);
    var gusto_data = urlparametros.get("gto1");
    var porcentaje_data = urlparametros.get("porc");
    var nombre_data = urlparametros.get("Nombre");
    var email_data =urlparametros.get("email");
    var telefono_data = urlparametros.get("telefono");
    document.body.getElementsByClassName("nombreregistro")[0].textContent = nombre_data;
    document.body.getElementsByClassName("emaildato")[0].textContent = email_data;
    document.body.getElementsByClassName("telefonodato")[0].textContent = telefono_data;
    document.body.getElementsByClassName("gusto")[0].textContent = gusto_data;
    document.body.getElementsByClassName("porcentaje")[0].textContent = porcentaje_data;
}

function enviar(){
    document.formulario.submit();
}

function agregarfila(){
    var nuevafila = document.getElementById("input1");
    if(nuevafila.value === ""){

    }
    else{
        var tabla = document.getElementById("tabla");
        var row = tabla.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = nuevafila.value;
        cell1.setAttribute("id", "nombre");
        cell1.setAttribute("name", "gusto");
        cell2.innerHTML = "0";
        cell2.setAttribute("name", "porcentaje");
        cell3.innerHTML = '<span class="editar" onclick="editar(this)">Edit</span>';
        nuevafila.value = "";
    }
}

function recargar(){
    location.reload();
}

function editar(fila){
    var editar = false;

    document.getElementById('oculto').style.visibility = 'visible';

    if(editar === false){

        var nodetr = fila.parentNode.parentNode;
        var nodestr = nodetr.getElementsByTagName('td');
        var formulario = document.getElementById("form1");
        var gto = nodestr[0].firstChild.nodeValue;
        var ptje = nodestr[1].firstChild.nodeValue
        var codhmtl= '<td><input id="Edit" type="" name="gto1" value="'+gto+'"></td>'+
        '<td><input type="text" name="porc" id="porcen" value="'+ptje+'"></td>'+'<span> En edicion</span></td>'

    }
    nodetr.innerHTML=codhmtl;
    editar=true;
}

function cancelar(){
    location.reload();
    editar=false;
    if(editar===true){
        document.getElementById('oculto').style.visibility = 'hidden';
    }

}
