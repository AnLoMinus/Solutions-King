document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // אוסף את הנתונים מהטופס
    const formData = new FormData(contactForm);
    const serviceType = formData.get("service-type");

    // בדיקת תקינות בסיסית
    if (!serviceType) {
      alert("נא לבחור סוג שירות");
      return;
    }

    // כאן תוכל להוסיף קוד לשליחת הטופס לשרת
    alert("הטופס נשלח בהצלחה! נציג יצור איתך קשר בהקדם.");
    contactForm.reset();
  });

  // אנימציית גלילה חלקה
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // הוספת אנימציות לכרטיסי השירות
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("menu-open");
    navMenu.classList.toggle("active");

    // עדכון aria-expanded
    const isExpanded = navMenu.classList.contains("active");
    this.setAttribute("aria-expanded", isExpanded);

    // מניעת גלילה כשהתפריט פתוח
    document.body.style.overflow = isExpanded ? "hidden" : "";
  });

  // סגירת התפריט בלחיצה על קישור
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("menu-open");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
