({
	dragoverHandler : function(component, event, helper) {
		event.preventDefault();
        var dropZone = component.find("dropZone");
        $A.util.addClass(dropZone, 'active');
	},
    
    dragLeaveHandler : function(component, event, helper) {
		event.preventDefault();
        var dropZone = component.find("dropZone");
        $A.util.removeClass(dropZone, 'active');
	},
    
    dropHandler : function(component, event, helper) {
		event.preventDefault();
        var dropZone = component.find("dropZone");
        $A.util.removeClass(dropZone, 'active');
        
        var column = component.get('v.columnList');
        var columnAttributes = {};
        
        columnAttributes.innerHTML = event.dataTransfer.getData("innerHTML");
        columnAttributes.classList = event.dataTransfer.getData("classList");
        column.push(columnAttributes);
        
        component.set('v.columnList', column);
	},
})