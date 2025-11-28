document.addEventListener('DOMContentLoaded', function() {
    const mySelfBtn = document.getElementById('mySelfBtn');
    const mySelfSidebar = document.getElementById('mySelfSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    
    mySelfBtn.addEventListener('click', function() {
        mySelfSidebar.classList.add('open');
        document.body.style.marginLeft = '300px'; 
    });

    closeSidebarBtn.addEventListener('click', function() {
        mySelfSidebar.classList.remove('open');
        document.body.style.marginLeft = '0'; 
    });
    
    document.addEventListener('click', function(event) {
        if (mySelfSidebar.classList.contains('open') && 
            !mySelfSidebar.contains(event.target) && 
            event.target !== mySelfBtn) {
            
            mySelfSidebar.classList.remove('open');
            document.body.style.marginLeft = '0'; 
        }
    });

    const whatsappForm = document.getElementById('whatsappForm');
    const whatsappNumber = '+94743869265'; 

    whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('customerName').value;
        const message = document.getElementById('customerMessage').value;
        
        const customMessage = `*Custom Mg*\n\nHello R.P., I'm ${name}, and I have the following design requirement:\n\n"${message}"\n\nThank you.`;
        
        const encodedMessage = encodeURIComponent(customMessage);

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
 
        window.open(whatsappUrl, '_blank');

        whatsappForm.reset();
    });

    const designItems = document.querySelectorAll('.design-item');
    designItems.forEach(item => {
        item.addEventListener('click', function() {
            const price = this.getAttribute('data-price');
            console.log(`Design clicked. Price is Rs. ${price}`);
        });
    });

});