import WindowSlide from '../Components/WindowSlide/WindowSlide'
import ReactFullpage from '@fullpage/react-fullpage'
import Slider from '../Components/Slider/Slider'

function Home () {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={500}
        fitToSectionDelay={500}
        verticalCentered={false}
        normalScrollElements='.navbar'
        dragAndMove
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Slider picture='1'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Register Now'
                  rightBtnText='Learn More'
                  title='Nursery'
                  animation
                />
              </Slider>
              {/* <Slider className='section bg-picture-2 bg-center bg-cover flex flex-col h-screen'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Left Button'
                  rightBtnText='Left Button'
                />
              </Slider>
              <Slider className='section bg-picture-3 bg-center bg-cover flex flex-col h-screen'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Left Button'
                  rightBtnText='Left Button'
                />
              </Slider> */}
              <Slider picture='4'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Register Now'
                  rightBtnText='Learn More'
                  title='Kindergarten'
                />
              </Slider>
              <Slider picture='5'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Register Now'
                  rightBtnText='Learn More'
                  title='Preschool'
                />
              </Slider>
              {/* <Slider className='section bg-picture-6 bg-center bg-cover flex flex-col h-screen'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Left Button'
                  rightBtnText='Left Button'
                />
              </Slider>
              <Slider className='section bg-picture-7 bg-center bg-cover flex flex-col h-screen'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Left Button'
                  rightBtnText='Left Button'
                />
              </Slider>
              <Slider className='section bg-picture-8 bg-center bg-cover flex flex-col h-screen'>
                <WindowSlide
                  filter='filter invert'
                  leftBtnText='Left Button'
                  rightBtnText='Left Button'
                />
              </Slider> */}
              <Slider picture='9'>
                <WindowSlide
                  title='Afterschool'
                  filter='filter invert'
                  leftBtnText='Register Now'
                  rightBtnText='Learn More'
                />
              </Slider>
              <Slider picture='10'>
                <WindowSlide
                  title='Summer camp'
                  filter='filter invert'
                  leftBtnText='Register Now'
                  rightBtnText='Learn More'
                />
              </Slider>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export default Home
