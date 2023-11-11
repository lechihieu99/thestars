import aries from '../../asset/image/aries.png'
import taurus from '../../asset/image/taurus.png'
import gemini from '../../asset/image/gemini.png'
import cancer from '../../asset/image/cancer.png'
import leo from '../../asset/image/leo.png'
import virgo from '../../asset/image/virgo.png'
import libra from '../../asset/image/libra.png'
import scorpius from '../../asset/image/scorpius.png'
import sagittarius from '../../asset/image/sagittarius.png'
import capricorn from '../../asset/image/capricorn.png'
import aquarius from '../../asset/image/aquarius.png'
import pisces from '../../asset/image/pisces.png'
import Image from 'next/image'

import Modal from 'react-modal';
import { useState } from 'react'

const zodiac = [
    {
        type: 'aries',
        image: aries
    },
    {
        type: 'taurus',
        image: taurus
    },
    {
        type: 'gemini',
        image: gemini
    },
    {
        type: 'cancer',
        image: cancer
    },
    {
        type: 'leo',
        image: leo
    },
    {
        type: 'virgo',
        image: virgo
    },
    {
        type: 'libra',
        image: libra
    },
    {
        type: 'scorpius',
        image: scorpius
    },
    {
        type: 'sagittarius',
        image: sagittarius
    },
    {
        type: 'capricorn',
        image: capricorn
    },
    {
        type: 'aquarius',
        image: aquarius
    },
    {
        type: 'pisces',
        image: pisces
    }
]

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Card = ({ type, content }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            {zodiac.map((item) =>
                type === item.type && (
                    <div key={Math.floor(Math.random() * 1000) + item.type} className='w-1/3 sm:w-1/5 relative' onClick={openModal}>
                        <Image alt={item.type} src={item.image} className="w-full" />
                        <div className='absolute w-full h-full top-0 left-0 p-[2px] flex justify-center items-center'>
                            <div className='w-full h-full rounded-[15%] p-2 sm:p-4 content'>
                                <div className="w-full h-[80%] overflow-hidden">
                                    <span className='text-[10px] sm:text-sm text-gray-200'>{content}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='w-full h-full flex'>
                    {zodiac.map((item) =>
                        type === item.type && (
                            <div key={Math.floor(Math.random() * 1000) + item.type} className='w-1/3'>
                                <Image alt={item.type} src={item.image} className="w-full" />
                            </div>
                        )
                    )}
                    <span className='w-2/3 p-2 text-sm'>{content}</span>

                </div>
            </Modal>
        </>
    )
}

export default Card;