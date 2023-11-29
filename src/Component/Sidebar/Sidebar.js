import React from 'react'

export default function sidebar() {
  return (
    <div className='sidebar'>
        <h1 className='sidebar-title'>
            به داشبورد خود خوش آمدید
        </h1>

        <ul className='sidebar-link'>
            <li>
                <link href="#">صفحه اصلی</link>
            </li>
            <li className='active'>
                <link href="#">محصولات</link>
            </li>
            <li>
                <link href="#">کاربران</link>
            </li>
            <li>
                <link href="#">سفارشات</link>
            </li>
            <li>
                <link href="#">کامنت ها</link>
            </li>
            <li>
                <link href="#">تخفیف ها</link>
            </li>
        </ul>

    </div>
  )
}
