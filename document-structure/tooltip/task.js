const tooltipLinks = [...document.querySelectorAll('.has-tooltip')];
let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

tooltipLinks.forEach((tooltipLink) => {
    tooltipLink.appendChild(tooltip);
    
    tooltipLink.addEventListener('click', (event) => {
        event.preventDefault();
               
        if (tooltip.innerText === event.target.title) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.classList.add('tooltip_active');
            tooltip.style.top = `${tooltipLink.getBoundingClientRect().bottom}px`;
            tooltip.style.left = `${tooltipLink.getBoundingClientRect().left}px`;
            tooltip.innerHTML = event.target.title;
        } 
    });
});
