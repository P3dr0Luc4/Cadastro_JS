function cadastrar()
{
    var nome = document.getElementById('nome').value;
    if(nome == "")
    {
        alert('Nome não pode estar em branco')
    }
    else if(nome == " ")
    {
        alert('Nome não pode estar em branco')
    }
    else
    {
        alert('Nome aceito')
    }
    
    var senha = document.getElementById('senha').value;
    if(senha.length <6)
    {
        alert('A senha precisa ter pelo menos 6 digitos')
    }
    else
    {
        alert('Senha valida')
    }
    
    var idade = document.getElementById('idade').value;
    if(idade <18)
    {
        alert('A idade não pode ser menor que 18')
    }
    else
    {
        alert('Idade aceita')
    }
    
    var telefone = document.getElementById('telefone').value;
    if(telefone.length <11)
    {
        alert('Número de telefone invalido')
    }
    else if (telefone.length >11) 
    {
        alert('Número de telefone invalido')
    }
    else
    {
        alert('Telefone valido')
    }
    
    var cpf = document.getElementById('cpf').value;
    if(cpf.length <11)
    {
        alert('O CPF não pode ter menos de 11 digitos')
    }
    else if (cpf.length >11) 
    {
        alert('O CPF não pode ter mais de 11 digitos')
    }
    else
    {
        alert('CPF valido')
    }
    
    var rg = document.getElementById('rg').value;
    if(rg.length <7)
    {
        alert('O RG não pode ter menos de 7 digitos')
    }
    else if (rg.length >7) 
    {
        alert('O RG não pode ter mais de 7 digitos')
    }
    else
    {
        alert('RG valido')
    }
    
    var salario = document.getElementById('salario').value;
    if(salario <500)
    {
        alert('O salário informado é inválido')
    }
    else
    {
        alert('Salário aceito')
    }
    
    var email = document.getElementById('email').value;
    if(email.substring("@gmail.com", "hotmail.com"))
    {
        alert('E-mail aceito')
    }
    else
    {
        alert('E-mail inválido')
    }

    var selecionar = document.getElementById("sexo");
    var resultado = selecionar.options[selecionar.selectedIndex].value;
    alert('Sexo: ' + resultado + ' selecionado')
    
    var fumar = document.getElementById("fumar");
    var resposta = fumar.options[fumar.selectedIndex].value;
    alert('Você é fumante? ' + resposta)

    var saude = document.getElementById("saude");
    var plano = saude.options[saude.selectedIndex].value;
    alert('Possui plano de saúde? ' + plano)
}

function cor()
{
    const tema = document.querySelector('#cor');
    tema.addEventListener('click', function()
    {
        document.body.classList.toggle('verde')
        var classe = document.body.className;
        if(classe == "roxo")
        {
            this.textContent = "Verde";
        }
        else
        {
            this.textContent = "Roxo";
        }
    });
}
