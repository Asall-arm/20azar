import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { FiUsers } from 'react-icons/bi'
import { BsBagCheck, BsCurrencyDollar } from 'react-icons/bi'




export default function sidebar() {
  return (
    <div className='sidebar'>
        <h1 className='sidebar-title'>
            به داشبورد خود خوش آمدید
        </h1>

        <ul className='sidebar-link'>
            <li>
                <link to="/"> <AiOutlineHome className='icon'/> صفحه اصلی</link>
            </li>
            <li className='active'>
                <link to="/products"><MdProductionQuantityLimits className='icon'/> محصولات</link>
            </li>
            <li>
                <link to="/users"><FiUsers className='icon'/> کاربران</link>
            </li>
            <li>
                <link to="orders"><BsBagCheck className='icon'/> سفارشات</link>
            </li>
            <li>
                <link to="comments"><BiCommentDetail className='icon'/> کامنت ها</link>
            </li>
            <li>
                <link to="/offs"><BsCurrencyDollar className='icon'/> تخفیف ها</link>
            </li>
        </ul>

    </div>
  )
}
