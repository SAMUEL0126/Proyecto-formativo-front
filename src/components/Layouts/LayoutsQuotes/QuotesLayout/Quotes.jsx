import React from 'react'
import { SubTittle } from '../../../UI/UiQuotes/SubTittle/SubTittle.jsx'
import { TittleQuotes } from '../../../UI/UiQuotes/TittleQuotes/TittleQuotes.jsx'
import '../QuotesLayout/Quotes.scss'

export const Quotes = () => {
  return (
    <div className='Quotes'>
        <TittleQuotes/>
        <SubTittle/>
    </div>
  )
}
