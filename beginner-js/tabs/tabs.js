const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    tabPanels.forEach(tabPanel => tabPanel.hidden = true);
    tabButtons.forEach(tab => tab.setAttribute('aria-selected', false));
    event.currentTarget.setAttribute('aria-selected', true);
    const currentTabId = event.currentTarget.id;
    // METHOD 1
    let currentTabPanel = tabs.querySelector(`[aria-labelledby=${currentTabId}]`);
    
    // METHOD 2
    // tabPanels.forEach(tabPanel => {
    //     if (tabPanel.getAttribute('aria-labelledby') === currentTabId) {
    //         currentTabPanel = tabPanel;
    //     }
    // });
    
    // METHOD 3
    const tabPanelArray = Array.from(tabPanels);
    
    currentTabPanel = tabPanelArray.find(tabPanel => tabPanel.getAttribute('aria-labelledby') === currentTabId);

    currentTabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

// Learnings
// roles and aria labels good for accessibility and SEO