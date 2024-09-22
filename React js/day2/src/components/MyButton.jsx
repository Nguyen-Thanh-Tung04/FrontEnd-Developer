import React from 'react'

export const MyButton = (props) => {
    const { title, classBtn, onChosseData, type } = props;
    const login = "Chức năng login ";
    const resgiter = "chức năng đăng ký";
    const handleSubmit = (type) => {
        if (type === 1) {
            onChosseData(login);
        } else {
            onChosseData(resgiter);
        }
    }
    return (
        <div>
            <button type="button"
                className={classBtn}
                onClick={() => handleSubmit(type)}>
                {title}
            </button>


            {/* <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
               {title}
            </button> */}

        </div>
    )
}
