let selectedPlan = null;

function selectPlan(plan) {
    const pricingPlans = document.querySelectorAll('.pricing-plan');
    pricingPlans.forEach(p => {
        p.classList.remove('selected-plan');
    });

    if (selectedPlan === plan) {
        selectedPlan = null;
    } else {
        plan.classList.add('selected-plan');
        selectedPlan = plan;
    }
}

function purchasePlan() {
    if (selectedPlan) {
        const planName = selectedPlan.querySelector('h2').textContent;
        const planPrice = selectedPlan.querySelector('.price').textContent;

        alert(`Thank you for choosing the ${planName} for ${planPrice}. Your purchase has been completed.`);

        setTimeout(() => {
            selectedPlan.classList.remove('selected-plan');
            selectedPlan = null;
        }, 100);
    } else {
        alert('Please select a plan before proceeding.');
    }
}
// locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// gsap animation
gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:3,
    ease:"power4",
    opacity:0
})
