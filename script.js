$(document).ready(function(){
  var config = {
        apiKey: "AIzaSyC6MDfkPElKbUE_fLvTY92PuuNgXXzIjTI",
        authDomain: "registros-ceif.firebaseapp.com",
        databaseURL: "https://registros-ceif.firebaseio.com",
        projectId: "registros-ceif",
        storageBucket: "registros-ceif.appspot.com",
        messagingSenderId: "531520763531"
      };
      firebase.initializeApp(config);
  $(".tablink").click(function(){
    $(".datos_secundarios").css("display","none");
    var i = this.id;
    switch (i) {
      case "Prensa":
        $("#datos_secundarios_prensa").css("display","block");
        break;
      case "PoliciaInterna":
        $("#datos_secundarios_policia_interna").css("display","block");
        break;
      case "Logistica":
        $("#datos_secundarios_logistica").css("display","block");
        break;
      case "LaboratorioMedicinaForense":
        $("#datos_secundarios_l_m_f").css("display","block");
        break;
      case "LaboratorioComputoForense":
        $("#datos_secundarios_l_c_f").css("display","block");
        break;
      case "LaboratorioCalculoForense":
        $("#datos_secundarios_l_ca_f").css("display","block");
        break;
      case "Jueces":
        $("#datos_secundarios_jueces").css("display","block");
        break;
      case "Fiscal":
        $("#datos_secundarios_fiscal").css("display","block");
        break;
      case "Detectives":
        $("#datos_secundarios_detect").css("display","block");
        break;
      case "ComandanteOSubcomandante":
        $("#datos_secundarios_cos").css("display","block");
        break;
      case "CaseMaster":
        $("#datos_secundarios_ca").css("display","block");
        break;
      case "AbogadoDefensor":
        $("#datos_secundarios_ad").css("display","block");
        break;
    }
  });
  $("#boton_registro").mouseup(function(){
    var nomSelec = ($(".selectorNombre").val()!="");
    var curSelec = ($(".selectorCurso").val()!="");
    var edadSelec = ($(".inputEdad").val()!="");
    var casaSelec = ($(".selectorCasa").val()!="");
    var telSelec = ($(".inputTelefono").val()!="");
    var eSelec = ($(".inputEmail").val()!="");
    if (nomSelec&&curSelec&&edadSelec&&casaSelec&&telSelec&&eSelec) {
      var car1 = $("#selector_dato_cargo_1").val();
      var car2 = $("#selector_dato_cargo_2").val();
      var car3 = $("#selector_dato_cargo_3").val();
      if (car1!=car2&&car2!=car3&&car1!=car3) {
        var referer1 = {
          "prensa_cargo_1":"datos_secundarios_prensa",
          "policia_interna_cargo_1":"datos_secundarios_policia_interna",
          "logistica_cargo_1":"datos_secundarios_logistica",
          "l_m_f_cargo_1":"datos_secundarios_l_m_f",
          "l_c_f_cargo_1":"datos_secundarios_l_c_f",
          "l_ca_f_cargo_1":"datos_secundarios_l_ca_f",
          "jueces_cargo_1":"datos_secundarios_jueces",
          "fiscal_cargo_1":"datos_secundarios_fiscal",
          "detect_cargo_1":"datos_secundarios_detect",
          "cos_cargo_1":"datos_secundarios_cos",
          "ca_cargo_1":"datos_secundarios_ca",
          "ad_cargo_1":"datos_secuncarios_ad"
        };
        var referer2 = {
          "prensa_cargo_2":"datos_secundarios_prensa",
          "policia_interna_cargo_2":"datos_secundarios_policia_interna",
          "logistica_cargo_2":"datos_secundarios_logistica",
          "l_m_f_cargo_2":"datos_secundarios_l_m_f",
          "l_c_f_cargo_2":"datos_secundarios_l_c_f",
          "l_ca_f_cargo_2":"datos_secundarios_l_ca_f",
          "jueces_cargo_2":"datos_secundarios_jueces",
          "fiscal_cargo_2":"datos_secundarios_fiscal",
          "detect_cargo_2":"datos_secundarios_detect",
          "cos_cargo_2":"datos_secundarios_cos",
          "ca_cargo_2":"datos_secundarios_ca",
          "ad_cargo_2":"datos_secuncarios_ad"
        };
        var referer3 = {
          "prensa_cargo_3":"datos_secundarios_prensa",
          "policia_interna_cargo_3":"datos_secundarios_policia_interna",
          "logistica_cargo_3":"datos_secundarios_logistica",
          "l_m_f_cargo_3":"datos_secundarios_l_m_f",
          "l_c_f_cargo_3":"datos_secundarios_l_c_f",
          "l_ca_f_cargo_3":"datos_secundarios_l_ca_f",
          "jueces_cargo_3":"datos_secundarios_jueces",
          "fiscal_cargo_3":"datos_secundarios_fiscal",
          "detect_cargo_3":"datos_secundarios_detect",
          "cos_cargo_3":"datos_secundarios_cos",
          "ca_cargo_3":"datos_secundarios_ca",
          "ad_cargo_3":"datos_secuncarios_ad"
        };
        var car1id = $("#selector_dato_cargo_1").find("option:selected").attr("id");
        var car2id = $("#selector_dato_cargo_2").find("option:selected").attr("id");
        var car3id = $("#selector_dato_cargo_3").find("option:selected").attr("id");
        var check1 = "#"+referer1[car1id]+" textarea";
        var check2 = "#"+referer2[car2id]+" textarea";
        var check3 = "#"+referer3[car3id]+" textarea";
        var todoLleno = true;
        $(check1).each(function(){
          if (this.value.length == 0){
            todoLleno = false;
          }
        });
        $(check2).each(function(){
          if (this.value.length == 0){
            todoLleno = false;
          }
        });
        $(check3).each(function(){
          if (this.value.length == 0){
            todoLleno = false;
          }
        });
       if (todoLleno) {
         var n = $(".selectorNombre").val().toLowerCase();
         firebase.database().ref("estado/"+n).once('value').then(function(snapshot){
           var x = !snapshot.val();
           console.log(x);
           if (x) {
             $("#boton_registro").html("Registrando...");
         $("#boton_registro").prop("disabled",true);
         var Nombre = $(".selectorNombre").val();
         var Curso = $(".selectorCurso").val();
         var Edad = $(".inputEdad").val();
         var Casa = $(".selectorCasa").val();
         var Telefono = $(".inputTelefono").val();
         var Email = $(".inputEmail").val();
         var cargo_1 = $("#selector_dato_cargo_1").find("option:selected").val();
         var cargo_1_r1 = $("#"+referer1[car1id]+"_1 textarea").val();
         var cargo_1_r2 = $("#"+referer1[car1id]+"_2 textarea").val();
         var cargo_1_r3 = $("#"+referer1[car1id]+"_3 textarea").val();
         var cargo_1_r4 = $("#"+referer1[car1id]+"_4 textarea").val();
         var cargo_1_r5 = $("#"+referer1[car1id]+"_5 textarea").val();
         var cargo_1_r6 = $("#"+referer1[car1id]+"_6 textarea").val();
         var cargo_1_r7 = $("#"+referer1[car1id]+"_7 textarea").val();
         var cargo_1_r8 = $("#"+referer1[car1id]+"_8 textarea").val();
         var Cargo1 = {
           cargo:cargo_1,
           p1:cargo_1_r1,
           p2:cargo_1_r2,
           p3:cargo_1_r3,
           p4:cargo_1_r4,
           p5:cargo_1_r5,
           p6:cargo_1_r6,
           p7:cargo_1_r7,
           p8:cargo_1_r8,
         };
         var cargo_2 = $("#selector_dato_cargo_2").find("option:selected").val();
         var cargo_2_r1 = $("#"+referer2[car2id]+"_1 textarea").val();
         var cargo_2_r2 = $("#"+referer2[car2id]+"_2 textarea").val();
         var cargo_2_r3 = $("#"+referer2[car2id]+"_3 textarea").val();
         var cargo_2_r4 = $("#"+referer2[car2id]+"_4 textarea").val();
         var cargo_2_r5 = $("#"+referer2[car2id]+"_5 textarea").val();
         var cargo_2_r6 = $("#"+referer2[car2id]+"_6 textarea").val();
         var cargo_2_r7 = $("#"+referer2[car2id]+"_7 textarea").val();
         var cargo_2_r8 = $("#"+referer2[car2id]+"_8 textarea").val();
         var Cargo2 = {
           cargo:cargo_2,
           p1:cargo_2_r1,
           p2:cargo_2_r2,
           p3:cargo_2_r3,
           p4:cargo_2_r4,
           p5:cargo_2_r5,
           p6:cargo_2_r6,
           p7:cargo_2_r7,
           p8:cargo_2_r8,
         };
         var cargo_3 = $("#selector_dato_cargo_3").find("option:selected").val();
         var cargo_3_r1 = $("#"+referer3[car3id]+"_1 textarea").val();
         var cargo_3_r2 = $("#"+referer3[car3id]+"_2 textarea").val();
         var cargo_3_r3 = $("#"+referer3[car3id]+"_3 textarea").val();
         var cargo_3_r4 = $("#"+referer3[car3id]+"_4 textarea").val();
         var cargo_3_r5 = $("#"+referer3[car3id]+"_5 textarea").val();
         var cargo_3_r6 = $("#"+referer3[car3id]+"_6 textarea").val();
         var cargo_3_r7 = $("#"+referer3[car3id]+"_7 textarea").val();
         var cargo_3_r8 = $("#"+referer3[car3id]+"_8 textarea").val();
         var Cargo3 = {
           cargo:cargo_3,
           p1:cargo_3_r1,
           p2:cargo_3_r2,
           p3:cargo_3_r3,
           p4:cargo_3_r4,
           p5:cargo_3_r5,
           p6:cargo_3_r6,
           p7:cargo_3_r7,
           p8:cargo_3_r8,
         };
         var object = {
           nombre:Nombre,
           curso:Curso,
           edad:Edad,
           casa:Casa,
           telefono:Telefono,
           email:Email,
           cargo1:Cargo1,
           cargo2:Cargo2,
           cargo3:Cargo3
         };
         firebase.database().ref("registros/"+Nombre.toLowerCase()).set(object)
           .then(function(){
             firebase.database().ref("estado/"+Nombre.toLowerCase()).set(true)
               .then(function(){
                 alert("Se han registrado tus respuestas. IMPORTANTE: Apenas se registren tus respuestas, no podras volver a hacer un registro.");
                 $("#boton_registro").html("Registrar");
                 $("#boton_registro").prop("disabled",false);
               })
               .catch(function(err){
                 alert("Hay un error de conexion");
                 $("#boton_registro").html("Registrar");
                 $("#boton_registro").prop("disabled",false);
               });
           })
           .catch(function(){
             alert("Hay un error de conexion");
             $("#boton_registro").html("Registrar");
             $("#boton_registro").prop("disabled",false);
           });
           } else {
             alert("Ya se habian registrado tus resultados anteriormente.");
           }
         }).catch(function(error){
           alert("Hay un error de conexion");
         });
       } else {
         alert("Todavía te faltan preguntas por responder");
       }
      } else {
        alert("No pueden haber dos cargos iguales en tu selección.");
      }
    } else {
      alert("Hace falta información principal (nombre, curso ...");
    }
  });
  document.getElementById("Prensa").click();
});