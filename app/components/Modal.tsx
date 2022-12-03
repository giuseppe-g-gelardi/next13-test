
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import { PokemonDetailResponse } from '../types/Pokemon'

type ModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title: string
  images: PokemonDetailResponse['sprites']
}

export default function Modal({ isOpen, setIsOpen, title, images }: ModalProps) {
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-500 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    <div className='flex w-full justify-between'>
                      <h1 className="flex text-2xl font-bold flex-start">{title}</h1>
                      <button
                        onClick={() => setIsOpen(false)}
                        className='flex bg-red-200 hover:bg-rose-400 items-center px-2 rounded-lg'>X</button>
                    </div>
                  </Dialog.Title>

                  {/* content */}
                  {/* content */}
                  {/* content */}
                  {/* content */}
                  {/* content */}

                  <Image src={images?.front_default!} width={400} height={400} alt='' />

                  {/* content */}
                  {/* content */}
                  {/* content */}
                  {/* content */}
                  {/* content */}

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cool, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
