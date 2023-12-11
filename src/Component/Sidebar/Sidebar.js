import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { BiSolidUser } from 'react-icons/bi'
import { BiSolidShoppingBag, BiDollar } from 'react-icons/bi'




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
                <link to="/users"><BiSolidUser className='icon'/> کاربران</link>
            </li>
            <li>
                <link to="orders"><BiSolidShoppingBag className='icon'/> سفارشات</link>
            </li>
            <li>
                <link to="comments"><BiCommentDetail className='icon'/> کامنتها</link>
            </li>
            <li>
                <link to="/offs"><BiDollar className='icon'/> تخفیفها</link>
            </li>
        </ul>

    </div>
  )
}