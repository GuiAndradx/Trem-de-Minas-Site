document.addEventListener('DOMContentLoaded', () => {
    // --- Botão "Salvar contato" e novo modal de opções ---
    const saveContactBtn = document.getElementById('saveContactBtn');
    const saveContactModal = document.getElementById('saveContactModal');
    const contactOptionBtns = document.querySelectorAll('.contact-option-btn');
    const closeButtons = document.querySelectorAll('.close-button'); // Seleciona todos os botões de fechar

    if (saveContactBtn && saveContactModal && contactOptionBtns) {
        saveContactBtn.addEventListener('click', () => {
            saveContactModal.style.display = 'flex';
        });

        contactOptionBtns.forEach(button => {
            button.addEventListener('click', (e) => {
                const contactType = e.target.dataset.contactType;
                if (contactType === 'loja') {
                    const contactName = "Trem Bão de Minas - Paracambi";
                    const phoneNumber = "21977997625";
                    const emailAddress = "trembaodeminaspbi@gmail.com";
                    const website = "https://guiandradx.github.io/Trem-de-Minas-Site/";
                    const menuPdfUrl = "hhttps://guiandradx.github.io/Trem-de-Minas-Site/cardapio.pdf";
                    const instagramUrl = "https://www.instagram.com/trembaodeminas_pbi_mp";
                    const facebookUrl = "https://www.facebook.com/p/Trem-B%C3%A3o-de-Minas-ParacambiRJ-100054640741828/?locale=pt_BR";

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
                    a.download = 'trembaodeminas_paracambi.vcf';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                } else if (contactType === 'fornecedor') {
                    const supplierContactName = "Trem Bão de Minas - Administrativo";
                    const supplierPhoneNumber = "2136932039"; // Telefone para fornecedores
                    const supplierEmail = "trembaodeminaspbi@gmail.com"; // Email para fornecedores

                    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${supplierContactName}
ORG:Trem Bão de Minas
TEL;TYPE=WORK:${supplierPhoneNumber}
EMAIL;TYPE=INTERNET:${supplierEmail}
NOTE:Contato para fornecedores Trem Bão de Minas.
END:VCARD`;

                    const blob = new Blob([vcardContent], { type: 'text/vcard' });
                    const url = URL.createObjectURL(blob);

                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'trembaodeminas_fornecedores.vcf';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }
                // Lógica para o botão "Loja Miguel Pereira" com informações completas
                else if (contactType === 'miguelpereira') {
                    const miguelPereiraContactName = "Trem Bão de Minas - Miguel Pereira";
                    const miguelPereiraPhoneNumber = "24981443402"; // Substitua pelo telefone REAL da loja de Miguel Pereira
                    const miguelPereiraEmailAddress = "trembaodeminaspbi@gmail.com"; // Substitua pelo e-mail REAL da loja de Miguel Pereira
                    const miguelPereiraWebsite = "https://guiandradx.github.io/Trem-de-Minas-Site/"; // Substitua pelo site REAL da loja de Miguel Pereira (se houver um diferente)
                    const miguelPereiraMenuPdfUrl = "https://guiandradx.github.io/Trem-de-Minas-Site/cardapio.pdf"; // Substitua pelo link REAL do cardápio de Miguel Pereira
                    const miguelPereiraInstagramUrl = "https://www.instagram.com/trembaodeminas_pbi_mp"; // Substitua pelo Instagram REAL da loja de Miguel Pereira
                    const miguelPereiraFacebookUrl = "https://www.facebook.com/p/Trem-B%C3%A3o-de-Minas-ParacambiRJ-100054640741828/?locale=pt_BR"; // Substitua pelo Facebook REAL da loja de Miguel Pereira
                    const miguelPereiraAddress = "Rua Lúcio José Malheiros, s/n, Mangueiras, Miguel Pereira - RJ (Esquina com a RJ 125)";

                    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${miguelPereiraContactName}
ORG:Trem Bão de Minas
TEL;TYPE=CELL:${miguelPereiraPhoneNumber}
EMAIL;TYPE=INTERNET:${miguelPereiraEmailAddress}
URL;TYPE=WEBSITE:${miguelPereiraWebsite}
URL;TYPE=MENU:${miguelPereiraMenuPdfUrl}
URL;TYPE=INSTAGRAM:${miguelPereiraInstagramUrl}
URL;TYPE=FACEBOOK:${miguelPereiraFacebookUrl}
ADR;TYPE=WORK:${miguelPereiraAddress}
NOTE:Contato da Loja Trem Bão de Minas em Miguel Pereira.
END:VCARD`;

                    const blob = new Blob([vcardContent], { type: 'text/vcard' });
                    const url = URL.createObjectURL(blob);

                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'trembaodeminas_miguelpereira.vcf';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }
                saveContactModal.style.display = 'none'; // Fecha o modal após a ação
            });
        });
    }

    // --- Botão "Nos avalie" e novo modal de opções ---
    const rateUsBtn = document.getElementById('rateUsBtn');
    const rateUsModal = document.getElementById('rateUsModal');
    const rateOptionBtns = document.querySelectorAll('.rate-option-btn');

    if (rateUsBtn && rateUsModal && rateOptionBtns) {
        rateUsBtn.addEventListener('click', () => {
            rateUsModal.style.display = 'flex';
        });

        rateOptionBtns.forEach(button => {
            button.addEventListener('click', (e) => {
                const rateLocation = e.target.dataset.rateLocation;
                let reviewUrl = "";
                if (rateLocation === 'miguelpereira') {
                    // Link de avaliação fornecido pelo usuário
                    reviewUrl = "https://g.co/kgs/4V8mrAL";
                } else if (rateLocation === 'paracambi') {
                    reviewUrl = "https://search.google.com/local/writereview?placeid=ChIJp73whV9OmQAR2IxaBdNpytA";
                }
                if (reviewUrl) {
                    window.open(reviewUrl, '_blank');
                }
                rateUsModal.style.display = 'none'; // Fecha o modal após a ação
            });
        });
    }

    // --- Lógica para os links de endereço ---
    const addressLinks = document.querySelectorAll('.address-link');
    if (addressLinks) {
        addressLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evita que o link navegue diretamente
                const store = e.target.dataset.store;
                let mapUrl = "";
                if (store === 'paracambi') {
                    // Usando o endereço formatado para o Google Maps
                    mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Silvio+de+Carvalho,+51,+BNH,+Paracambi+-+RJ";
                } else if (store === 'miguelpereira') {
                    // Usando o endereço formatado para o Google Maps
                    mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+L%C3%BAcio+Jos%C3%A9+Malheiros,+s/n,+Mangueiras,+Miguel+Pereira+-+RJ";
                }

                if (mapUrl) {
                    window.open(mapUrl, '_blank');
                }
            });
        });
    }

    // --- Fechar Modais (geral para todos os modais) ---
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // --- Modal Pix (código existente) ---
    const pixBtn = document.getElementById('pixBtn');
    const pixModal = document.getElementById('pixModal');
    const copyPixBtn = document.querySelector('.copy-pix-btn');
    const pixKeyElement = document.querySelector('.pix-key');

    if (pixBtn && pixModal && copyPixBtn && pixKeyElement) {
        pixBtn.addEventListener('click', (e) => {
            e.preventDefault();
            pixModal.style.display = 'flex';
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

    // --- Carrossel de Imagens (código existente) ---
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

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('carousel-image');
        if (index === 0) img.classList.add('active'); 
        carouselContainer.appendChild(img);
        carouselElements.push(img);
    });

    function showImage(index) {
        carouselElements.forEach(img => img.classList.remove('active'));
        if (carouselElements[index]) {
            carouselElements[index].classList.add('active');
        }
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % carouselElements.length;
        showImage(currentImageIndex);
    }

    if (carouselElements.length > 1) {
        setInterval(showNextImage, 3000);
    }

    // --- Funcionalidade de Copiar Senha Wi-Fi (código existente) ---
    const wifiPasswordElement = document.getElementById('wifiPassword');
    const copyInstructionElement = document.querySelector('.wifi-info .copy-instruction');

    if (wifiPasswordElement) {
        wifiPasswordElement.addEventListener('click', async () => {
            const password = wifiPasswordElement.textContent;
            try {
                await navigator.clipboard.writeText(password);
                const originalInstruction = copyInstructionElement.textContent;
                copyInstructionElement.textContent = 'Copiado!';
                setTimeout(() => {
                    copyInstructionElement.textContent = originalInstruction;
                }, 1500);

            } catch (err) {
                console.error('Erro ao copiar a senha do Wi-Fi: ', err);
                alert('Não foi possível copiar a senha. Por favor, copie manualmente.');
            }
        });
    }
});
