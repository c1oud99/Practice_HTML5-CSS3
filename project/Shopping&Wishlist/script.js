document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const modalContainer = document.getElementById("modal-container");
    const modalBody = document.getElementById("modal-body");
    const closeModal = document.querySelector(".close-btn");
    
    // 상품 카드 클릭 시 모달 열기
    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const productId = card.getAttribute("data-id");

            // 상품 정보를 동적으로 불러와 모달에 표시
            fetch(`modal.html?id=${productId}`)
                .then(response => response.text())
                .then(html => {
                    modalBody.innerHTML = html; 
                    modalContainer.classList.remove("hidden"); // 모달 보이기
                });
        });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeModal.addEventListener("click", () => {
        modalContainer.classList.add("hidden");
    });

    // 모달 외부 클릭 시 닫기
    modalContainer.addEventListener("click", (event) => {
        if (event.target === modalContainer) {
            modalContainer.classList.add("hidden");
        }
    });

    // 카테고리 필터 기능
    const categorySelect = document.getElementById("category-select");

    categorySelect.addEventListener("change", (event) => {
        const selectedCategory = event.target.value;

        productCards.forEach(card => {
            const productCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" || productCategory === selectedCategory) {
                card.style.display = "block"; // 해당 카테고리면 표시
            } else {
                card.style.display = "none"; // 다른 카테고리는 숨김
            }
        });
    });
});
