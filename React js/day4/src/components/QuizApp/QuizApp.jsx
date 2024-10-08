import React, { useState } from 'react';
import '../../App.css'; // Đường dẫn tới file CSS cần import
import { question } from './Data'
const QuizApp = () => {
    console.log(question)
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isCheck, setIsCheck] = useState(false);
    const handleNextQuestion = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (indexQuestion + 1 < question.length) {
            setIndexQuestion(indexQuestion + 1)
        } else {
            console.log("kq");
            setIsCheck(true);
        }
    };
    console.log(score);
    return (
        <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-md mx-52">
            <h1 className="text-4xl font-bold text-center text-red-600 py-4">
                Bài kiểm tra tốt nghiệp lớp 1
            </h1>            {isCheck ? (
                <>
                    <p>Số câu trả lời đúng : {score}</p>
                    <p>Số câu trả lời sai : {question.length - score}</p>
                    <p className={`text-lg font-bold ${score > 1 ? 'text-red-700' : 'text-blue-700'}`}>
                        {score > 1 ? "Qua r nhé" : "Bạn ngu vcl"}
                    </p>
                    <button
                        onClick={() => {
                            setIsCheck(false);
                            setIndexQuestion(0);
                            setScore(0);
                        }}
                        type="button"
                        className="w-full md:w-auto px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none">
                        Quay lại
                    </button>
                </>
            ) : (
                <p>   <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                    Câu {indexQuestion + 1} :
                    {
                        question[indexQuestion].question
                    }
                </h1>
                    <div className="flex flex-col gap-5 list-answer">
                        {
                            question[indexQuestion].answer.map((i, index) => {
                                return (
                                    <button
                                        onClick={() => handleNextQuestion(i.isCorrect)}
                                        key={index}
                                        type="button"
                                        className="w-full md:w-auto px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none">
                                        {i.answerText}
                                    </button>
                                );
                            })
                        }
                    </div></p>
            )}


            {
                // question.map((item, index) => {
                //     return (
                //         <div>
                //         <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                //             Câu hỏi {index + 1}: {item.question}
                //         </h1>
                //         <div className="flex flex-col gap-4 mr-20 py-2">
                //             {
                //                 item.answer.map((i) => {
                //                     return (
                //                         <button key={index} type="button" className="w-full md:w-auto px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none">
                //                             {i.answerText}
                //                         </button>
                //                     );
                //                 })
                //             }
                //         </div>
                //     </div>
                //     );
                // })
            }

            {/* <div className="flex flex-col gap-4 mr-20 py-2">
                <button type="button" className="w-full md:w-auto px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none">
                    2
                </button>
            </div>
            <div className="flex flex-col gap-4 mr-20 py-2">
                <button type="button" className="w-full md:w-auto px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none">
                    2
                </button>
            </div>
            <div className="flex flex-col gap-4 mr-20 py-2">
                <button type="button" className="w-full md:w-auto px-4 py-2 bg-lime-400 text-white rounded-md hover:bg-lime-500 focus:outline-none">
                    2
                </button>
            </div> */}


        </div>
    )
}

export default QuizApp