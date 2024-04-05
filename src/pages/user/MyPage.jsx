import React from 'react';
import './Mypage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { UserInfo, UserSave } from '../../components/Mypage';
import TopButton from '../../components/TopButton/TopButton';



function MyPage() {

    const name = '김코딩';
    
    return (
        <>
            <Header />
                <UserInfo userName={name}/>
                <UserSave />
                <TopButton />
            <Footer />
        </>
    )
}

export default MyPage;