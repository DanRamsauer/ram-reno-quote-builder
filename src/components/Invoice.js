import React from 'react';

function Invoice() {
    return (
        <>
            <form action="">
            
            <label htmlFor="invoiceName" className='sr-only'>Invoice</label>
            <input type="text" name='incoiceName' placeholder='Invoice' />

            <div className="from"> {/* Start of from Div */}
            <h2>From</h2>

            <label htmlFor="name" className='sr-only'>Name</label>
            <input type="text" name='name' placeholder='Buisness Name' />

            <label htmlFor="email" className='sr-only'>Email</label>
            <input type="email" name='email' placeholder='name@buisness.com' />

            <label htmlFor="adress" className='sr-only'>Adress</label>
            <input type="adress" name='adress' placeholder='123 Elm street' />

            <label htmlFor="phone" className='sr-only'>Phone</label>
            <input type="phone" name='phone' placeholder='(123) 456 7891' />

            <label htmlFor="gst" className='sr-only'>GST#</label>
            <input type="text" name='gst' placeholder='123133' />
            </div> {/* End of from Div */}

            <div className="to"> {/* Start of to Div */}
            <h2>To</h2>

            <label htmlFor="name" className='sr-only'>Name</label>
            <input type="text" name='name' placeholder='Client Name' />

            <label htmlFor="email" className='sr-only'>Email</label>
            <input type="email" name='email' placeholder='name@client.com' />

            <label htmlFor="adress" className='sr-only'>Adress</label>
            <input type="adress" name='adress' placeholder='123 Elm street' />

            <label htmlFor="phone" className='sr-only'>Phone</label>
            <input type="phone" name='phone' placeholder='(123) 456 7891' />
            </div> {/* End of to Div */}


            </form>
        </>
    );
}

export default Invoice;
