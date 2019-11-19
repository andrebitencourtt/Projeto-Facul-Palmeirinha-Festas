function validaFormulario(){

  var nome = document.form.name.value;
	var expRegNome = new RegExp("^[A-zÁ-ü]{3,}([ ]{1}[A-zÁ-ü]{2,})+$");

	if(!expRegNome.test(nome)){
		alert("Preencha o campo NOME corretamente!");
		document.form.name.focus();
		return false;
  }

	if(document.form.calendario.value==""){
		alert('Preencha o campo DATA.');
		document.form.calendario.focus();
		return false;
	}

	if(document.form.time.value==""){
		alert('Preencha o campo HORÁRIO.');
		document.form.time.focus();
		return false;
	}
	
	if(document.form.quitutes.value==""){
		alert('Preencha o campo QUITUTES.');
		document.form.quitutes.focus();
		return false;
	}
	
	if(document.form.qtd.value==""){
		alert('Preencha o campo QUANTIDADES.');
		document.form.qtd.focus();
		return false;
	}

	var qtd = $("#quantidade");
	if(qtd.val() <= 0 || qtd.val() > 300){
		alert("A quantidade permitida 1 a 300!");
		qtd.focus();

		return false;
	}

	var endereco = document.form.endereco.value;
	var expRegNome = new RegExp("^[A-zÁ-ü]{3,}([A-zÁ-ü]{2,})+$");

	if(!expRegNome.test(endereco) && document.form.checkbox.checked==false){
		alert("Preencha o campo ENDEREÇO corretamente ou marque a opção retirar em mãos!");
		document.form.endereco.focus();
		return false;
	}

  var fone = document.form.telefone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

	if(!expRegFone.test(fone)){
		alert("Preencha o campo TELEFONE corretamente!");
		document.form.telefone.focus();
		return false;
  }
    
    // Mensagem de sucesso
    alert("Orçamento efetuado!");
}
