document.addEventListener('DOMContentLoaded', () => {
    // --- Botão "Salvar contato" ---
    const saveContactBtn = document.getElementById('saveContactBtn');
if (saveContactBtn) {
    saveContactBtn.addEventListener('click', () => {
        const contactName = "Trem Bão de Minas";
        const phoneNumber = "5521977997625";
        const emailAddress = "trembaodeminaspbi@gmail.com";
        const website = "https://www.trembaodeminas.com.br";
        const menuPdfUrl = "https://www.trembaodeminas.com.br/cardapio.pdf"; // Substitua pelo link real do seu PDF
        const instagramUrl = "https://www.instagram.com/trembaodeminas_pbi_mp"; // Substitua pelo seu Instagram
        const facebookUrl = "https://www.facebook.com/p/Trem-B%C3%A3o-de-Minas-ParacambiRJ-100054640741828/?locale=pt_BR"; // Substitua pelo seu Facebook

        const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactName}
ORG:${contactName}
TEL;TYPE=CELL:${phoneNumber}
EMAIL;TYPE=INTERNET:${emailAddress}
URL;TYPE=WEBSITE:${website}
URL;TYPE=MENU:${menuPdfUrl}
URL;TYPE=INSTAGRAM:${instagramUrl}
URL;TYPE=FACEBOOK:${facebookUrl}
NOTE:Venha saborear o verdadeiro gostinho de Minas! Acesse nosso cardápio e redes sociais.
END:VCARD`;

            const blob = new Blob([vcardContent], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'trembaodeminas_contato.vcf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    // --- Botão "Nos avalie" ---
    const rateUsBtn = document.getElementById('rateUsBtn');
    if (rateUsBtn) {
        rateUsBtn.addEventListener('click', () => {
            const reviewUrl = "https://search.google.com/local/writereview?placeid=ChIJp73whV9OmQAR2IxaBdNpytA";
            window.open(reviewUrl, '_blank');
        });
    }

    // --- Modal Pix ---
    const pixBtn = document.getElementById('pixBtn');
    const pixModal = document.getElementById('pixModal');
    const closeButton = document.querySelector('.close-button');
    const copyPixBtn = document.querySelector('.copy-pix-btn');
    const pixKeyElement = document.querySelector('.pix-key');

    if (pixBtn && pixModal && closeButton && copyPixBtn && pixKeyElement) {
        pixBtn.addEventListener('click', (e) => {
            e.preventDefault();
            pixModal.style.display = 'flex';
        });

        closeButton.addEventListener('click', () => {
            pixModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == pixModal) {
                pixModal.style.display = 'none';
            }
        });

        copyPixBtn.addEventListener('click', () => {
            const pixKey = pixKeyElement.textContent;
            navigator.clipboard.writeText(pixKey)
                .then(() => {
                    alert('Chave Pix copiada!');
                })
                .catch(err => {
                    console.error('Erro ao copiar a chave Pix: ', err);
                    alert('Não foi possível copiar a chave Pix. Por favor, copie manualmente.');
                });
        });
    }

    // --- Carrossel de Imagens ---
    const carouselContainer = document.querySelector('.carousel-container');
    const images = [
        'imagem1.jpeg',
        'imagem2.jpeg',
        'imagem3.jpeg',
        'imagem4.jpeg',
        'imagem5.jpeg',
        'imagem6.jpeg',
        'imagem7.jpeg',
        'imagem8.jpeg',
        'imagem9.jpeg',
        'imagem10.jpeg',
        'imagem11.jpeg',
        'imagem12.jpeg'
    ];

    let currentImageIndex = 0;
    let carouselElements = [];

    // Cria as imagens dinamicamente
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('carousel-image');
        // A primeira imagem é ativa ao ser criada
        if (index === 0) img.classList.add('active'); 
        carouselContainer.appendChild(img);
        carouselElements.push(img);
    });

    function showImage(index) {
        // Remove a classe 'active' de todas as imagens
        carouselElements.forEach(img => img.classList.remove('active'));
        // Adiciona a classe 'active' à imagem no índice atual
        if (carouselElements[index]) {
            carouselElements[index].classList.add('active');
        }
    }

    function showNextImage() {
        // Calcula o próximo índice da imagem
        currentImageIndex = (currentImageIndex + 1) % carouselElements.length;
        // Mostra a próxima imagem
        showImage(currentImageIndex);
    }

    // Inicia o carrossel se houver mais de uma imagem
    if (carouselElements.length > 1) {
        setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos
    }

    // --- Funcionalidade de Copiar Senha Wi-Fi ---
    const wifiPasswordElement = document.getElementById('wifiPassword');
    const copyInstructionElement = document.querySelector('.wifi-info .copy-instruction');

    if (wifiPasswordElement) {
        wifiPasswordElement.addEventListener('click', async () => {
            const password = wifiPasswordElement.textContent;
            try {
                await navigator.clipboard.writeText(password);
                // Feedback visual para o usuário
                const originalInstruction = copyInstructionElement.textContent;
                copyInstructionElement.textContent = 'Copiado!';
                setTimeout(() => {
                    copyInstructionElement.textContent = originalInstruction;
                }, 1500); // Volta ao texto original após 1.5 segundos

            } catch (err) {
                console.error('Erro ao copiar a senha do Wi-Fi: ', err);
                alert('Erro ao copiar a senha. Por favor, copie manualmente: ' + password);
            }
        });
    }
});