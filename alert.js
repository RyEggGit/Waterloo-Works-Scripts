(() => {
    const elements = [...document.getElementsByTagName("a")];
    const newTabs = elements.filter(element => element.innerText.trim() === "new tab");
    newTabs.forEach(tab => tab.click());
})();