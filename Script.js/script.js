document.querySelectorAll(".Container-icons a").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    alert(this.dataset.name + " ainda não disponível");
  });
});
