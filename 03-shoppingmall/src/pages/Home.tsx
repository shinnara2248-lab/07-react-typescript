import React from 'react'
import { HeroSwiper } from '../components/HeroSwiper'
import { SectionTitle } from '../components/SectionTitle'
import { SectionSwiper } from '../components/SectionSwiper'
import"./scss/Home.scss"

export const Home = () => {
  return (
    <div className='container'>
        <HeroSwiper/>
        <main>
          <section className='inner'>
            <SectionTitle 
            title="SPECIAL OFFER"
            subTitle="다가오는 겨울을 맞아 스페셜 혜택을 만나보세요"
            />
            <SectionSwiper category="" count={4}/>
          </section>
          <section className='inner'>
            <SectionTitle 
            title="NOW TRENDING"
            subTitle="이번 시즌 가장 주목받은 인기 아이템 모음.zip"
            />
            <div className="women-list">
              <div className="women-left">
                <img src="/images/women-big.jpg" alt="" />
              </div>
              <div className="women-right">
                <SectionSwiper category="women" count={2}/>
              </div>
            </div>
          </section>
          <section>
            <SectionTitle 
            title="낮과 밤 사이, 필요한 한 겹"
            subTitle="부담 없이 따뜻함을 더하는 경량 패딩"
            />
            <SectionSwiper category="shoes" count={5}/>
          </section>
        </main>
    </div>
  )
}
