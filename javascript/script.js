let orderButtons = document.querySelectorAll(".order");
let orderButtonsP = document.querySelectorAll(".order-p");
let orderButtonsImg = document.querySelectorAll(".order-img");

let appointmentButtons = document.querySelectorAll(".appointment");
let appointmentButtonsP = document.querySelectorAll(".appointment-p");
let appointmentButtonsImg = document.querySelectorAll(".appointment-img");

let subscrevaButtons = document.querySelectorAll(".subscreva");
let subscrevaButtonsP = document.querySelectorAll(".subscreva-p");
let subscrevaButtonsImg = document.querySelectorAll(".subscreva-img");

let thirdSectionCenterCenterDiv = document.getElementById("third-section-center-center-div");

let advancePDiv = document.getElementById("advance-p-div");
let advanceP = document.getElementById("advance-p");
let advancePPreco = document.getElementById("advance-p-preço");


let advancePlusPDiv = document.getElementById("advance-plus-p-div");
let advancePlusP = document.getElementById("advance-plus-p");
let advancePlusPPreco = document.getElementById("advance-plus-p-preço");

let advanceProPDiv = document.getElementById("advance-pro-p-div");
let advanceProP = document.getElementById("advance-pro-p");
let advanceProPPreco = document.getElementById("advance-pro-p-preço");

orderButtons.forEach(button => {
    button.addEventListener("mouseenter", function() {
        orderButtonsP.forEach(p => {
            p.style.opacity = "0"; // Hide text
            p.style.transition = "opacity 100ms ease-in-out"; // Smooth transition
        });

        orderButtonsImg.forEach(img => {
            img.style.transform = "translateX(80px)"; // Move image to the right
            img.style.transition = "transform 200ms cubic-bezier(0.25, 1, 0.5, 1) 200ms"; // Smooth acceleration and landing
        });
    });

    button.addEventListener("mouseleave", function() {
        orderButtonsP.forEach(p => {
            p.style.opacity = "1"; // Show text again
            p.style.transition = "opacity 100ms ease-in-out 200ms"; // Smooth transition
        });

        orderButtonsImg.forEach(img => {
            img.style.transform = "translateX(0)"; // Move image back to original position
            img.style.transition = "transform 200ms cubic-bezier(0.25, 1, 0.5, 1)"; // Smooth acceleration and landing
        });
    });
});


appointmentButtons.forEach(button => {
    button.addEventListener("mouseenter", function() {
        appointmentButtonsP.forEach(p => {
            p.style.opacity = "0"; // Hide text
            p.style.transition = "opacity 100ms ease-in-out"; // Smooth transition
        });

        appointmentButtonsImg.forEach(img => {
            img.style.transform = "translateX(80px)"; // Move image to the right
            img.style.transition = "transform 200ms cubic-bezier(0.25, 1, 0.5, 1) 200ms"; // Smooth acceleration and landing
        });
    });

    button.addEventListener("mouseleave", function() {
        appointmentButtonsP.forEach(p => {
            p.style.opacity = "1"; // Show text again
            p.style.transition = "opacity 100ms ease-in-out 200ms"; // Smooth transition
        });

        appointmentButtonsImg.forEach(img => {
            img.style.transform = "translateX(0)"; // Move image back to original position
            img.style.transition = "transform 200ms cubic-bezier(0.25, 1, 0.5, 1)"; // Smooth acceleration and landing
        });
    });
});




subscrevaButtons.forEach(button => {
    button.addEventListener("mouseenter", function() {
        subscrevaButtonsP.forEach(p => {
            p.style.opacity = "0"; // Hide text
            p.style.transition = "opacity 100ms ease-in-out"; // Smooth transition
        });

        subscrevaButtonsImg.forEach(img => {
            img.style.transform = "translateX(50px)"; // Move image to the right
            img.style.transition = "transform 200ms cubic-bezier(0.25, 1, 0.5, 1) 200ms"; // Smooth acceleration and landing
        });
    });

    button.addEventListener("mouseleave", function() {
        subscrevaButtonsP.forEach(p => {
            p.style.opacity = "1"; // Show text again
            p.style.transition = "opacity 100ms ease-in-out 200ms"; // Smooth transition
        });

        subscrevaButtonsImg.forEach(img => {
            img.style.transform = "translateX(0)"; // Move image back to original position
            img.style.transition = "transform 200ms cubic-bezier(0.25, 1, 0.5, 1)"; // Smooth acceleration and landing
        });
    });
});
let h1Elements = document.querySelectorAll(".third-section-h1");
let rightSection = document.querySelector("#third-section-center-right h1");
let centerImage = document.querySelector("#third-section-center-center-div img"); // Get the image element

const contentMap = {
    "01": {
        text: "Suplementos para a<br><span class='blue'>cabelo, pele e unhas</span>",
        image: "8609332 2.png"
    },
    "02": {
        text: "Suplementos para a<br><span class='blue'>energia e memória</span>",
        image: "person-holding-picture-old-new-york-city 1.png"
    },
    "03": {
        text: "Suplementos para a<br><span class='blue'>antienvelhecimento</span>",
        image: "pexels-sora-shimazaki-5938539 2.png" // Add an appropriate image if needed
    },
    "04": {
        text: "Suplementos para a<br><span class='blue'>perder peso</span>",
        image: "portrait-young-beautiful-woman-lingerie-posing-isolated-pink 1 1.png"
    },
    "05": {
        text: "Suplementos para a<br><span class='blue'>sono</span>",
        image: "tired-man-rubs-his-eyes-front-computer-screen (1) 1.png"
    },
    "06": {
        text: "Suplementos para a<br><span class='blue'>imunidade</span>",
        image: "side-view-man-wearing-medical-mask (1) 1.png"
    },
    "07": {
        text: "Suplementos para a<br><span class='blue'>ossos e articulações</span>",
        image: "pexels-kampus-8638040 2 1.png"
    },
    "08": {
        text: "Suplementos para a<br><span class='blue'>saúde sexual</span>",
        image: "day-full-resting-with-my-second-half 2.png"
    },
    "09": {
        text: "Suplementos para a<br><span class='blue'>problemas digestivos</span>",
        image: "man-with-face-pain-touching-his-stomach 2 1.png"
    },
    "10": {
        text: "Suplementos para a<br><span class='blue'>coração, circulação e açúcar no sangue</span>",
        image: "female-doctor-examining-patient 1.png"
    },
    "11": {
        text: "Suplementos para a<br><span class='blue'>menopausa</span>",
        image: "thoughtful-blonde-middle-aged-woman-ponders-something-keeps-hand-near-face-has-healthy-skin-minimal-makeup-makes-choice-wears-white-blouse-poses-indoor-blank-copy-space-your-promotion (1).png"
    }
};
h1Elements.forEach(h1 => {
    h1.addEventListener("click", function() {
        let currentChosen = document.querySelector(".third-section-h1.chosen");

        if (currentChosen) {
            currentChosen.classList.remove("chosen");
            currentChosen.style.opacity = "0.1";
        }

        h1.classList.add("chosen");
        h1.style.opacity = "1";

        let selectedText = h1.textContent.trim(); // Get the number clicked

        // Apply fade-out effect
        centerImage.style.transition = "opacity 200ms ease-out";
        centerImage.style.opacity = "0";

        thirdSectionCenterCenterDiv.style.transition = "all 200ms ease-in-out";
        thirdSectionCenterCenterDiv.style.background = "linear-gradient(to top, #4F7CAF 0%, #FFFFFF 80%)";
        thirdSectionCenterCenterDiv.style.opacity = "0.5";


        
        setTimeout(() => {
            // Change the image and text after 200ms
            if (contentMap[selectedText]) {
                rightSection.innerHTML = contentMap[selectedText].text; 
                centerImage.src = contentMap[selectedText].image;
            }

            // Apply fade-in effect
            centerImage.style.transition = "opacity 200ms ease-in";
            centerImage.style.opacity = "1";
            thirdSectionCenterCenterDiv.style.transition = "all 200ms ease-in-out";
            thirdSectionCenterCenterDiv.style.background = "linear-gradient(to top, #4F7CAF 0%, #FFFFFF 100%)";
            thirdSectionCenterCenterDiv.style.opacity = "1";

            // Now apply different styles based on the selectedText
            if (selectedText === "04") {
                centerImage.style.position = "static";
                centerImage.style.left = "-10px";
                centerImage.style.right = "-10px";
                centerImage.style.bottom = "0";
                centerImage.style.width = "calc(100% + 20px)";
                centerImage.style.transform = "translateY(-21px)";
                centerImage.style.borderBottomRightRadius = "0px";
            } else if (selectedText === "02") {
                centerImage.style.position = "static";
                centerImage.style.left = "0px";
                centerImage.style.right = "-10px";
                centerImage.style.bottom = "0";
                centerImage.style.width = "calc(100% + 20px)";
                centerImage.style.transform = "translateY(-3px) translateX(10px)";
            } else if (selectedText === "03") {
                centerImage.style.position = "static";
                centerImage.style.left = "0px";
                centerImage.style.right = "0px";
                centerImage.style.bottom = "0px";
                centerImage.style.width = "100%";
                centerImage.style.transform = "translateY(0px) translateX(0px)";
                centerImage.style.borderBottomRightRadius = "20px";
                centerImage.style.borderBottomLeftRadius = "20px";
            } else if (selectedText === "05") {
                centerImage.style.position = "static";
                centerImage.style.left = "0px";
                centerImage.style.right = "-10px";
                centerImage.style.bottom = "0";
                centerImage.style.width = "calc(100% + 20px)";
                centerImage.style.transform = "translateY(-25px) translateX(-10px)";
                centerImage.style.borderBottomRightRadius = "35px";
            } else if (selectedText === "06") {
                centerImage.style.position = "static";
                centerImage.style.left = "0px";
                centerImage.style.right = "0px";
                centerImage.style.bottom = "0px";
                centerImage.style.width = "100%";
                centerImage.style.transform = "translateY(14px) translateX(0px)";
                centerImage.style.borderBottomRightRadius = "20px";
                centerImage.style.borderBottomLeftRadius = "20px";
            } else if (selectedText === "07") {
                centerImage.style.position = "static";
                centerImage.style.width= "80%";
                centerImage.style.transform = "translateY(-32px) translateX(0px)";
                centerImage.style.borderRadius = "0px";
            } else if (selectedText === "09") {
                centerImage.style.position = "static";
                centerImage.style.width= "110%";
                centerImage.style.transform = "translateY(-16px) translateX(0px)";
            } else if (selectedText === "11") {
                centerImage.style.position = "static";
                centerImage.style.width= "100%";
                centerImage.style.transform = "translateY(-30px) translateX(0px)";
            } else {
                // Reset styles for other images
                centerImage.style.position = "static";
                centerImage.style.left = "0";
                centerImage.style.right = "0";
                centerImage.style.width = "100%";
                centerImage.style.transform = "translateY(0px) translateX(0px)";
                centerImage.style.borderBottomRightRadius = "20px";
                centerImage.style.borderBottomLeftRadius = "20px";
            }
        }, 200); // Change image after 200ms delay
    });



    h1.addEventListener("mouseenter", function() {
        if (!h1.classList.contains("chosen")) {
            h1.style.opacity = "0.4"; // Increase opacity on hover
            h1.style.transition = "opacity 200ms ease-in-out";
        }
    });

    h1.addEventListener("mouseleave", function() {
        if (!h1.classList.contains("chosen")) {
            h1.style.opacity = "0.1"; // Restore opacity on mouse leave
        }
    });
    
});





let advance=document.getElementById("advance");
let advanceShadow=document.getElementById("advance-shadow");

    advance.addEventListener("mouseenter", function() {
            advancePDiv.style.height= "90px"; // Hide text
            advancePDiv.style.transition = "all 250ms ease-in-out"; // Smooth transition
            advanceShadow.style.opacity= "50%"; // Hide text
            advanceShadow.style.transition = "opacity 250ms ease-in-out";
            advanceP.style.display="flex"; // Smooth transition
            advancePPreco.style.display="flex"; // Smooth transition
            setTimeout(() => {
                // Change the image and text after 200ms
                advanceP.style.opacity="1";
                advanceP.style.transition = "opacity 250ms ease-in-out";
                advancePPreco.style.opacity="1";
                advancePPreco.style.transition = "opacity 250ms ease-in-out";}, 200);
        
    });

    advance.addEventListener("mouseleave", function() {
        advancePDiv.style.height= "35px"; // Hide text
        advancePDiv.style.transition = "all 250ms ease-in-out";  // Smooth transition
        advanceShadow.style.opacity= "100%"; // Hide text
        advanceShadow.style.transition = "opacity 250ms ease-in-out";
        advanceP.style.opacity="0";
        advancePPreco.style.opacity="0";
        setTimeout(() => {
            // Change the image and text after 200ms
            advanceP.style.display="none";
            advancePPreco.style.display="none";}, 200);
});

let advancePlus=document.getElementById("advance-plus");
let advancePlusShadow=document.getElementById("advance-plus-shadow");

    advancePlus.addEventListener("mouseenter", function() {
        advancePlusPDiv.style.height= "90px"; // Hide text
        advancePlusPDiv.style.transition = "all 250ms ease-in-out"; // Hide text
            advancePlusShadow.style.opacity= "50%"; // Hide text
            advancePlusShadow.style.transition = "opacity 250ms ease-in-out"; // Smooth transition
            advancePlusP.style.display="flex"; // Smooth transition
            advancePlusPPreco.style.display="flex"; // Smooth transition
            setTimeout(() => {
                // Change the image and text after 200ms
                advancePlusP.style.opacity="1";
                advancePlusP.style.transition = "opacity 250ms ease-in-out";
                advancePlusPPreco.style.opacity="1";
                advancePlusPPreco.style.transition = "opacity 250ms ease-in-out";}, 200);
    });

    advancePlus.addEventListener("mouseleave", function() {
        advancePlusPDiv.style.height= "35px"; // Hide text
        advancePlusPDiv.style.transition = "all 250ms ease-in-out";  // Smooth transition
        advancePlusShadow.style.opacity= "100%"; // Hide text
        advancePlusShadow.style.transition = "opacity 250ms ease-in-out";
        advancePlusP.style.opacity="0";
        advancePlusPPreco.style.opacity="0";
        setTimeout(() => {
            // Change the image and text after 200ms
            advancePlusP.style.display="none";
            advancePlusPPreco.style.display="none";}, 200);
});

let advancePro=document.getElementById("advance-pro");
let advanceProShadow=document.getElementById("advance-pro-shadow");

    advancePro.addEventListener("mouseenter", function() {
        advanceProPDiv.style.height= "90px"; // Hide text
        advanceProPDiv.style.transition = "all 250ms ease-in-out"; // Hide text
            advanceProShadow.style.opacity= "50%"; // Hide text
            advanceProShadow.style.transition = "opacity 250ms ease-in-out"; // Smooth transition
            advanceProP.style.display="flex"; // Smooth transition
            advanceProPPreco.style.display="flex"; // Smooth transition
            setTimeout(() => {
                // Change the image and text after 200ms
                advanceProP.style.opacity="1";
                advanceProP.style.transition = "opacity 250ms ease-in-out";
                advanceProPPreco.style.opacity="1";
                advanceProPPreco.style.transition = "opacity 250ms ease-in-out";}, 200);
    });

    advancePro.addEventListener("mouseleave", function() {
        advanceProPDiv.style.height= "35px"; // Hide text
        advanceProPDiv.style.transition = "all 250ms ease-in-out";  // Smooth transition
        advanceProShadow.style.opacity= "100%"; // Hide text
        advanceProShadow.style.transition = "opacity 250ms ease-in-out";
        advanceProP.style.opacity="0";
        advanceProPPreco.style.opacity="0";
        setTimeout(() => {
            // Change the image and text after 200ms
            advanceProP.style.display="none";
            advanceProPPreco.style.display="none";}, 200);
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const loginImg = document.getElementById("login");
    const shopImg = document.getElementById("shop");
    
    const scrollY = window.scrollY;

    if (scrollY <= 100) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Fully transparent
        loginImg.src = "image/login-white.png"; // Default dark icon
        shopImg.src = "image/bag-white.png"; // Default dark icon
    } else if (scrollY >= 200) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Fully white

        loginImg.src = "image/login-blue.png"; // Light icon
        shopImg.src = "image/bag-blue.png"; // Light icon
    } else {
        let opacity = (scrollY - 100) / 100; // Converts 100px-200px range to 0-1
        navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;

        // Change images when opacity is above 0.5 (you can adjust this threshold)
        if (opacity > 0.5) {
            loginImg.src = "image/login-blue.png"; // Light icon
            shopImg.src = "image/bag-blue.png"; // Light icon
        } else {
            loginImg.src = "image/login-white.png"; // Default dark icon
            shopImg.src = "image/bag-white.png"; // Default dark icon
        }
    }
});



/*

const sections = document.querySelectorAll(".section");
let isScrolling = false;

function scrollToSection(index) {
    if (isScrolling) return;
    isScrolling = true;

    window.scrollTo({
        top: sections[index].offsetTop,
        behavior: "smooth",
    });

    setTimeout(() => {
        isScrolling = false;
    }, 600); // Adjust timing for smooth effect
}

let currentIndex = 0;

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        // Scroll down
        if (currentIndex < sections.length - 1) {
            currentIndex++;
            scrollToSection(currentIndex);
        }
    } else {
        // Scroll up
        if (currentIndex > 0) {
            currentIndex--;
            scrollToSection(currentIndex);
        }
    }
});

*/










document.addEventListener("DOMContentLoaded", function() {
    let paper = document.getElementById("paper");


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            } else {
            }
        });
    }); // Trigger when 30% of the element is visible

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));



    const observer1 = new IntersectionObserver((entries, observer1) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll("h1");
                counters.forEach(counter => animateCount(counter));

                entry.target.classList.add("show1");
                entry.target.classList.remove("hidden1");

                observer1.unobserve(entry.target); // Stop observing after animation
            }
        });
    }); // Trigger when 50% of section is visible

    const hiddenSections1 = document.querySelectorAll(".hidden1");
    hiddenSections1.forEach(section => observer1.observe(section));


    function animateCount(element) {
        let target = parseInt(element.getAttribute("data-target"));
        let suffix = element.getAttribute("data-suffix") || ""; // Handle % symbol
        let duration = 3000; // 2 seconds
        let startTime = null;

        function updateNumber(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = (timestamp - startTime) / duration;

            // Apply an easing function (ease-out effect)
            let easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

            let currentValue = Math.floor(easedProgress * target);
            if (currentValue >= target) {
                currentValue = target;
            }

            // Add "+" only to 25000
            let plusSign = target === 25000 ? "+" : "";
            element.textContent = currentValue + plusSign + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }

        requestAnimationFrame(updateNumber);
    }











    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show3');
                entry.target.classList.remove('hidden3');
            } else {

            }
        });
    }); // Trigger when 30% of the element is visible

    const hiddenElements3 = document.querySelectorAll(".hidden3");
    hiddenElements3.forEach((el) => observer3.observe(el));














    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show4');
                entry.target.classList.remove('hidden4');
            } else {
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    const hiddenElements4 = document.querySelectorAll(".hidden4");
    hiddenElements4.forEach((el) => observer4.observe(el));

    const observer5 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show5');
                entry.target.classList.remove('hidden5');
            } else {
                entry.target.classList.remove('show5');
                entry.target.classList.add('hidden5'); // Re-hide if scrolled away
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    const hiddenElements5 = document.querySelectorAll(".hidden5");
    hiddenElements5.forEach((el) => observer5.observe(el));



});



document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const items = Array.from(carousel.children);
    const totalItems = items.length;
    let currentIndex = Math.floor(totalItems / 2);
    let isAnimating = false;

    // Text mapping based on the image ID
    const textMap = {
        "img-01": "cabelo, pele e unhas",
        "img-02": "Energia e memória",
        "img-03": "Antienvelhecimento",
        "img-04": "Perder peso",
        "img-05": "Sono",
        "img-06": "Imunidade",
        "img-07": "Ossos e articulações",
        "img-08": "Saúde Sexual",
        "img-09": "Problemas Digestivos",
        "img-10": "Coração, circulação e açúcar no sangue",
        "img-11": "Menopausa"
    };

    const textElement = document.getElementById("blue1");
    function moveCarousel() {
        if (isAnimating) return;
        isAnimating = true;
    
        // 1️⃣ Start fading out the text 200ms before sliding
        setTimeout(() => {
            textElement.classList.add("fade-out");
        }, 10);
    
        // 2️⃣ Start fading out the center image
        items[currentIndex].style.opacity = "0.3";
    
        setTimeout(() => {
            // 3️⃣ Move the whole carousel
            carousel.style.transition = "transform 1s ease-in-out";
            carousel.style.transform = `translateX(-${items[0].offsetWidth + 20}px)`;
    
            setTimeout(() => {
                // 4️⃣ Instantly reset transform & rearrange items in the array
                carousel.style.transition = "none";
                carousel.style.transform = "translateX(0)";
    
                let firstItem = items.shift();
                carousel.appendChild(firstItem);
                items.push(firstItem);
    
                currentIndex = Math.floor(totalItems / 2);
    
                setTimeout(() => {
                    // 5️⃣ Update text and fade it in 200ms after slide ends
                    updateOpacityAndText();
                }, 10);
    
                isAnimating = false;
            }, 1000); // Move animation duration
    
        }, 400); // Initial fade-out duration
    }
    
    function updateOpacityAndText() {
        items.forEach((item) => {
            item.classList.remove("active");
            item.style.opacity = "0.3";
        });
    
        items[currentIndex].classList.add("active");
        items[currentIndex].style.opacity = "1";
    
        const activeImageId = items[currentIndex].id;
        const newText = textMap[activeImageId];
    
        if (newText && textElement.textContent !== newText) {
            setTimeout(() => {
                textElement.textContent = newText;
                textElement.classList.remove("fade-out");
                textElement.classList.add("fade-in");
    
                setTimeout(() => {
                    textElement.classList.remove("fade-in");
                }, 600);
            }, 10); // Wait 200ms after slide ends before fading in
        }
    }
    
    updateOpacityAndText(); // Set initial state
    setInterval(moveCarousel, 3400); // 400ms fade-out + 1000ms move + 400ms fade-in + 1600ms hold
});
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        const arrow = question.querySelector(".open-question");
        const answer = question.querySelector("p");

        question.addEventListener("click", function () {
            // Close all other open answers before opening the clicked one
            questions.forEach(q => {
                const otherAnswer = q.querySelector("p");
                const otherArrow = q.querySelector(".open-question");
                
                if (otherAnswer !== answer) {
                    otherAnswer.style.maxHeight = "0px";
                    otherAnswer.style.opacity = "0";
                    setTimeout(() => {
                        otherAnswer.style.display = "none";
                    }, 300); // Wait for animation before hiding
                    otherArrow.style.transform = "rotate(0deg)"; // Reset arrow
                }
            });

            // Toggle the clicked question
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.opacity = "1";
                arrow.style.transform = "rotate(180deg)"; // Rotate arrow down
            } else {
                answer.style.maxHeight = "0px";
                answer.style.opacity = "0";
                setTimeout(() => {
                    answer.style.display = "none";
                }, 300);
                arrow.style.transform = "rotate(0deg)"; // Reset arrow
            }
        });
    });
});





/*

document.addEventListener("DOMContentLoaded", function() {

});

*/