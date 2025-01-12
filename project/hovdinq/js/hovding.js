let buttona = document.getElementById("button-a");
let buttonb = document.getElementById("button-b");
let buttonc = document.getElementById("button-c");
let buttond = document.getElementById("button-d");
let bicycle = document.getElementById("bicycle");
let arrow = document.getElementById("arrow");
let arrow1 = document.getElementById("arrow-1");
let arrow2 = document.getElementById("arrow-2");
let arrow3 = document.getElementById("arrow-3");
let arrow4 = document.getElementById("arrow-4");
let arrow5 = document.getElementById("arrow-5");
let arrow6 = document.getElementById("arrow-6");
let arrow7 = document.getElementById("arrow-7");
let arrow8 = document.getElementById("arrow-8");
let arrow9 = document.getElementById("arrow-9");
let arrow10 = document.getElementById("arrow-10");
let arrow11 = document.getElementById("arrow-11");
let arrow12 = document.getElementById("arrow-12");
let arrow13 = document.getElementById("arrow-13");
let arrow14 = document.getElementById("arrow-14");
let arrow15 = document.getElementById("arrow-15");
let arrow16 = document.getElementById("arrow-16");
let logo = document.getElementById("logo");
let yellowHalfCircle = document.getElementById("yellow-half-circle");
let firstSentence = document.getElementById("first-sentence");
let secondSentence = document.getElementById("second-sentence");
let thirdSentence = document.getElementById("third-sentence");
let fourthSentence = document.getElementById("fourth-sentence");
let or = document.getElementById("or");
let boldScroll = document.getElementById("bold-scroll");
let helmeta = document.getElementById("helmet-a");
let helmetb = document.getElementById("helmet-b");
let midwebsitecenter = document.getElementById("mid-website-center");



// scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            setTimeout(() => { 
                midwebsitecenter.style.display="flex";
               }, 500); 
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));

// ...

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
            entry.target.classList.remove('hidden2');
            observer2.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show2');
        }
    })
})

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el)=> observer2.observe(el));

// ...

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
            entry.target.classList.remove('hidden3');
            observer3.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show3');
        }
    })
})

const hiddenElements3 = document.querySelectorAll(".hidden3");
hiddenElements3.forEach((el)=> observer3.observe(el));


// ...

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show4');
            entry.target.classList.remove('hidden4');
            observer4.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show4');
        }
    })
})

const hiddenElements4 = document.querySelectorAll(".hidden4");
hiddenElements4.forEach((el)=> observer4.observe(el));

// ...

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show5');
            entry.target.classList.remove('hidden5');
            observer5.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show5');
        }
    })
})

const hiddenElements5 = document.querySelectorAll(".hidden5");
hiddenElements5.forEach((el)=> observer5.observe(el));

// ...

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show6');
            entry.target.classList.remove('hidden6');
            observer6.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show6');
        }
    })
})

const hiddenElements6 = document.querySelectorAll(".hidden6");
hiddenElements6.forEach((el)=> observer6.observe(el));


// ...

const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show7');
            entry.target.classList.remove('hidden7');
            observer7.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show7');
        }
    })
})

const hiddenElements7 = document.querySelectorAll(".hidden7");
hiddenElements7.forEach((el)=> observer7.observe(el));

// ...

const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show8');
            entry.target.classList.remove('hidden8');
            observer8.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show8');
        }
    })
})

const hiddenElements8 = document.querySelectorAll(".hidden8");
hiddenElements8.forEach((el)=> observer8.observe(el));

// ...

const observer9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show9');
            entry.target.classList.remove('hidden9');
            observer9.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show9');
        }
    })
})

const hiddenElements9 = document.querySelectorAll(".hidden9");
hiddenElements9.forEach((el)=> observer9.observe(el));



// ...

const observer9b = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show9b');
            entry.target.classList.remove('hidden9b');
            observer9b.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show9b');
        }
    })
})

const hiddenElements9b = document.querySelectorAll(".hidden9b");
hiddenElements9b.forEach((el)=> observer9b.observe(el));


// ...

const observer9c = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show9c');
            entry.target.classList.remove('hidden9c');
            observer9c.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show9c');
        }
    })
})

const hiddenElements9c = document.querySelectorAll(".hidden9c");
hiddenElements9c.forEach((el)=> observer9c.observe(el));



// ...

const observer9d = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show9d');
            entry.target.classList.remove('hidden9d');
            observer9d.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show9d');
        }
    })
})

const hiddenElements9d = document.querySelectorAll(".hidden9d");
hiddenElements9d.forEach((el)=> observer9d.observe(el));


// ...

const observer10 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show10');
            entry.target.classList.remove('hidden10');
            observer10.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show10');
        }
    })
})

const hiddenElements10 = document.querySelectorAll(".hidden10");
hiddenElements10.forEach((el)=> observer10.observe(el));



// ...

const observer11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show11');
            entry.target.classList.remove('hidden11');
            observer11.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show11');
        }
    })
})

const hiddenElements11 = document.querySelectorAll(".hidden11");
hiddenElements11.forEach((el)=> observer11.observe(el));




// ...

const observer12 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show12');
            entry.target.classList.remove('hidden12');
            observer12.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show12');
        }
    })
})

const hiddenElements12 = document.querySelectorAll(".hidden12");
hiddenElements12.forEach((el)=> observer12.observe(el));

// ...

const observer13 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show13');
            entry.target.classList.remove('hidden13');
            observer13.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show13');
        }
    })
})

const hiddenElements13 = document.querySelectorAll(".hidden13");
hiddenElements13.forEach((el)=> observer13.observe(el));


// ...

const observer14 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show14');
            entry.target.classList.remove('hidden14');
            observer14.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show14');
        }
    })
})

const hiddenElements14 = document.querySelectorAll(".hidden14");
hiddenElements14.forEach((el)=> observer14.observe(el));



// ...

const observer15 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show15');
            entry.target.classList.remove('hidden15');
            observer15.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show15');
        }
    })
})

const hiddenElements15 = document.querySelectorAll(".hidden15");
hiddenElements15.forEach((el)=> observer15.observe(el));



// ...

const observer16 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show16');
            entry.target.classList.remove('hidden16');
            observer16.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show16');
        }
    })
})

const hiddenElements16 = document.querySelectorAll(".hidden16");
hiddenElements16.forEach((el)=> observer16.observe(el));



// ...

const observer17 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show17');
            entry.target.classList.remove('hidden17');
            observer17.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show17');
        }
    })
})

const hiddenElements17 = document.querySelectorAll(".hidden17");
hiddenElements17.forEach((el)=> observer17.observe(el));



// ...

const observer18 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show18');
            entry.target.classList.remove('hidden18');
            observer18.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show18');
        }
    })
})

const hiddenElements18 = document.querySelectorAll(".hidden18");
hiddenElements18.forEach((el)=> observer18.observe(el));


  document.addEventListener("DOMContentLoaded", () => {
    const hidden19 = document.querySelector(".hidden19");
  
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class to start the animations
            hidden19.style.animation = `
              fade-in 0.5s 0s forwards,
              button-reveal 1s 0s forwards,
              background-transition 1s 1s forwards
            `;
            observer.unobserve(hidden19); // Stop observing once animation starts
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the button is visible
      }
    );
  
    // Start observing the button
    observer.observe(hidden19);
  });
  






  document.addEventListener("DOMContentLoaded", () => {
    const hidden20 = document.querySelector(".hidden20");
  
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class to start the animations
            hidden20.style.animation = `
            fade-in 0.5s 2s forwards,
            button-reveal 1s 2s forwards,
            background-transition 1s 3s forwards
            `;
            observer.unobserve(hidden20); // Stop observing once animation starts
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the button is visible
      }
    );
  
    // Start observing the button
    observer.observe(hidden20);
  });
  



// 


const sequence = document.getElementById("sequence");
const thirdSection = document.getElementById("third-section");

// Adjust these thresholds as needed
const startThreshold = 0.3; // Animation starts when 20% of the element is visible
const endThreshold = 0.8; // Animation ends when 80% of the element is visible

const updateTransform = () => {
  const rect = thirdSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Calculate the visibility progress of the element (0 to 1)
  const elementProgress = Math.min(
    Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0),
    1
  );

  // Map progress within the defined thresholds
  let progress = (elementProgress - startThreshold) / (endThreshold - startThreshold);
  progress = Math.min(Math.max(progress, 0), 1); // Clamp progress between 0 and 1

  // Map progress to the transform value (0% to -60%)
  const translateXValue = progress * -60;
  sequence.style.transform = `translateX(${translateXValue}%)`;
};

// Listen for the scroll event and update the transform
window.addEventListener("scroll", updateTransform);



//photos animation


const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");

let previousScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const viewportHeight = window.innerHeight;

  const fifthSection = document.getElementById("fifth-section-center");
  const rect = fifthSection.getBoundingClientRect();

  // Check if the section is in view
  if (rect.top < viewportHeight && rect.bottom > 0) {
    const scrollFactor = (viewportHeight - rect.top) / (viewportHeight + rect.height);

    // Update transforms based on scroll progress
    const leftTransform = 50 - scrollFactor * 100; // Moves from 50% to -50%
    const rightTransform = -50 + scrollFactor * 100; // Moves from -50% to 50%

    leftSide.style.transform = `translateX(${leftTransform}%)`;
    rightSide.style.transform = `translateX(${rightTransform}%)`;
  }

  previousScroll = currentScroll;
});
