const skills = document.querySelectorAll(".skills");

addAnimation();

function addAnimation() {
    skills.forEach((skills) => {
        skills.setAttribute("data-animated", true);
        const skillsInner = skills.querySelector(".skills_inner");
        const skillsContent = Array.from(skillsInner.children);
        skillsContent.forEach((item) => {
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute("aria-hidden", true);
            skillsInner.appendChild(duplicateItem);
        });
    });
}