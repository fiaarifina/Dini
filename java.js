function validasi()  {
    var cek = document.forms["formku"]["teks"].value;
    var cek2 = document.forms["formku"]["bil1"].value;
    var cek3 = document.getElementById("email").value;
    var ekspresi=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!/^[a-z A-Z]+$/.test(cek)) {
        alert("Kolom Nama harus diisi dengan huruf!!");
        document.getElementById("teks").focus();
        return false;
    }
    else if (!/^[0-9]+$/.test(cek2)) {
      alert("Kolom NIK harus diisi dengan angka!");
      document.getElementById("bil1").focus();
    }
    else if (cek3==""||ekspresi.test(cek3)==false)
    {
    alert("Kolom Email");
    document.getElementById("email").focus();
    }
}