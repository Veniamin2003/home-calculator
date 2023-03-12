import React from 'react'
import telegram from "./telegram.php"

function Form() {
    return (
        <div>
            <form action={telegram} method="POST">
                <div>
                    <input type="text" class="form-control" name="name" placeholder='Введите что-то'></input>
                </div>

            <button type="submit" className='btn'>Send</button>

            </form>

        </div>
    )
}

export default Form