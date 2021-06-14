import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image1 from '../../Resources/1.jpg'

export default function Modal ({ showModal, setShowModal }) {
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
            <div style={{ height: (windowHeight / 2) + 150 }} className='inline-block align-bottom rounded-lg text-left overflow-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <button
                type='button'
                className='mt-6 fixed z-40 inline-flex justify-center text-xs rounded-full border border-white text-white shadow-sm ml-3 px-2 py-1 bg-transparent'
                onClick={() => setShowModal(false)}
                ref={cancelButtonRef}
              >
                X
              </button>
              <img src={Image1} className='h-60 opacity-90 w-full' alt='Pictures' />
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    {/* <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                      Deactivate account
                    </Dialog.Title> */}
                    <div className='mt-2'>
                      <p className='text-sm text-black'>
                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                        This action cannot be undone.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, reiciendis. Aliquid amet quaerat dolor, maxime adipisci blanditiis ut ex soluta eum, rerum velit accusamus, porro consectetur? Molestias soluta et magni.
                        Sequi modi quae beatae aliquid, commodi ipsam odio iste ullam repudiandae porro possimus vero earum, dignissimos, ab sint incidunt cum voluptate necessitatibus sapiente libero accusamus veniam. Fuga, aliquam delectus? Repellat.
                        Repellendus perspiciatis dolorum provident deserunt aliquid minus culpa facilis impedit doloremque? Temporibus officia labore odio voluptatibus ipsum explicabo aliquam, adipisci aspernatur recusandae at asperiores voluptatem nulla consectetur. Quasi, pariatur. Reiciendis?
                        Provident repellendus odit delectus iure natus architecto error? Aliquam dolorum labore, eius porro pariatur deserunt, cumque explicabo et illo consequatur consectetur dolor voluptatum ullam sequi, iusto quo non dolores sed.
                        Ullam vitae natus consectetur obcaecati deserunt at, architecto repellat, corrupti unde voluptatum maiores enim facere accusamus aspernatur. Hic molestias tempora cupiditate odit iure corporis reiciendis iusto enim officia. Ullam, ipsa?
                        Reiciendis sed tenetur culpa quis nobis. Officia natus maxime, dolorem delectus error magni ducimus voluptas enim eaque unde possimus dolorum sed praesentium vero repudiandae, doloremque voluptates assumenda nisi. Esse, placeat.
                        Officia, eius ullam vel eveniet illo nesciunt, dolores, repudiandae ex porro asperiores facilis deleniti modi quidem deserunt labore possimus quaerat! Nam asperiores obcaecati quisquam perspiciatis magnam, adipisci nostrum tempore quibusdam!
                        Necessitatibus reprehenderit nulla dolor minima consequuntur iusto a totam, cum eos, tenetur sit et cupiditate dicta quibusdam eveniet dolorem neque nobis mollitia animi explicabo quasi? Voluptas necessitatibus accusantium soluta exercitationem!
                        Veniam enim accusamus porro consequuntur ad debitis qui labore incidunt, ut saepe iure id magni sit esse provident quas expedita reiciendis deserunt iusto sequi quis facere doloribus. Quisquam, ipsa expedita?
                        Animi sed reprehenderit perspiciatis dolores ipsa culpa doloremque quas? Nesciunt eveniet inventore dolores veniam amet minima molestias eos quaerat provident expedita facere quos ratione totam aut, tempora quo nihil pariatur.
                        Consequatur qui veritatis veniam? Aliquam corrupti hic exercitationem odit fugiat, nesciunt dignissimos blanditiis, alias facere ut sequi placeat quasi tempore sint distinctio nulla enim optio iste quas deserunt. In, error.
                        Officiis rerum consequatur eum ab pariatur sit non voluptate nemo accusantium minus recusandae expedita esse labore praesentium reiciendis tempora, reprehenderit adipisci fuga hic quia quis delectus laudantium! Aut, quas blanditiis?
                        Quis blanditiis unde minus doloremque nihil vitae natus, obcaecati quidem id molestias voluptatem veritatis illum amet porro nam delectus labore provident? Laboriosam commodi veritatis consectetur aliquid natus nisi, cum aspernatur!
                        Voluptate maxime voluptas repellat, minima repellendus animi optio expedita possimus dolorum fugit nemo, natus delectus dolorem facere eos recusandae laboriosam reprehenderit adipisci assumenda corporis. Ipsa minus commodi voluptatum mollitia unde.
                        Facere itaque quod iure, harum corrupti quidem dolorem earum excepturi. Magni maiores deleniti porro ratione dolorum ipsum optio? Itaque accusantium recusandae veritatis consequatur cumque ipsa tempora architecto consectetur voluptate sint!
                        Eius hic consequatur repellendus ea! Accusamus quae dolore nulla ad pariatur cupiditate sit similique tempora hic! Magnam obcaecati unde ipsa eius rerum aperiam iusto molestias doloribus sit laborum? Inventore, nihil.
                        Voluptate sit eum quod deserunt dicta magni, explicabo assumenda quas, eius expedita vel nemo ex quasi fugiat maiores illo reiciendis repellat laboriosam. Voluptatum sit voluptate vel magni. Magnam, alias commodi!
                        Ea magni odio sit esse consequatur fuga, sint odit. Itaque minus sit perspiciatis, similique nihil libero molestiae, unde accusamus, harum tempora dolor? Quo ad ullam vitae in, reprehenderit quae possimus.
                        Optio dolor ullam consequuntur labore corporis similique officia, eaque aspernatur ipsum distinctio dignissimos nostrum possimus sint minus voluptates, officiis fuga unde commodi. Blanditiis numquam, harum delectus perferendis perspiciatis nemo alias.
                        Soluta quod, velit error delectus corrupti perferendis magni repellat culpa quaerat magnam modi voluptatum reiciendis hic placeat consequatur laudantium expedita, dolorum dolor. Est optio possimus fuga magni repellat nesciunt quos!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
