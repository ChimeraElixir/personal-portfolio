import React from 'react'

import ContactItem from './ContactItem'


const contact_items =[
    {
        name: 'mail outline',
        p:"Email",
        href:"mailto:richard@example.com",
        value : "gaurav@example.com",
    },
    {
        name:"phone-portrait-outline",
        p:"Phone",
        href:"tel:+12133522795",
        value : "+1 (213) 352-2795",
    },

]

const ContactList = () => {
  return (
    <ul className='contacts-list'>
        {contact_items.map((contact_item)=>{
            return (<ContactItem {...contact_item}/>)
        })}
    </ul>
  )
};

export default ContactList