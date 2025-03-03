document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const modalFrame = document.getElementById("modal-frame");

    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const productId = card.getAttribute("data-id");
            modalFrame.src = `modal.html?id=${productId}`; // 상품 ID 전달
            modalFrame.style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        document.getElementById("modal-title").textContent = `상품 ${productId} 상세보기`;
        document.getElementById("modal-content").textContent = `상품 ${productId}의 정보를 여기에 표시`;
    }
});
