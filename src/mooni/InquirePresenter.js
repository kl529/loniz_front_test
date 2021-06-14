import React, { useState, useEffect } from "react";
import styled from "styled-components";


const InquirePresenter = () => {
    return (
        <>
            <div>고객센터</div>
            <details>
                <summary>Q. 1번질문</summary>
                <p>A. 1번 답변</p>
            </details>
            <details>
                <summary>Q. 2번 질문</summary>
                <p>A. 2번 답변</p>
            </details>
            <details>
                <summary>Q. 3번 질문</summary>
                <p>A. 3번 답변</p>
            </details>
        </>
    );
};
export default InquirePresenter;