
registrar.addEventListener("click", () => {
    fetch("insert.php", {
        method: "POST",
        body: new FormData(frm)
    }).then(response => response.text()).then(response => {
        if (response == "Ok") {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            frm.reset();
        }else{
            Swal.fire(
                'Buen Trabajo!',
                'Registrado!',
                'success'
              )
            frm.reset();
        }
    })
});