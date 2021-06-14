import React, { useState } from "react";
import styled from "styled-components";
import Service_announcement from './service';
import Sartner_announcement from './partner';


const useTab = (idx, Tabs) => {
    const [currentIdx, setCurrentIdx] = useState(idx);
    if (!Tabs || !Array.isArray(Tabs)) {
      return null;
    }
    return {
      currentItem: Tabs[currentIdx],
      changeItem: setCurrentIdx
    };
  };



const AMPresenter = () => {

    const Tab = [
        {
          title: "서비스 문의",
          content: <Service_announcement/>
        },
        {
          title: "업무제휴 문의",
          content: <Sartner_announcement/>
        },
      ];
      // in: 초기 탭 idx, 탭 리스트 out: 탭 리스트 아이템 , set인덱스
      
    const { currentItem, changeItem } = useTab(0, Tab);
    return (
        <div className="App">
        <h1>문의하기</h1>
        <p>기타 문의 사항은 cs@loniz.co.kr로 메일을 보내주시길 바랍니다</p>
        <div>
            {Tab.map((e, index) => (
            <button key={index} onClick={e => changeItem(index)}>
                {e.title}
            </button>
            ))}
        </div>
        {/* <div>{currentItem === 0 ? <div>1111</div> : <div>222222222</div> }</div> */}
        <div>{currentItem.content}</div>
        </div>
    );

      
}
export default AMPresenter;