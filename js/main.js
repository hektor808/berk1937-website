document.addEventListener('DOMContentLoaded', function() {

    // --- YAŞ DOĞRULAMA (AGE GATE) ---
    const ageGate = document.getElementById('age-gate');
    const confirmAgeBtn = document.getElementById('confirm-age-btn');

    // Eğer kullanıcı daha önce onayladıysa (sessionStorage kullanarak) tekrar sorma
if (localStorage.getItem('isAgeVerified') === 'true') {
    ageGate.classList.add('hidden');
}

confirmAgeBtn.addEventListener('click', () => {
    localStorage.setItem('isAgeVerified', 'true');
    ageGate.classList.add('hidden');
});


    // --- ÜRÜN DETAY SAYFASI AKORDİYON MENÜ ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;

            // Diğer açık olanları kapat
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-header').classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = 0;
                    item.querySelector('.accordion-content').style.padding = '0 1rem';
                }
            });

            // Tıklananı aç/kapat
            accordionItem.classList.toggle('active');
            header.classList.toggle('active');

            if (accordionItem.classList.contains('active')) {
                //scrollHeight içeriğin tam yüksekliğini verir
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                accordionContent.style.padding = '1rem';
            } else {
                accordionContent.style.maxHeight = 0;
                accordionContent.style.padding = '0 1rem';
            }
        });
    });

    // İlk akordiyonu varsayılan olarak açık bırak
    if (accordionHeaders.length > 0) {
        accordionHeaders[0].click();
    }
});