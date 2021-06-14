import React from 'react';
import PropTypes from 'prop-types';

const Partner_announcement = () => {
    return (
        <>
            <h1>업무제휴 문의</h1>
            <p>로니즈와 업무제휴를 원하시면 문의사항을 남겨주세요<br/>담당자가 빠른 시일 내에 확인하여 연락드리겠습니다.</p>
            <p>이메일</p><input type="text" name="email" required/>
            <p>전화번호</p><input type="text" name="phone_number" required/>
            <p>이름</p><input type="text" name="name" required/>

            <h2>문의내용</h2>
            <textarea name="contents" rows="20" cols="33"></textarea>
            <h2>개인 정보 수집 및 이용동의</h2>
            <textarea name="identity" rows="3" cols="33"></textarea><br/>
            <input type="checkbox" name="agreement" required/> 개인정보 이용 및 수집동의 (필수)
            <br/>
            <input type="submit" value="제출하기"/>
        </>
    );
};
export default Partner_announcement;