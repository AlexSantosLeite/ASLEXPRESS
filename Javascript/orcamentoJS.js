// Obtendo as referências dos campos do formulário
document.addEventListener('DOMContentLoaded', function() {
  const nomeInput = document.querySelector('#nome');
  const telefoneInput = document.querySelector('#telefone');
  const enderecoRetiradaInput = document.querySelector('#retirada'); 
  const enderecoEntregaInput = document.querySelector('#entrega'); 
  const observacaoInput = document.querySelector('#observacao');

  // enviando as informações para meu whatsapp
  const enviarBtn = document.querySelector("#enviar-btn");
  enviarBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos do formulário
    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const enderecoRetirada = enderecoRetiradaInput.value.trim();
    const enderecoEntrega = enderecoEntregaInput.value.trim();
    const observacao = observacaoInput.value.trim();

    // Formatando a mensagem do WhatsApp
    const mensagem = `Olá, meu nome é ${nome}. Meu telefone é ${telefone}. Gostaria de solicitar um orçamento de entrega de ${enderecoRetirada} até ${enderecoEntrega}. Observação: ${observacao}`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const link = `https://wa.me/message/6H7T6BYXE5EDA1?text=${mensagemCodificada}`;

    // Redirecionando para o WhatsApp
    window.location.href = link;
  });
});

