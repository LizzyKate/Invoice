import logo from '../../assets/img/logo.svg'
import moon from '../../assets/img/moon.svg'
import user from '../../assets/img/user.svg'

export default function SideBar() {
    return (

        <div className="bg-blue-100 flex flex-col justify-end items-center relative  rounded-br-md" style={{ width: '6%' }}>
            <div className='absolute top-0'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='mb-8'>
                <button className='focus:outline-none'>
                    <img src={moon} alt="" />
                </button>
            </div>
            <div className='border-t border-gray-600 w-full mb-8'>
                <img src={user} alt="" className='mx-auto mt-8' />
            </div>

        </div>

    )
}