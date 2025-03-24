class Notification{
    wrapper;
	listContainer;
	items;
	
    constructor(){
		//create a div with fixed position in top and right(Wrapper)
		//create a ul and add to the notification wrapper
		//Add to the body element
		//hide the notification div
		this.wrapper = document.createElement("div")
		this.wrapper.className = "notification-container"
		const body = document.querySelector("body")
		body.appendChild(this.wrapper)

		this.listContainer = document.createElement("ul")
		this.listContainer.className = "notification-list"
		this.wrapper.appendChild(this.listContainer)
	}
	
    add(contentElement){
		//create a new li as the notification item
		//show the notification div
		//set a timeOut to hide notification again and to remove notification item
		//create a close button in top right which calls for the close method
		const item = document.createElement("li")
		item.className="notification-item"
		this.listContainer.appendChild(item)

        
        item.appendChild(contentElement)

		const closeButton = document.createElement("button")
        closeButton.className="close-button"
		item.appendChild(closeButton)
        closeButton.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill="none" stroke="#D69ADE" stroke-linecap="round" stroke-linejoin="round" d="m7.5 7.5l6 6m0-6l-6 6" stroke-width="1"/></svg>`

		closeButton.addEventListener("click", () =>{
			this.close(item)
		})

		setTimeout(() =>{
			this.close(item)
		},100000)
	}
	
    close(element){
		//instantly removes the notification item
        element.classList.add("hide")
        setTimeout(() =>{
            element.remove()
        },500)
	}
}

export const notification = new Notification()

