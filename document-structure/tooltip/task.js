const tooltipLinks = [...document.querySelectorAll('.has-tooltip')];
let tooltip = document.querySelector('.tooltip');

tooltipLinks.forEach((tooltipLink) => {
    function createTooltip() {
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip tooltip_active';
            tooltipLink.appendChild(tooltip);

        }
        return tooltip;
    }

    tooltipLink.addEventListener('click', (event) => {
        event.preventDefault();
        
        let target = event.target;
        
        tooltip = createTooltip();
        tooltip.style.top = `${tooltipLink.getBoundingClientRect().bottom}px`;
        tooltip.style.left = `${tooltipLink.getBoundingClientRect().left}px`;
        tooltip.innerHTML = target.title;
    })
});