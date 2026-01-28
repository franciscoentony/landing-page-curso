document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.navbar')

    header.innerHTML = `
        <nav>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Produtos</a></li>
                            <a href="#">
                                <h1>Mercadinho de Chico</h1>
                            </a>
                        <li><a href="#">Funcionários</a></li>
                        <li><a href="#">Recursos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
    `
})