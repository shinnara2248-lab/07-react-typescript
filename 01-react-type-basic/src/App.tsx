import './App.css'
import { Props1 } from './type-basic-components/01-props/Props1'
import { Props2 } from './type-basic-components/01-props/Props2'
import { Props3 } from './type-basic-components/01-props/Props3'
import { Props4 } from './type-basic-components/01-props/Props4'
import { Props5 } from './type-basic-components/01-props/Props5'
import { Props6 } from './type-basic-components/01-props/Props6'
import { StateArray3 } from './type-basic-components/02-state/StateArray3'
import { StateNumber1 } from './type-basic-components/02-state/StateNumber1'
import { StateObject4 } from './type-basic-components/02-state/StateObject4'
import { StateObjectArray5 } from './type-basic-components/02-state/StateObjectArray5'
import { StateObjectArrayFetch6 } from './type-basic-components/02-state/StateObjectArrayFetch6'
import { StateString2 } from './type-basic-components/02-state/StateString2'
import { PropsObjectArray1 } from './type-basic-components/03-props/PropsObjectArray1'
import { StateLike3 } from './type-basic-components/03-props/StateLike3'
import { EventChange6 } from './type-basic-components/04-event/EventChange6'
import { EventChange7 } from './type-basic-components/04-event/EventChange7'
import { EventChange8 } from './type-basic-components/04-event/EventChange8'
import { EventForm4 } from './type-basic-components/04-event/EventForm4'
import { EventKeyboard3 } from './type-basic-components/04-event/EventKeyboard3'
import { EventMouse1 } from './type-basic-components/04-event/EventMouse1'
import { EventMouse2 } from './type-basic-components/04-event/EventMouse2'
import { EventProps1 } from './type-basic-components/04-event/EventProps1'
import { EventProps2 } from './type-basic-components/04-event/EventProps2'
import { EventProps3 } from './type-basic-components/04-event/EventProps3'
import { EventSubmit5 } from './type-basic-components/04-event/EventSubmit5'

// 아이디, 제목, 이미지 사이즈, 이미지 경로
const product = {
  id: 1,
  title: "수박스무디",
  imgSize: 150,
  imgSrc: "/images/goods3.png"
}
function App() {
  return (
    <>
      <h2>Props 전달</h2>
      <p>속성 변수 전달하기</p>
      <Props1 name="짱구" />
      <Props2 name="신나라" age={25} tel="010-5454-7678" />
      <Props3 name="흰둥이" age={3} isAdult={false} />
      <Props4 color="Blue" isColor={true} />
      <Props5 sId={product.id} sTitle={product.title} imgSize={product.imgSize} imgUrl={product.imgSrc} />
      <Props6 sendItem={product} />
      <hr />

      <h2>상태변수 선언</h2>
      <StateNumber1 />
      <StateString2 />
      <StateArray3 />
      <StateObject4 />
      <StateObjectArray5 />
      <StateObjectArrayFetch6 />
      <hr />

      <h2>중간점검</h2>
      <PropsObjectArray1 />
      <StateLike3 />

      <h2>이벤트</h2>
      {/* 
      React.이벤트종류<태그>
      태그 : HTML태그Element 태그의 첫 문자로

      React.MouseEvent<태그>
      React.KeyboardEvent<태그>
      React.FormEvent<태그> : input
      React.SubmitEvent<태그>
      React.ChangeEvent<태그>
       */}
      <EventMouse1 />
      <EventMouse2 />
      <EventKeyboard3 />
      <EventForm4 />
      <EventSubmit5 />
      <EventChange6 />
      <EventChange7 />
      <EventChange8 />
      <EventProps1 />
      <EventProps2 />
      <EventProps3 />
    </>
  )
}

export default App
