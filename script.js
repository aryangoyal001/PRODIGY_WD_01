  const navbar = document.getElementById("navbar");
    const links = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      let fromTop = window.scrollY + 60;
      links.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
    
  function verifyCertificate(event) {
    event.preventDefault();
    const certID = document.getElementById("certID").value.trim();
    const resultDiv = document.getElementById("verificationResult");
    // Fake validation logic (you can replace this with actual database/API later)
    if (certID === "PROD2025ABC") {
      resultDiv.innerHTML = "<h3>Status</h3><p style='color:green;'>Certificate is Valid ✔</p>";
    } else {
      resultDiv.innerHTML = "<h3>Status</h3><p style='color:red;'>Certificate Not Found ❌</p>";
    }
  }
  function handleFooterSwitch(select) {
  const theme = select.value;
  alert(`You selected: ${theme} theme`);
  // You can replace the alert with actual theme switching logic
}
