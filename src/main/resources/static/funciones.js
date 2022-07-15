function eliminar(id){
	swal({
  title: "¿Estas seguro que quieres eliminar al usuario ID: ?"+' '+id,
  text: "Una vez eliminado no tendras acceso a su informacion",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
	$.ajax({
		url:"/eliminar/"+id,
		success: function(res){
			console.log(res);
		}		
	});
    swal("La persona ha sido eliminada con exito", {
      icon: "success",
    }).then((ok)=>{
		if(ok){
			location.href="/listar";
		}
	});
  } else {
    swal("Has cancelado la eliminacion de la persona");
  }
});
	
}