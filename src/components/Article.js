import React from 'react'


function Article({date="January 1, 1970", title, minutes, preview}) {
    
    function cups(propsNumber) {
        let cup = "☕️"
        let emoji = "🍱"
        if (propsNumber<30) {
            return cup.repeat(Math.ceil(propsNumber/5))
        } else {
            return emoji.repeat(Math.ceil(propsNumber/10))
        }

    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small> {cups(minutes)} {minutes} min read</small>
            <p>{preview}</p>
            
        </article>
    )
}

export default Article