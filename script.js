document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    // Simulação de envio de dados para o servidor
    console.log('Cadastro realizado com sucesso:');
    console.log('Nome:', nome);
    console.log('Endereço:', endereco);
    console.log('Telefone:', telefone);
    console.log('Data de Nascimento:', dataNascimento);

    alert('Cadastro realizado com sucesso!');
});

const produtos = document.querySelectorAll('.adicionarCarrinho');
const carrinho = [];

produtos.forEach(produto => {
    produto.addEventListener('click', function() {
        const produtoNome = this.getAttribute('data-produto');
        carrinho.push(produtoNome);
        atualizarCarrinho();
    });
});

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itensCarrinho');
    itensCarrinho.innerHTML = '';

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        const lista = document.createElement('ul');
        carrinho.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            lista.appendChild(listItem);
        });
        itensCarrinho.appendChild(lista);
    }
}

document.getElementById('finalizarPedido').addEventListener('click', function() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const mensagem = `Olá, gostaria de fazer um pedido: \n\n${carrinho.join('\n')}`;
    const url = `https://wa.me/5548996126202?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
