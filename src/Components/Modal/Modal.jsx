import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image1 from '../../Resources/1.jpg'
import Image2 from '../../Resources/2.jpg'
import Image3 from '../../Resources/3.jpg'

const getModalContent = (Id) => {
  switch (Id) {
    case 'IMAGE1':
      return (
        <>
          <img src={Image1} className='h-60 opacity-90 w-full' alt='Pictures' />
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left divide-y-4 divide-black'>
                <div className='mt-2'>
                  <h3 className='text-4xl font-semibold'>Full Meals Service, Benefits & downsides.</h3>
                  <p className='text-black text-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                  </p>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    case 'IMAGE2':
      return (
        <>
          <img src={Image2} className='h-60 opacity-90 w-full' alt='Pictures' />
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left divide-y-4 divide-black'>
                <div className='mt-2'>
                  <h3 className='text-4xl font-semibold'>Full Meals Service, Benefits & downsides.</h3>
                  <p className='text-black text-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                  </p>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    case 'IMAGE3':
      return (
        <>
          <img src={Image3} className='h-60 opacity-90 w-full' alt='Pictures' />
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left divide-y-4 divide-black'>
                <div className='mt-2'>
                  <h3 className='text-4xl font-semibold'>Full Meals Service, Benefits & downsides.</h3>
                  <p className='text-black text-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                  </p>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-2'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2'>Life Rules</h3>
                    <p className='text-black text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    case 'FOOTERMODAL':
      return (
        <>
          <div className='bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left divide-y-4 divide-primaryDark'>
                <div className='mt-10'>
                  <h3 className='text-4xl font-semibold text-primaryDark'>Plan & Prices.</h3>
                  <p className='text-white text-base'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                  </p>
                </div>
                <div className='mt-4'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2 text-primaryDark'>Life Rules</h3>
                    <p className='text-white text-xs w-1/2'>
                      Lorem  dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-4'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2 text-primaryDark'>Life Rules</h3>
                    <p className='text-white text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-4'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2 text-primaryDark'>Life Rules</h3>
                    <p className='text-white text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-4'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2 text-primaryDark'>Life Rules</h3>
                    <p className='text-white text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
                <div className='mt-4'>
                  <span className='flex mt-5'>
                    <h3 className='text-2xl font-semibold w-1/2 text-primaryDark'>Life Rules</h3>
                    <p className='text-white text-xs w-1/2'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae at nobis itaque pariatur vel voluptatum officia, ducimus rerum aliquam ipsa, voluptatem, distinctio sapiente. Alias iusto vitae porro delectus ducimus ipsam?
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )

    default:
      break
  }
}

export default function Modal ({ showModal, setShowModal, Id }) {
  const cancelButtonRef = useRef(null)
  window.fullpage_api?.setAllowScrolling(!showModal)
  const windowHeight = window.innerHeight
  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed modal h-42 z-10 inset-0 overflow-y-scroll'
        initialFocus={cancelButtonRef}
        open={showModal}
        onClose={setShowModal}
      >
        <div className='flex items-end justify-center min-h-1/2 pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div style={{ height: windowHeight - 100 }} className='inline-block align-bottom rounded-lg text-left overflow-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <button
                type='button'
                className='mt-6 fixed z-40 inline-flex justify-center rounded-full text-xs border border-white text-white shadow-sm ml-3 px-2 py-1 bg-transparent'
                onClick={() => setShowModal(false)}
                ref={cancelButtonRef}
              >
                X
              </button>
              {getModalContent(Id)}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
