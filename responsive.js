function verQr(qrImage) {
    const qrDisplay = document.getElementById('qr-display');
    qrDisplay.innerHTML = `<img src="${qrImage}" alt="QR Code" style="width:200px;height:200px;">`;
}

function verQr(qrImage) {
    const confirmPurchase = confirm("¿Deseas confirmar la compra de este producto?");
    
    if (confirmPurchase) {
        const qrDisplay = document.getElementById('qr-display');
        qrDisplay.innerHTML = `<img src="${qrImage}" alt="QR Code" style="width:200px;height:200px;">`;
        alert("¡Compra exitosa! Tu producto está listo para escanear.");
    } else {
        alert("Compra cancelada.");
    }
}
