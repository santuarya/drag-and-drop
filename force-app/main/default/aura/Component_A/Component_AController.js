({
	dragStart : function(component, event, helper) {
		event.dataTransfer.setData('innerHTML', event.target.firstElementChild.innerHTML);
        event.dataTransfer.setData('classList', event.target.classList.value);
	}
})