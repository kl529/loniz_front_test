import React from 'react';
import PropTypes from 'prop-types';

const Service_announcement = () =>{
    return (
        <>
            <h1>서비스 문의</h1>
            <p>이메일</p><input type="text" name="email" required/>
            <p>전화번호</p><input type="text" name="phone_number" required/>
            <p>이름</p><input type="text" name="name" required/>
            <p>소속</p><input type="text" name="team" required/>

            <h2>문의내용</h2>
            <textarea name="contents" rows="20" cols="33"></textarea>
            <br/>
            <input type="submit" value="제출하기"/>
        </>
    );
};

export default Service_announcement;