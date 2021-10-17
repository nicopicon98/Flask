const container = document.querySelector("#container")

container.addEventListener("click", containerHandler)

function containerHandler(){
  console.log(container.ATTRIBUTE_NODE)
}