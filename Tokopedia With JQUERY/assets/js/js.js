function on() {
    var menunBar = document.getElementById("menuBar");
  
    var overlay = document.getElementById("overlay");
  
    menunBar.classList.toggle("menuBarStyle");
    overlay.classList.toggle("overlayStyle");
  }
  
  function kategoryOn() {
    var kategoryy = document.getElementById("kategory");
  
    kategoryy.classList.toggle("kategoryStyle");
  }

$(document).ready(function(){
    
    $("#pulsa").click( function() {
      $("#nominal").show();
      $("#hargapaket").hide();
      $("#buttonGrey").show();
      $("#buttonGreen").hide();

      $(function(){
        $("#notlp").keypress(function(e) {
          if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
          }
        });
      });

      $("#notlp").change(function(){
        if ($("#notlp").val() > 0) {    
          $("#nominal").prop("disabled", false);
        }
      });

      $("#nominal").change(function(){
        if ($("#nominal").val() > 0) {    
            $("#buttonGrey").prop("disabled", false);
        }
      });
    });


    $("#buttonGrey").click( function() {
      var yakin = confirm('Pembelian pulsa sebesar ' +  $('#nominal').find(":selected").text() + ' ke nomor ' + $('#notlp').val()) 
      if (yakin) {
        if ($('#nominal').find(":selected").text() >= 10000){
          var a = parseInt($('#nominal').find(":selected").text());
          var tambah = a + 2000;
          alert('Total harga pulsa Rp. ' + tambah + ',- ke nomor ' + $('#notlp').val() + ' sedang di proses. Terima Kasih :)')
        }else{
          var b = parseInt($('#nominal').find(":selected").text());
          var tambahkurang = b + 3000;
          alert('Total harga pulsa Rp. ' + tambahkurang + ',- ke nomor ' + $('#notlp').val() + ' sedang di proses. Terima Kasih :)')
        }
      }else {
            
      }
    });


    $("#paketdata").click(function() {
      $("#nominal").hide();
      $("#hargapaket").show();
      $("#buttonGreen").show();
      $("#buttonGrey").hide();
  
      $(function(){
        $("#notlp").keypress(function(e) {
          if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
          }
        });
      });
  
      $("#notlp").change(function(){
        if ($("#notlp").val() > 0) {    
          $("#hargapaket").prop("disabled", false);
        }
      });
  
      $("#hargapaket").change(function(){
        if ($("#nominal").val() > 0) {
          $("#buttonGrey").hide();
          $("#buttonGreen").prop("disabled", false);
        }
      });
  
      $("#buttonGreen").click( function() {
        var yakin1 = confirm('Pembelian paket data ' +  $('#hargapaket').find(":selected").text() + ' ke nomor ' + $('#notlp').val()) 
        if (yakin1) {
          var kata = $('#hargapaket').find(":selected").text();
          var result = kata.substring(kata.length - 6);
          alert('Total harga paket data Rp. ' + result + ',- ke nomor ' + $('#notlp').val() + ' sedang di proses. Terima Kasih :)')
        }else {
          
        }
      });
    });
});
  