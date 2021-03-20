const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const submit = document.getElementById("submit")
const likesList = document.getElementsByClassName("likes")[0]
const counter = document.getElementById("counter")
const commentsList = document.getElementById("list")

const likes = {}



document.addEventListener("DOMContentLoaded", timerCountUp)

function timerCountUp(){
    interval = setInterval(countUp, 1000)  //scope to be visible to pauseUnpause - there's probably a better way to do this
    paused = false  //scope to be visible to pauseUnpause - there's probably a better way to do this
}

function pauseUnpause(){
    if(paused == false){
        clearInterval(interval)
        paused = true
        pause.innerText = "Resume"
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        submit.disabled = true
    } else {
        timerCountUp()
        pause.innerText = "Pause"
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        submit.disabled = false
    }
}

function addLike(){
    let currentCount = parseInt(counter.innerText, 10)
    if(likes[currentCount]){
        likes[currentCount] += 1
        let message = document.getElementById(`likes - ${currentCount}`)
        message.innerText = `${currentCount} has been liked ${likes[currentCount]} times.`
    } else {
        likes[currentCount] = 1
        let message = document.createElement("li")
        message.setAttribute("id", `likes - ${currentCount}`)
        message.innerText = `${currentCount} has been liked one time.`
        likesList.appendChild(message)
    }
}

function addComment(){
    let message = document.createElement("li")
    let text = document.getElementById("comment-input")
    message.innerText = text.value
    commentsList.appendChild(message)
}

function countUp(){
    
    let currentCount = counter.innerText
    counter.innerText = (parseInt(currentCount, 10) + 1)
}

function countDown(){
    
    let currentCount = counter.innerText
    counter.innerText = (parseInt(currentCount, 10) - 1)
}

minus.addEventListener("click", countDown)
plus.addEventListener("click", countUp)
pause.addEventListener("click", pauseUnpause)
heart.addEventListener("click", addLike)
submit.addEventListener("click", function(e){
    e.preventDefault()
    addComment()
})

